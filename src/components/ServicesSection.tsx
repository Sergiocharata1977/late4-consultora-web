import { Bot, ClipboardCheck, FileSearch, ShieldCheck, Workflow } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: FileSearch,
      code: '01 // Audit',
      title: 'Diagnostico Integral de Gestion',
      description: 'Analizamos el estado actual de tus procesos para identificar ineficiencias y oportunidades de digitalizacion.',
    },
    {
      icon: ShieldCheck,
      code: '02 // ISO 9001',
      title: 'Implementacion ISO 9001',
      description: 'Estandarizamos operaciones bajo normas internacionales de calidad adaptadas a la realidad de una PyME.',
    },
    {
      icon: Workflow,
      code: '03 // Digital',
      title: 'Digitalizacion Operativa',
      description: 'Eliminamos el papel y el desorden migrando tus flujos de trabajo a entornos digitales centralizados.',
    },
    {
      icon: ClipboardCheck,
      code: '04 // Software',
      title: 'Software a medida',
      description: 'Desarrollamos soluciones tecnologicas que se adaptan a tu proceso real, no al reves.',
    },
    {
      icon: Bot,
      code: '05 // AI Systems',
      title: 'IA aplicada a gestion empresarial',
      description: 'Implementamos agentes inteligentes para automatizar tareas repetitivas y analizar datos operativos.',
    },
  ];

  return (
    <section id="servicios" className="bg-[#F8F7F5] px-5 py-24 text-late4-ink md:px-8">
      <div className="site-container">
        <div className="mb-12">
          <p className="eyebrow mb-4">Nuestra oferta</p>
          <h2 className="section-title">Servicios de Consultoria y Tech</h2>
        </div>

        <div className="grid border border-late4-ink/10 bg-white md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="min-h-[260px] border-b border-late4-ink/10 p-8 md:border-r">
                <p className="mb-8 text-[11px] font-extrabold uppercase text-late4-slate/70">{service.code}</p>
                <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-sm bg-late4-teal-soft text-late4-teal">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-extrabold text-late4-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-late4-slate">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
