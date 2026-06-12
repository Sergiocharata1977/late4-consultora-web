'use client';

import { useState } from 'react';
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-late4-light-gray rounded focus:outline-none focus:border-late4-navy" required />
        <input type="text" name="company" placeholder="Empresa" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-late4-light-gray rounded focus:outline-none focus:border-late4-navy" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-late4-light-gray rounded focus:outline-none focus:border-late4-navy" required />
        <input type="tel" name="phone" placeholder="Teléfono / WhatsApp" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-late4-light-gray rounded focus:outline-none focus:border-late4-navy" />
      </div>
      <textarea name="message" placeholder="Cuéntanos sobre tu situación" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-late4-light-gray rounded focus:outline-none focus:border-late4-navy" required></textarea>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">✓ Mensaje enviado. Te contactaremos pronto.</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
