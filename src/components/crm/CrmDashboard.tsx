'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  LogOut,
  Mail,
  MessageCircle,
  Pencil,
  Plus,
  Search,
  Trash2,
  User as UserIcon,
  Users,
  X,
} from 'lucide-react';
import { auth, db } from '@/lib/firebase';

type ContactStatus = 'new' | 'contacted' | 'qualified' | 'won' | 'archived';

type Contact = {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  status: ContactStatus;
  internalNotes?: string;
  nextActionAt?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
};

type ContactForm = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>;

const statuses: Array<{ value: ContactStatus; label: string; tone: string }> = [
  { value: 'new', label: 'Nuevo', tone: 'bg-blue-50 text-blue-700' },
  { value: 'contacted', label: 'Contactado', tone: 'bg-amber-50 text-amber-700' },
  { value: 'qualified', label: 'Calificado', tone: 'bg-violet-50 text-violet-700' },
  { value: 'won', label: 'Cliente', tone: 'bg-emerald-50 text-emerald-700' },
  { value: 'archived', label: 'Archivado', tone: 'bg-slate-100 text-slate-600' },
];

const emptyForm: ContactForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  source: 'carga-interna',
  status: 'new',
  internalNotes: '',
  nextActionAt: '',
};

function statusInfo(status: ContactStatus) {
  return statuses.find((item) => item.value === status) ?? statuses[0];
}

function formatDate(value?: Timestamp) {
  if (!value) return 'Sin fecha';
  return new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium' }).format(value.toDate());
}

function whatsappUrl(phone: string) {
  const normalized = phone.replace(/\D/g, '');
  return `https://wa.me/${normalized}`;
}

