'use client';

import { useEffect, useState } from 'react';
import Late4Mark from './Late4Mark';

const links = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'metodo', label: 'Metodología' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Header() {
  const [active, setActive] = useState('servicios');

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-l4-line bg-white/90 backdrop-blur-md">
      <div className="site-container flex h-16 items-center justify-between px-5 md:px-8">
        <button
          onClick={() => scrollToSection('inicio')}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-l4-night"
        >
          <Late4Mark className="h-5 w-5 text-l4-blue" />
          Late4
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-l4-muted md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`border-b-2 pb-1 transition ${
                active === link.id
                  ? 'border-l4-blue text-l4-blue'
                  : 'border-transparent hover:text-l4-night'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button onClick={() => scrollToSection('contacto')} className="l4-btn px-4 py-2.5 text-[10px]">
          Solicitar diagnóstico
        </button>
      </div>
    </header>
  );
}
