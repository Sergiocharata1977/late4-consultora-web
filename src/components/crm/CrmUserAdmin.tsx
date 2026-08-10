'use client';

import { FormEvent, useEffect, useState } from 'react';
import { deleteApp, initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, deleteUser, getAuth } from 'firebase/auth';
import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { Shield, UserPlus, Users, X } from 'lucide-react';
import { db, firebaseConfig } from '@/lib/firebase';

type CrmUser = {
  id: string;
  email: string;
  displayName?: string;
  role: 'admin' | 'operator';
  active: boolean;
};

export default function CrmUserAdmin() {
  const [users, setUsers] = useState<CrmUser[]>([]);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ displayName: '', email: '', password: '', role: 'operator' as CrmUser['role'] });

  useEffect(() => onSnapshot(query(collection(db, 'users'), orderBy('email')), (snapshot) => {
    setUsers(snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as CrmUser)));
  }, (snapshotError) => setError(snapshotError.message)), []);

  const createUser = async (event: FormEvent) => {
    event.preventDefault(); setSaving(true); setError('');
    const secondaryApp = initializeApp(firebaseConfig, `create-user-${Date.now()}`);
    const secondaryAuth = getAuth(secondaryApp);
    let credential;
    try {
      credential = await createUserWithEmailAndPassword(secondaryAuth, form.email.trim(), form.password);
      await setDoc(doc(db, 'users', credential.user.uid), {
        uid: credential.user.uid,
        email: form.email.trim().toLowerCase(),
        displayName: form.displayName.trim(),
        role: form.role,
        active: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      setForm({ displayName: '', email: '', password: '', role: 'operator' });
      setOpen(false);
    } catch (createError) {
      if (credential) await deleteUser(credential.user).catch(() => undefined);
      const code = typeof createError === 'object' && createError && 'code' in createError ? String(createError.code) : '';
      setError(code === 'auth/email-already-in-use' ? 'Ese email ya está registrado.' : createError instanceof Error ? createError.message : 'No se pudo crear el usuario.');
    } finally {
      await deleteApp(secondaryApp);
      setSaving(false);
    }
  };

  const toggleActive = async (user: CrmUser) => {
    try { await updateDoc(doc(db, 'users', user.id), { active: !user.active, updatedAt: serverTimestamp() }); }
    catch (toggleError) { setError(toggleError instanceof Error ? toggleError.message : 'No se pudo actualizar el usuario.'); }
  };

  return <div>
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow">Administración</p><h1 className="mt-2 text-3xl font-extrabold">Usuarios</h1><p className="mt-2 text-sm text-late4-slate">Accesos internos al CRM y permisos de operación.</p></div><button className="btn-primary gap-2" onClick={() => setOpen(true)}><UserPlus size={17} /> Nuevo usuario</button></div>
    {error && <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
    <section className="mt-7 overflow-hidden rounded-xl border border-late4-ink/5 bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-late4-paper/70 text-[11px] uppercase tracking-wider text-late4-slate"><tr><th className="px-5 py-3">Usuario</th><th className="px-5 py-3">Rol</th><th className="px-5 py-3">Estado</th><th className="px-5 py-3 text-right">Acción</th></tr></thead><tbody className="divide-y divide-late4-ink/5">{users.map((user) => <tr key={user.id}><td className="px-5 py-4"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-late4-teal-soft font-extrabold text-late4-teal">{(user.displayName || user.email).slice(0, 1).toUpperCase()}</div><div><p className="font-extrabold">{user.displayName || 'Sin nombre'}</p><p className="text-xs text-late4-slate">{user.email}</p></div></div></td><td className="px-5 py-4"><span className="inline-flex items-center gap-1.5 rounded-full bg-late4-paper px-2.5 py-1 text-xs font-bold"><Shield size={13} />{user.role === 'admin' ? 'Administrador' : 'Operador'}</span></td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${user.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>{user.active ? 'Activo' : 'Inactivo'}</span></td><td className="px-5 py-4 text-right"><button className="rounded-lg border border-late4-ink/10 px-3 py-2 text-xs font-bold hover:bg-late4-paper" onClick={() => toggleActive(user)}>{user.active ? 'Desactivar' : 'Activar'}</button></td></tr>)}{!users.length && <tr><td className="px-5 py-10 text-center text-late4-slate" colSpan={4}><Users className="mx-auto mb-2" size={22} />No hay usuarios.</td></tr>}</tbody></table></div></section>
    {open && <div className="fixed inset-0 z-50 grid place-items-center bg-late4-ink/60 p-4 backdrop-blur-sm"><section className="w-full max-w-lg rounded-2xl bg-white shadow-2xl"><header className="flex items-center justify-between border-b border-late4-ink/10 px-6 py-5"><div><p className="eyebrow">Acceso CRM</p><h2 className="mt-1 text-2xl font-extrabold">Nuevo usuario</h2></div><button className="grid h-9 w-9 place-items-center rounded-lg bg-late4-paper" onClick={() => setOpen(false)}><X size={17} /></button></header><form className="space-y-4 p-6" onSubmit={createUser}><Field label="Nombre completo"><input required value={form.displayName} onChange={(event) => setForm({ ...form, displayName: event.target.value })} /></Field><Field label="Email"><input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></Field><Field label="Contraseña inicial"><input minLength={8} required type="text" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} /></Field><Field label="Rol"><select value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value as CrmUser['role'] })}><option value="operator">Operador</option><option value="admin">Administrador</option></select></Field><div className="flex justify-end gap-3 border-t border-late4-ink/10 pt-5"><button className="btn-secondary" onClick={() => setOpen(false)} type="button">Cancelar</button><button className="btn-primary" disabled={saving} type="submit">{saving ? 'Creando…' : 'Crear usuario'}</button></div></form></section></div>}
  </div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-bold"><span>{label}</span><div className="mt-2 [&>input]:w-full [&>input]:rounded-lg [&>input]:border [&>input]:border-late4-ink/15 [&>input]:px-3 [&>input]:py-2.5 [&>input]:font-normal [&>select]:w-full [&>select]:rounded-lg [&>select]:border [&>select]:border-late4-ink/15 [&>select]:bg-white [&>select]:px-3 [&>select]:py-2.5 [&>select]:font-normal">{children}</div></label>;
}