export default function CrmDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | ContactStatus>('all');
  const [editing, setEditing] = useState<Contact | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>(emptyForm);

  useEffect(() => onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setAuthReady(true);
    if (!currentUser) setLoading(false);
  }), []);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    const contactsQuery = query(collection(db, 'contactRequests'), orderBy('createdAt', 'desc'));
    return onSnapshot(contactsQuery, (snapshot) => {
      setContacts(snapshot.docs.map((item) => {
        const data = item.data();
        return {
          id: item.id,
          name: String(data.name ?? ''),
          company: String(data.company ?? ''),
          email: String(data.email ?? ''),
          phone: String(data.phone ?? ''),
          service: String(data.service ?? ''),
          message: String(data.message ?? ''),
          source: String(data.source ?? 'late4-web'),
          status: statuses.some((status) => status.value === data.status) ? data.status : 'new',
          internalNotes: String(data.internalNotes ?? ''),
          nextActionAt: String(data.nextActionAt ?? ''),
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        } as Contact;
      }));
      setError('');
      setLoading(false);
    }, (snapshotError) => {
      setError(snapshotError.message);
      setLoading(false);
    });
  }, [user]);

  const filteredContacts = useMemo(() => {
    const term = search.trim().toLocaleLowerCase('es');
    return contacts.filter((contact) => {
      const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
      const matchesSearch = !term || [contact.name, contact.company, contact.email, contact.phone]
        .some((value) => value?.toLocaleLowerCase('es').includes(term));
      return matchesStatus && matchesSearch;
    });
  }, [contacts, search, statusFilter]);

  const metrics = useMemo(() => ({
    total: contacts.filter((contact) => contact.status !== 'archived').length,
    new: contacts.filter((contact) => contact.status === 'new').length,
    active: contacts.filter((contact) => ['contacted', 'qualified'].includes(contact.status)).length,
    won: contacts.filter((contact) => contact.status === 'won').length,
  }), [contacts]);

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setEditorOpen(true);
  };

  const openEdit = (contact: Contact) => {
    setEditing(contact);
    setForm({
      name: contact.name,
      company: contact.company ?? '',
      email: contact.email,
      phone: contact.phone ?? '',
      service: contact.service ?? '',
      message: contact.message ?? '',
      source: contact.source ?? 'late4-web',
      status: contact.status,
      internalNotes: contact.internalNotes ?? '',
      nextActionAt: contact.nextActionAt ?? '',
    });
    setEditorOpen(true);
  };

  const closeEditor = () => {
    setEditing(null);
    setForm(emptyForm);
    setEditorOpen(false);
  };

  const submitLogin = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, loginEmail.trim(), loginPassword);
    } catch {
      setError('No pudimos iniciar sesión. Revisá el email y la contraseña.');
    } finally {
      setSaving(false);
    }
  };

  const saveContact = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    try {
      const payload = { ...form, updatedAt: serverTimestamp(), updatedBy: user?.uid ?? '' };
      if (editing) {
        await updateDoc(doc(db, 'contactRequests', editing.id), payload);
      } else {
        await addDoc(collection(db, 'contactRequests'), {
          ...payload,
          createdAt: serverTimestamp(),
          createdBy: user?.uid ?? '',
        });
      }
      closeEditor();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'No se pudo guardar el contacto.');
    } finally {
      setSaving(false);
    }
  };

  const removeContact = async (contact: Contact) => {
    if (!window.confirm(`¿Eliminar definitivamente a ${contact.name}?`)) return;
    try {
      await deleteDoc(doc(db, 'contactRequests', contact.id));
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : 'No se pudo eliminar el contacto.');
    }
  };

  if (!authReady) {
    return <div className="grid min-h-screen place-items-center bg-late4-paper text-late4-slate">Verificando acceso…</div>;
  }

  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top_right,_#138C8C22,_transparent_34%),#F3F2F0] px-5">
        <section className="w-full max-w-md rounded-2xl border border-late4-ink/10 bg-white p-8 shadow-2xl shadow-late4-ink/10">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-late4-ink font-extrabold text-white">L4</div>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-late4-teal">Acceso interno</p>
          <h1 className="mt-2 text-3xl font-extrabold text-late4-ink">CRM de contactos</h1>
          <p className="mt-3 text-sm leading-6 text-late4-slate">Ingresá con tu cuenta autorizada de Late4.</p>
          <form className="mt-8 space-y-4" onSubmit={submitLogin}>
            <label className="block text-sm font-bold text-late4-ink">Email
              <input className="mt-2 w-full rounded-lg border border-late4-ink/15 px-4 py-3 font-normal outline-none focus:border-late4-teal" onChange={(event) => setLoginEmail(event.target.value)} required type="email" value={loginEmail} />
            </label>
            <label className="block text-sm font-bold text-late4-ink">Contraseña
              <input className="mt-2 w-full rounded-lg border border-late4-ink/15 px-4 py-3 font-normal outline-none focus:border-late4-teal" onChange={(event) => setLoginPassword(event.target.value)} required type="password" value={loginPassword} />
            </label>
            {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            <button className="btn-primary w-full" disabled={saving} type="submit">{saving ? 'Ingresando…' : 'Ingresar al CRM'}</button>
          </form>
          <a className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-late4-teal" href="/">Volver al sitio <ArrowUpRight size={15} /></a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-late4-paper text-late4-ink">
      <header className="border-b border-white/10 bg-late4-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-sm font-extrabold">L4</div>
            <div><p className="font-extrabold">Late4 Consultora</p><p className="text-xs text-white/60">Gestión comercial</p></div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-white/60 sm:block">{user.email}</span>
            <button aria-label="Cerrar sesión" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 transition hover:bg-white/20" onClick={() => signOut(auth)}><LogOut size={17} /></button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="eyebrow">CRM interno</p><h1 className="mt-2 text-3xl font-extrabold">Contactos y consultas</h1><p className="mt-2 text-sm text-late4-slate">Seguimiento centralizado de los contactos que llegan desde la web.</p></div>
          <button className="btn-primary gap-2" onClick={openNew}><Plus size={17} /> Nuevo contacto</button>
        </div>

        <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Contactos activos', value: metrics.total, icon: Users },
            { label: 'Nuevos', value: metrics.new, icon: UserIcon },
            { label: 'En seguimiento', value: metrics.active, icon: Clock3 },
            { label: 'Convertidos', value: metrics.won, icon: CheckCircle2 },
          ].map(({ label, value, icon: Icon }) => <article className="rounded-xl border border-late4-ink/5 bg-white p-5 shadow-sm" key={label}><div className="flex items-center justify-between"><p className="text-sm font-bold text-late4-slate">{label}</p><Icon className="text-late4-teal" size={19} /></div><p className="mt-3 text-3xl font-extrabold">{value}</p></article>)}
        </section>

        {error && <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        <section className="mt-6 overflow-hidden rounded-xl border border-late4-ink/5 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-late4-ink/5 p-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md"><Search className="absolute left-3 top-3 text-late4-slate" size={17} /><input className="w-full rounded-lg bg-late4-paper py-2.5 pl-10 pr-4 text-sm outline-none ring-late4-teal focus:ring-1" onChange={(event) => setSearch(event.target.value)} placeholder="Buscar por nombre, empresa, email o teléfono" value={search} /></div>
            <select className="rounded-lg border border-late4-ink/10 bg-white px-3 py-2.5 text-sm font-bold outline-none" onChange={(event) => setStatusFilter(event.target.value as 'all' | ContactStatus)} value={statusFilter}><option value="all">Todos los estados</option>{statuses.map((status) => <option key={status.value} value={status.value}>{status.label}</option>)}</select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-late4-paper/70 text-[11px] uppercase tracking-wider text-late4-slate"><tr><th className="px-5 py-3">Contacto</th><th className="px-5 py-3">Empresa</th><th className="px-5 py-3">Estado</th><th className="px-5 py-3">Ingreso</th><th className="px-5 py-3">Próximo paso</th><th className="px-5 py-3 text-right">Acciones</th></tr></thead>
              <tbody className="divide-y divide-late4-ink/5">
                {loading && <tr><td className="px-5 py-10 text-center text-late4-slate" colSpan={6}>Cargando contactos…</td></tr>}
                {!loading && filteredContacts.length === 0 && <tr><td className="px-5 py-10 text-center text-late4-slate" colSpan={6}>No hay contactos para estos filtros.</td></tr>}
                {filteredContacts.map((contact) => {
                  const status = statusInfo(contact.status);
                  return <tr className="transition hover:bg-late4-paper/50" key={contact.id}><td className="px-5 py-4"><p className="font-extrabold">{contact.name}</p><a className="mt-1 inline-flex items-center gap-1 text-xs text-late4-teal hover:underline" href={`mailto:${contact.email}`}><Mail size={12} />{contact.email}</a></td><td className="px-5 py-4"><p className="font-bold">{contact.company || '—'}</p>{contact.phone && <a className="mt-1 inline-flex items-center gap-1 text-xs text-late4-teal hover:underline" href={whatsappUrl(contact.phone)} rel="noreferrer" target="_blank"><MessageCircle size={12} />{contact.phone}</a>}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${status.tone}`}>{status.label}</span></td><td className="px-5 py-4 text-late4-slate">{formatDate(contact.createdAt)}</td><td className="px-5 py-4">{contact.nextActionAt ? <span className="inline-flex items-center gap-1.5 font-bold"><CalendarClock size={15} className="text-late4-gold" />{new Date(`${contact.nextActionAt}T12:00:00`).toLocaleDateString('es-AR')}</span> : <span className="text-late4-slate">Sin programar</span>}</td><td className="px-5 py-4"><div className="flex justify-end gap-2"><button aria-label={`Editar ${contact.name}`} className="grid h-9 w-9 place-items-center rounded-lg bg-late4-paper text-late4-slate hover:text-late4-teal" onClick={() => openEdit(contact)}><Pencil size={15} /></button><button aria-label={`Eliminar ${contact.name}`} className="grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100" onClick={() => removeContact(contact)}><Trash2 size={15} /></button></div></td></tr>;
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {editorOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-late4-ink/60 p-4 backdrop-blur-sm">
          <section className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <header className="sticky top-0 flex items-start justify-between border-b border-late4-ink/10 bg-white px-6 py-5"><div><p className="eyebrow">CRM</p><h2 className="mt-1 text-2xl font-extrabold">{editing ? 'Editar contacto' : 'Nuevo contacto'}</h2></div><button aria-label="Cerrar" className="grid h-9 w-9 place-items-center rounded-lg bg-late4-paper" onClick={closeEditor}><X size={17} /></button></header>
            <form className="p-6" onSubmit={saveContact}>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nombre *"><input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></Field>
                <Field label="Empresa"><input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} /></Field>
                <Field label="Email *"><input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></Field>
                <Field label="Teléfono / WhatsApp"><input type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></Field>
                <Field label="Servicio de interés"><select value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}><option value="">Sin clasificar</option><option value="consultoria-procesos">Consultoría de procesos</option><option value="iso-9001">Implementación ISO 9001</option><option value="digitalizacion">Digitalización y automatización</option><option value="software">Desarrollo de software</option><option value="diagnostico">Diagnóstico integral</option><option value="otro">Otro servicio</option></select></Field>
                <Field label="Estado"><select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as ContactStatus })}>{statuses.map((status) => <option key={status.value} value={status.value}>{status.label}</option>)}</select></Field>
                <Field label="Próximo seguimiento"><input type="date" value={form.nextActionAt} onChange={(event) => setForm({ ...form, nextActionAt: event.target.value })} /></Field>
                <Field className="md:col-span-2" label="Consulta original"><textarea rows={3} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} /></Field>
                <Field className="md:col-span-2" label="Notas internas"><textarea rows={4} value={form.internalNotes} onChange={(event) => setForm({ ...form, internalNotes: event.target.value })} /></Field>
              </div>
              <div className="mt-6 flex justify-end gap-3 border-t border-late4-ink/10 pt-5"><button className="btn-secondary" onClick={closeEditor} type="button">Cancelar</button><button className="btn-primary" disabled={saving} type="submit">{saving ? 'Guardando…' : 'Guardar contacto'}</button></div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

function Field({ label, className = '', children }: { label: string; className?: string; children: React.ReactElement }) {
  return <label className={`block text-sm font-bold text-late4-ink ${className}`}><span>{label}</span><div className="mt-2 [&>input]:w-full [&>input]:rounded-lg [&>input]:border [&>input]:border-late4-ink/15 [&>input]:px-3 [&>input]:py-2.5 [&>input]:font-normal [&>input]:outline-none [&>input]:focus:border-late4-teal [&>select]:w-full [&>select]:rounded-lg [&>select]:border [&>select]:border-late4-ink/15 [&>select]:bg-white [&>select]:px-3 [&>select]:py-2.5 [&>select]:font-normal [&>textarea]:w-full [&>textarea]:rounded-lg [&>textarea]:border [&>textarea]:border-late4-ink/15 [&>textarea]:px-3 [&>textarea]:py-2.5 [&>textarea]:font-normal [&>textarea]:outline-none [&>textarea]:focus:border-late4-teal">{children}</div></label>;
}
