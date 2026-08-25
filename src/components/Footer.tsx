import Late4Mark from './Late4Mark';

type FooterLink = { label: string; href: string; external?: boolean };
type FooterGroup = { title: string; links: FooterLink[] };

const groups: FooterGroup[] = [
  {
    title: 'Legal',
    links: [
      { label: 'Política de privacidad', href: '#contacto' },
      { label: 'Términos de servicio', href: '#contacto' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
      { label: 'Escribinos', href: 'mailto:info@late4.com.ar' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-l4-line bg-white px-5 py-14 md:px-8">
      <div className="site-container grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-l4-night">
            <Late4Mark className="h-5 w-5 text-l4-blue" />
            Late4
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-l4-muted">
            Transformamos archivos sueltos en información útil para gestionar, controlar y mejorar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-l4-night">{group.title}</h3>
              <ul className="space-y-3 text-sm text-l4-muted">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="transition hover:text-l4-blue"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="site-container mt-12 border-t border-l4-line pt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-l4-green">
          &copy; 2026 Late4 Consultora. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
