import { Briefcase, Cog, Rocket } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Administración',
      description: 'Estructuramos tu back-office para que sea el motor de la empresa, no el freno.',
      points: ['Control financiero', 'Flujo de caja', 'Reporting'],
    },
    {
      icon: Cog,
      title: 'ISO 9001',
      description: 'Certificación y mantenimiento de estándares de calidad con enfoque práctico y real.',
      points: ['Auditorías', 'Mapa de procesos', 'Mejora continua'],
    },
    {
      icon: Rocket,
      title: 'Escalabilidad',
      description: 'Sistemas diseñados para absorber el crecimiento sin comprometer la calidad del servicio.',
      points: ['Automatización', 'KPI en tiempo real', 'Cultura de datos'],
    },
  ];

  return (
    <section id="servicios" className="bg-white px-5 py-24 text-late4-ink md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-5 text-late4-blue">Expertise</p>
          <h2 className="section-title">Diseñamos organizaciones más claras, medibles y digitales</h2>
          <p className="section-subtitle mx-auto mt-5">
            Soluciones integrales que combinan la rigurosidad de la norma con la agilidad de la tecnología moderna.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-sm border border-late4-ink/10 bg-late4-paper p-7 transition hover:-translate-y-1 hover:border-late4-blue/30 hover:bg-white">
                <Icon className="mb-6 text-late4-blue" size={25} />
                <h3 className="font-editorial mb-4 text-2xl font-bold text-late4-ink">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-late4-slate">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="text-[11px] font-bold uppercase tracking-[0.14em] text-late4-blue">
                      + {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
