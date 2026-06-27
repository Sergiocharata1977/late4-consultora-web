'use client';

import { ArrowRight } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-late4-ink/80 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between px-5 py-4 md:px-8">
        <button onClick={() => scrollToSection('inicio')} className="font-editorial text-xl font-bold tracking-wide text-late4-ivory">
          LATE 4
        </button>

        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white/65 md:flex">
          <button onClick={() => scrollToSection('servicios')} className="transition hover:text-late4-gold">Expertise</button>
          <button onClick={() => scrollToSection('metodo')} className="transition hover:text-late4-gold">Método</button>
          <button onClick={() => scrollToSection('software')} className="transition hover:text-late4-gold">Software</button>
          <button onClick={() => scrollToSection('contacto')} className="transition hover:text-late4-gold">Contacto</button>
        </nav>

        <button onClick={() => scrollToSection('contacto')} className="hidden items-center gap-2 rounded-sm bg-late4-ivory px-4 py-2 text-xs font-bold text-late4-ink transition hover:bg-late4-gold md:inline-flex">
          Get started
          <ArrowRight size={14} />
        </button>
      </div>
    </header>
  );
}
