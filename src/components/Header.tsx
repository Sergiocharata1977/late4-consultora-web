'use client';

import { ArrowRight } from 'lucide-react';

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'soluciones', label: 'Soluciones' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'metodo', label: 'Metodo' },
  { id: 'contacto', label: 'Consultora' },
];

export default function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-late4-ink/10 bg-white/95 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between px-5 md:px-8">
        <button onClick={() => scrollToSection('inicio')} className="text-xl font-extrabold text-late4-ink">
          Late4 <span className="font-semibold text-late4-slate">by De Filippi</span>
        </button>

        <nav className="hidden items-center gap-6 text-[11px] font-extrabold uppercase text-late4-slate lg:flex">
          {links.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="transition hover:text-late4-teal">
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection('contacto')}
          className="hidden items-center gap-2 rounded-sm bg-late4-ink px-4 py-2 text-xs font-extrabold uppercase text-white transition hover:bg-late4-blue md:inline-flex"
        >
          Solicitar diagnostico
          <ArrowRight size={14} />
        </button>
      </div>
    </header>
  );
}
