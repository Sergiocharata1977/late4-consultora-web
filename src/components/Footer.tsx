import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#DDE1E7] px-5 py-14 text-late4-ink md:px-8">
      <div className="site-container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="font-editorial mb-3 text-2xl font-bold tracking-wide">LATE 4</div>
          <p className="max-w-xs text-sm leading-relaxed text-late4-slate">
            Ingeniería de procesos y consultoría estratégica para el mercado hispanohablante.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-late4-ink/15"><Instagram size={15} /></span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-late4-ink/15"><Linkedin size={15} /></span>
          </div>
        </div>

        {[
          { title: 'Servicios', links: ['ISO 9001', 'Digitalización', 'Finanzas'] },
          { title: 'Empresa', links: ['SME Solutions', 'Contact', 'Case Studies'] },
          { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'ISO Compliance'] },
        ].map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-late4-ink">{group.title}</h4>
            <ul className="space-y-3 text-sm text-late4-slate">
              {group.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="site-container mt-14 border-t border-late4-ink/10 pt-7 text-center text-xs text-late4-slate">
        © 2024 Late 4 Consultora. Strategic Operational Excellence.
      </div>
    </footer>
  );
}
