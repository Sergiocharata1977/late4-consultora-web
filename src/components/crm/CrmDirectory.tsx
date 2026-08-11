'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, writeBatch } from 'firebase/firestore';
import { Building2, Download, ExternalLink, LayoutGrid, Link2, List, Mail, MapPin, Pencil, Phone, Plus, Search, X } from 'lucide-react';
import { db } from '@/lib/firebase';
import industrialParksData from '@/data/industrial-parks.json';

type Company = {
  id: string;
  name: string;
  legalName?: string;
  taxId?: string;
  industry?: string;
  website?: string;
  groupName?: string;
  location?: string;
  parkName?: string;
  publicContact?: string;
  sourceUrl?: string;
  organizationType?: 'company' | 'industrial_park';
  sourceSheet?: string;
  importKey?: string;
  notes?: string;
  status?: 'prospect' | 'active' | 'inactive';
};

type Person = {
  id: string;
  name: string;
  position?: string;
  email?: string;
  phone?: string;
  companyIds: string[];
  notes?: string;
  active?: boolean;
};

const emptyCompany = { name: '', legalName: '', taxId: '', industry: '', website: '', groupName: '', location: '', parkName: '', publicContact: '', sourceUrl: '', organizationType: 'company' as NonNullable<Company['organizationType']>, notes: '', status: 'prospect' as NonNullable<Company['status']> };
const emptyPerson = { name: '', position: '', email: '', phone: '', companyIds: [] as string[], notes: '', active: true };

