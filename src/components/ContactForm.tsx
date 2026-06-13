'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const fieldClass = 'w-full rounded-sm border border-late4-ink/10 bg-late4-paper px-4 py-3 text-sm text-late4-ink outline-none transition placeholder:text-late4-slate/70 focus:border-late4-gold focus:bg-white';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Por favor completa los campos obligatorios');
      }

      await addDoc(collection(db, 'contactRequests'), {
        ...formData,
        createdAt: serverTimestamp(),
        source: 'late4-web',
        status: 'new',
      });

      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input type="text" name="name" placeholder="Juan Pérez" value={formData.name} onChange={handleChange} className={fieldClass} required />
        <input type="text" name="company" placeholder="Cía. S.A." value={formData.company} onChange={handleChange} className={fieldClass} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input type="email" name="email" placeholder="juan@empresa.com" value={formData.email} onChange={handleChange} className={fieldClass} required />
        <input type="tel" name="phone" placeholder="Teléfono / WhatsApp" value={formData.phone} onChange={handleChange} className={fieldClass} />
      </div>
      <textarea name="message" placeholder="Cuéntanos brevemente tus desafíos..." rows={5} value={formData.message} onChange={handleChange} className={fieldClass} required />
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      {success && <p className="text-sm font-medium text-green-700">Mensaje enviado. Te contactaremos pronto.</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full gap-2 disabled:cursor-not-allowed disabled:opacity-70">
        {loading ? 'Enviando...' : 'Enviar solicitud'}
        <Send size={15} />
      </button>
    </form>
  );
}
