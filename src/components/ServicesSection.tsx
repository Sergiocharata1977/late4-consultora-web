import { BarChart3, Bot, Calculator, Code2, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  span: string;
};

const services: Service[] = [
  {
    icon: BarChart3,
    title: 'Diagnóstico Integral & Dashboarding',
    description:
      'Analizamos la situación actual de sus procesos, costos y sistemas de información. Construimos tableros de control (dashboards) que unifican datos clave en tiempo real para una toma de decisiones informada.',
    tags: ['Data Mapping', 'KPIs'],
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Implementación ISO 9001',
    description: 'Estandarización de procesos enfocados en calidad y eficiencia operativa.',
    span: '',
  },
  {
    icon: Code2,
    title: 'Software a Medida',
    description: 'Desarrollo de herramientas informáticas integradas para reemplazar planillas sueltas.',
    span: '',
  },
  {
    icon: Bot,
    title: 'Digitalización & IA',
    description: 'Automatización de tareas rutinarias e implementación de IA para análisis predictivo.',
    span: '',
  },
  {
    icon: Calculator,
    title: 'Contabilidad de Costos',
    description:
      'Sistemas de costeo precisos integrados al flujo de producción para visibilidad real de márgenes y control de gastos.',
    span: 'md:col-span-2',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-white px-5 py-24 md:px-8">
      <div className="site-container">
        <div className="mb-12 max-w-2xl">
          <h2 className="l4-title">Nuestros Servicios</h2>
          <p className="l4-lead mt-4">
            Soluciones tecnológicas y de gestión estructuradas para escalar tu negocio con precisión y rentabilidad.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`l4-card flex flex-col p-7 transition hover:border-l4-blue/40 ${service.span}`}
              >
                <span className="l4-icon-box">
                  <Icon size={19} />
                </span>
                <h3 className="mt-8 text-lg font-bold tracking-tight text-l4-night">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-l4-muted">{service.description}</p>
                {service.tags ? (
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {service.tags.map((tag) => (
                      <span key={tag} className="l4-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