export default function CrmDirectory({ view }: { view: 'companies' | 'contacts' }) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [people, setPeople] = useState<Person[]>([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [companyForm, setCompanyForm] = useState(emptyCompany);
  const [personForm, setPersonForm] = useState(emptyPerson);
  const [error, setError] = useState('');
  const [companyView, setCompanyView] = useState<'cards' | 'list'>('cards');
  const [importing, setImporting] = useState(false);
  const [notice, setNotice] = useState('');
  const [companiesLoaded, setCompaniesLoaded] = useState(false);
  const automaticImportAttempted = useRef(false);

  useEffect(() => {
    const stopCompanies = onSnapshot(query(collection(db, 'crmCompanies'), orderBy('createdAt', 'desc')), (snapshot) => {
      setCompanies(snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as Company)));
      setCompaniesLoaded(true);
    }, (snapshotError) => setError(snapshotError.message));
    const stopPeople = onSnapshot(query(collection(db, 'crmContacts'), orderBy('createdAt', 'desc')), (snapshot) => {
      setPeople(snapshot.docs.map((item) => ({ id: item.id, ...item.data(), companyIds: item.data().companyIds ?? [] } as Person)));
    }, (snapshotError) => setError(snapshotError.message));
    return () => { stopCompanies(); stopPeople(); };
  }, []);

  const filteredCompanies = useMemo(() => {
    const term = search.toLocaleLowerCase('es').trim();
    return companies.filter((company) => !term || [company.name, company.legalName, company.groupName, company.industry, company.location, company.parkName, company.publicContact].some((value) => value?.toLocaleLowerCase('es').includes(term)));
  }, [companies, search]);

  const filteredPeople = useMemo(() => {
    const term = search.toLocaleLowerCase('es').trim();
    return people.filter((person) => !term || [person.name, person.position, person.email, person.phone, ...person.companyIds.map((id) => companies.find((company) => company.id === id)?.name)].some((value) => value?.toLocaleLowerCase('es').includes(term)));
  }, [companies, people, search]);

  const close = () => {
    setOpen(false); setEditingId(null); setCompanyForm(emptyCompany); setPersonForm(emptyPerson); setError('');
  };

  const editCompany = (company: Company) => {
    setEditingId(company.id);
    setCompanyForm({ name: company.name, legalName: company.legalName ?? '', taxId: company.taxId ?? '', industry: company.industry ?? '', website: company.website ?? '', groupName: company.groupName ?? '', location: company.location ?? '', parkName: company.parkName ?? '', publicContact: company.publicContact ?? '', sourceUrl: company.sourceUrl ?? '', organizationType: company.organizationType ?? 'company', notes: company.notes ?? '', status: company.status ?? 'prospect' });
    setOpen(true);
  };

  const editPerson = (person: Person) => {
    setEditingId(person.id);
    setPersonForm({ name: person.name, position: person.position ?? '', email: person.email ?? '', phone: person.phone ?? '', companyIds: person.companyIds, notes: person.notes ?? '', active: person.active !== false });
    setOpen(true);
  };

  const save = async (event: FormEvent) => {
    event.preventDefault(); setSaving(true); setError('');
    try {
      const collectionName = view === 'companies' ? 'crmCompanies' : 'crmContacts';
      const values = view === 'companies' ? companyForm : personForm;
      const payload = { ...values, updatedAt: serverTimestamp() };
      if (editingId) await updateDoc(doc(db, collectionName, editingId), payload);
      else await addDoc(collection(db, collectionName), { ...payload, createdAt: serverTimestamp() });
      close();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'No se pudo guardar.');
    } finally { setSaving(false); }
  };

  const relatedCompanies = (company: Company) => company.groupName
    ? companies.filter((item) => item.id !== company.id && item.groupName?.trim().toLocaleLowerCase('es') === company.groupName?.trim().toLocaleLowerCase('es'))
    : [];

  const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const importIndustrialParks = async () => {
    setImporting(true); setError(''); setNotice('');
    try {
      const existing = new Set(companies.map((company) => company.importKey || `${normalize(company.name)}--${normalize(company.location ?? '')}`));
      const pending = industrialParksData.filter((item) => !existing.has(`${normalize(item.name)}--${normalize(item.location)}`));
      if (!pending.length) { setNotice('La base de parques industriales ya está cargada y actualizada.'); return; }
      const batch = writeBatch(db);
      pending.forEach((item) => {
        const importKey = `${normalize(item.name)}--${normalize(item.location)}`;
        batch.set(doc(db, 'crmCompanies', `industrial-base--${importKey}`), { ...item, importKey, status: 'prospect', createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      });
      await batch.commit();
      setNotice(`Se importaron ${pending.length} registros sin duplicar los existentes.`);
    } catch (importError) {
      setError(importError instanceof Error ? importError.message : 'No se pudo importar la base.');
    } finally { setImporting(false); }
  };

  useEffect(() => {
    if (view !== 'companies' || !companiesLoaded || automaticImportAttempted.current) return;
    automaticImportAttempted.current = true;
    void importIndustrialParks();
    // La importacion se ejecuta una sola vez al recibir el primer snapshot autorizado.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companiesLoaded, view]);

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">CRM interno</p>
          <h1 className="mt-2 text-3xl font-extrabold">{view === 'companies' ? 'Empresas' : 'Contactos'}</h1>
          <p className="mt-2 text-sm text-late4-slate">{view === 'companies' ? 'Organizaciones, grupos empresarios y relaciones comerciales.' : 'Personas vinculadas a una o varias empresas.'}</p>
        </div>
        <div className="flex flex-wrap gap-2">{view === 'companies' && <button className="btn-secondary gap-2" disabled={importing} onClick={importIndustrialParks}><Download size={17} /> {importing ? 'Importando…' : 'Importar parques'}</button>}<button className="btn-primary gap-2" onClick={() => setOpen(true)}><Plus size={17} /> {view === 'companies' ? 'Nueva empresa' : 'Nuevo contacto'}</button></div>
      </div>

      {error && <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {notice && <p className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{notice}</p>}

      <section className="mt-7 overflow-hidden rounded-xl border border-late4-ink/5 bg-white shadow-sm">
        <div className="flex items-center justify-between gap-3 border-b border-late4-ink/5 p-4"><div className="relative w-full max-w-md"><Search className="absolute left-3 top-3 text-late4-slate" size={17} /><input className="w-full rounded-lg bg-late4-paper py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-late4-teal" onChange={(event) => setSearch(event.target.value)} placeholder={view === 'companies' ? 'Buscar empresa, grupo o actividad' : 'Buscar persona, empresa, email o teléfono'} value={search} /></div>{view === 'companies' && <div className="flex gap-2">{([['cards', LayoutGrid], ['list', List]] as const).map(([value, Icon]) => <button aria-label={`Vista ${value}`} className={`grid h-10 w-10 place-items-center rounded-lg border ${companyView === value ? 'border-late4-teal bg-late4-teal-soft text-late4-teal' : 'border-late4-ink/10 text-late4-slate'}`} key={value} onClick={() => setCompanyView(value)}><Icon size={17} /></button>)}</div>}</div>

        {view === 'companies' && companyView === 'cards' ? (
          <div className="grid gap-4 bg-late4-paper/40 p-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCompanies.map((company) => {
              const related = relatedCompanies(company);
              const contacts = people.filter((person) => person.companyIds.includes(company.id));
              return <article className="rounded-xl border border-late4-ink/5 bg-white p-5 shadow-sm" key={company.id}>
                <div className="flex items-start justify-between gap-3"><div className="flex gap-3"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-late4-teal-soft text-late4-teal"><Building2 size={20} /></div><div><h2 className="font-extrabold">{company.name}</h2><p className="mt-1 text-xs text-late4-slate">{company.industry || company.legalName || 'Sin actividad registrada'}</p>{company.organizationType === 'industrial_park' && <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-1 text-[10px] font-extrabold uppercase text-amber-700">Parque / distrito</span>}</div></div><button className="grid h-9 w-9 place-items-center rounded-lg bg-late4-paper text-late4-slate" onClick={() => editCompany(company)}><Pencil size={15} /></button></div>
                {(company.location || company.parkName) && <div className="mt-4 space-y-1 text-xs text-late4-slate">{company.location && <p className="flex items-center gap-1.5"><MapPin size={13} />{company.location}</p>}{company.parkName && <p className="flex items-center gap-1.5"><Building2 size={13} />{company.parkName}</p>}</div>}
                {(company.publicContact || company.sourceUrl) && <div className="mt-3 flex flex-wrap gap-2 text-xs">{company.publicContact && <span className="text-late4-slate">{company.publicContact}</span>}{company.sourceUrl && <a className="inline-flex items-center gap-1 font-bold text-late4-teal" href={company.sourceUrl} rel="noreferrer" target="_blank">Fuente <ExternalLink size={11} /></a>}</div>}
                {company.groupName && <div className="mt-4 rounded-lg bg-late4-paper p-3"><p className="flex items-center gap-1.5 text-xs font-extrabold uppercase text-late4-teal"><Link2 size={13} /> Grupo {company.groupName}</p><p className="mt-1 text-xs text-late4-slate">{related.length ? `Relacionada con ${related.map((item) => item.name).join(', ')}` : 'Primera empresa registrada de este grupo'}</p></div>}
                <div className="mt-4 flex items-center justify-between border-t border-late4-ink/5 pt-4 text-xs"><span className="font-bold text-late4-slate">{contacts.length} contacto{contacts.length === 1 ? '' : 's'}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 font-bold">{company.status === 'active' ? 'Cliente' : company.status === 'inactive' ? 'Inactiva' : 'Prospecto'}</span></div>
              </article>;
            })}
            {!filteredCompanies.length && <p className="col-span-full py-10 text-center text-sm text-late4-slate">Todavía no hay empresas registradas.</p>}
          </div>
        ) : view === 'companies' ? (
          <div className="overflow-x-auto"><table className="w-full min-w-[980px] text-left text-sm"><thead className="bg-late4-paper/70 text-[11px] uppercase tracking-wider text-late4-slate"><tr><th className="px-5 py-3">Empresa</th><th className="px-5 py-3">Ubicación</th><th className="px-5 py-3">Parque / distrito</th><th className="px-5 py-3">Actividad</th><th className="px-5 py-3">Contactos</th><th className="px-5 py-3">Estado</th><th className="px-5 py-3 text-right">Acción</th></tr></thead><tbody className="divide-y divide-late4-ink/5">{filteredCompanies.map((company) => <tr key={company.id}><td className="px-5 py-4"><p className="font-extrabold">{company.name}</p><p className="text-xs text-late4-slate">{company.organizationType === 'industrial_park' ? 'Parque / distrito' : company.legalName || company.taxId || '—'}</p></td><td className="px-5 py-4 text-late4-slate">{company.location || '—'}</td><td className="px-5 py-4 text-late4-slate">{company.parkName || '—'}</td><td className="px-5 py-4 text-late4-slate">{company.industry || '—'}</td><td className="px-5 py-4 font-bold">{people.filter((person) => person.companyIds.includes(company.id)).length}</td><td className="px-5 py-4">{company.status === 'active' ? 'Cliente' : company.status === 'inactive' ? 'Inactiva' : 'Prospecto'}</td><td className="px-5 py-4 text-right"><button className="grid h-9 w-9 place-items-center rounded-lg bg-late4-paper text-late4-slate" onClick={() => editCompany(company)}><Pencil size={15} /></button></td></tr>)}{!filteredCompanies.length && <tr><td className="px-5 py-10 text-center text-late4-slate" colSpan={7}>Todavía no hay empresas registradas.</td></tr>}</tbody></table></div>
        ) : (
          <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-late4-paper/70 text-[11px] uppercase tracking-wider text-late4-slate"><tr><th className="px-5 py-3">Contacto</th><th className="px-5 py-3">Cargo</th><th className="px-5 py-3">Empresas vinculadas</th><th className="px-5 py-3">Estado</th><th className="px-5 py-3 text-right">Acciones</th></tr></thead><tbody className="divide-y divide-late4-ink/5">
            {filteredPeople.map((person) => <tr key={person.id}><td className="px-5 py-4"><p className="font-extrabold">{person.name}</p><div className="mt-1 flex gap-3 text-xs text-late4-teal">{person.email && <a className="inline-flex items-center gap-1" href={`mailto:${person.email}`}><Mail size={12} />{person.email}</a>}{person.phone && <span className="inline-flex items-center gap-1"><Phone size={12} />{person.phone}</span>}</div></td><td className="px-5 py-4 text-late4-slate">{person.position || '—'}</td><td className="px-5 py-4"><div className="flex flex-wrap gap-1.5">{person.companyIds.map((id) => <span className="rounded-full bg-late4-teal-soft px-2.5 py-1 text-xs font-bold text-late4-teal" key={id}>{companies.find((company) => company.id === id)?.name ?? 'Empresa eliminada'}</span>)}{!person.companyIds.length && <span className="text-late4-slate">Sin empresa</span>}</div></td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${person.active !== false ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>{person.active !== false ? 'Activo' : 'Inactivo'}</span></td><td className="px-5 py-4 text-right"><button className="grid h-9 w-9 place-items-center rounded-lg bg-late4-paper text-late4-slate" onClick={() => editPerson(person)}><Pencil size={15} /></button></td></tr>)}
            {!filteredPeople.length && <tr><td className="px-5 py-10 text-center text-late4-slate" colSpan={5}>Todavía no hay contactos registrados.</td></tr>}
          </tbody></table></div>
        )}
      </section>

      {open && <div className="fixed inset-0 z-50 grid place-items-center bg-late4-ink/60 p-4 backdrop-blur-sm"><section className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"><header className="sticky top-0 flex items-center justify-between border-b border-late4-ink/10 bg-white px-6 py-5"><div><p className="eyebrow">CRM</p><h2 className="mt-1 text-2xl font-extrabold">{editingId ? 'Editar' : 'Crear'} {view === 'companies' ? 'empresa' : 'contacto'}</h2></div><button className="grid h-9 w-9 place-items-center rounded-lg bg-late4-paper" onClick={close}><X size={17} /></button></header><form className="p-6" onSubmit={save}><div className="grid gap-4 md:grid-cols-2">
        {view === 'companies' ? <>
          <Input label="Nombre comercial *"><input required value={companyForm.name} onChange={(event) => setCompanyForm({ ...companyForm, name: event.target.value })} /></Input><Input label="Razón social"><input value={companyForm.legalName} onChange={(event) => setCompanyForm({ ...companyForm, legalName: event.target.value })} /></Input><Input label="CUIT / Identificación"><input value={companyForm.taxId} onChange={(event) => setCompanyForm({ ...companyForm, taxId: event.target.value })} /></Input><Input label="Actividad"><input value={companyForm.industry} onChange={(event) => setCompanyForm({ ...companyForm, industry: event.target.value })} /></Input><Input label="Tipo"><select value={companyForm.organizationType} onChange={(event) => setCompanyForm({ ...companyForm, organizationType: event.target.value as typeof companyForm.organizationType })}><option value="company">Empresa</option><option value="industrial_park">Parque / distrito industrial</option></select></Input><Input label="Ubicación"><input placeholder="Ciudad / municipio" value={companyForm.location} onChange={(event) => setCompanyForm({ ...companyForm, location: event.target.value })} /></Input><Input label="Parque / distrito"><input value={companyForm.parkName} onChange={(event) => setCompanyForm({ ...companyForm, parkName: event.target.value })} /></Input><Input label="Contacto público"><input value={companyForm.publicContact} onChange={(event) => setCompanyForm({ ...companyForm, publicContact: event.target.value })} /></Input><Input label="Fuente"><input type="url" value={companyForm.sourceUrl} onChange={(event) => setCompanyForm({ ...companyForm, sourceUrl: event.target.value })} /></Input><Input label="Grupo empresario"><input list="company-groups" placeholder="Ej.: Grupo Ceta" value={companyForm.groupName} onChange={(event) => setCompanyForm({ ...companyForm, groupName: event.target.value })} /><datalist id="company-groups">{[...new Set(companies.map((company) => company.groupName).filter((group): group is string => Boolean(group)))].map((group) => <option key={group} value={group} />)}</datalist></Input><Input label="Sitio web"><input value={companyForm.website} onChange={(event) => setCompanyForm({ ...companyForm, website: event.target.value })} /></Input><Input label="Estado"><select value={companyForm.status} onChange={(event) => setCompanyForm({ ...companyForm, status: event.target.value as typeof companyForm.status })}><option value="prospect">Prospecto</option><option value="active">Cliente</option><option value="inactive">Inactiva</option></select></Input><Input className="md:col-span-2" label="Notas"><textarea rows={3} value={companyForm.notes} onChange={(event) => setCompanyForm({ ...companyForm, notes: event.target.value })} /></Input>
        </> : <>
          <Input label="Nombre completo *"><input required value={personForm.name} onChange={(event) => setPersonForm({ ...personForm, name: event.target.value })} /></Input><Input label="Cargo / Rol"><input value={personForm.position} onChange={(event) => setPersonForm({ ...personForm, position: event.target.value })} /></Input><Input label="Email"><input type="email" value={personForm.email} onChange={(event) => setPersonForm({ ...personForm, email: event.target.value })} /></Input><Input label="Teléfono"><input value={personForm.phone} onChange={(event) => setPersonForm({ ...personForm, phone: event.target.value })} /></Input><fieldset className="md:col-span-2"><legend className="text-sm font-bold">Empresas vinculadas</legend><p className="mt-1 text-xs text-late4-slate">Podés seleccionar una o varias empresas.</p><div className="mt-3 grid gap-2 rounded-lg border border-late4-ink/10 p-3 sm:grid-cols-2">{companies.map((company) => <label className="flex items-center gap-2 text-sm" key={company.id}><input checked={personForm.companyIds.includes(company.id)} onChange={(event) => setPersonForm({ ...personForm, companyIds: event.target.checked ? [...personForm.companyIds, company.id] : personForm.companyIds.filter((id) => id !== company.id) })} type="checkbox" />{company.name}</label>)}{!companies.length && <p className="text-xs text-late4-slate">Primero creá una empresa.</p>}</div></fieldset><Input className="md:col-span-2" label="Notas"><textarea rows={3} value={personForm.notes} onChange={(event) => setPersonForm({ ...personForm, notes: event.target.value })} /></Input>
        </>}
      </div><div className="mt-6 flex justify-end gap-3 border-t border-late4-ink/10 pt-5"><button className="btn-secondary" onClick={close} type="button">Cancelar</button><button className="btn-primary" disabled={saving} type="submit">{saving ? 'Guardando…' : 'Guardar'}</button></div></form></section></div>}
    </div>
  );
}

function Input({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`block text-sm font-bold ${className}`}><span>{label}</span><div className="mt-2 [&>input]:w-full [&>input]:rounded-lg [&>input]:border [&>input]:border-late4-ink/15 [&>input]:px-3 [&>input]:py-2.5 [&>input]:font-normal [&>select]:w-full [&>select]:rounded-lg [&>select]:border [&>select]:border-late4-ink/15 [&>select]:bg-white [&>select]:px-3 [&>select]:py-2.5 [&>select]:font-normal [&>textarea]:w-full [&>textarea]:rounded-lg [&>textarea]:border [&>textarea]:border-late4-ink/15 [&>textarea]:px-3 [&>textarea]:py-2.5 [&>textarea]:font-normal">{children}</div></label>;
}
