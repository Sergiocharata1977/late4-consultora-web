import { Globe2, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const groups = [
    { title: 'Navegacion', links: ['Inicio', 'Servicios', 'Proyectos'] },
    { title: 'Social', links: ['LinkedIn', 'Contacto'] },
    { title: 'Legal', links: ['Privacidad'] },
  ];

  return (
    <footer className="bg-late4-blue-deep px-5 py-12 text-white md:px-8">
      <div className="site-container grid gap-10 md:grid-cols-[1.3fr_2fr]">
        <div>
          <div className="text-2xl font-extrabold text-late4-blue-bright">
            Late4 <span className="text-white/75">by De Filippi</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Consultoria estrategica y tecnologica para PyMEs que necesitan orden, trazabilidad y crecimiento sostenible.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-xs font-extrabold uppercase text-late4-blue-bright">{group.title}</h4>
              <ul className="space-y-3 text-sm text-white/68">
                {group.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="site-container mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <p>2026 Late4 by De Filippi. Todos los derechos reservados.</p>
        <div className="flex gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15"><Globe2 size={15} /></span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15"><Instagram size={15} /></span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15"><Linkedin size={15} /></span>
        </div>
      </div>
    </footer>
  );
}
