import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Don Candido IA',
    category: 'SaaS ISO 9001 + IA',
    image: '/images/case-don-candido.png',
    problem:
      'Las empresas que quieren implementar ISO 9001 suelen trabajar con documentación dispersa, procesos poco claros, baja trazabilidad y alta dependencia de consultores externos.',
    solution:
      'Plataforma SaaS con IA integrada para implementar y mantener sistemas de gestión ISO 9001, organizando procesos, documentos, auditorías, hallazgos, acciones correctivas e indicadores.',
    result:
      'Reducción de tiempos y costos de implementación, mayor trazabilidad documental y gestión continua del sistema de calidad.',
  },
  {
    title: 'Agro Biciuffa',
    category: 'Web + Plataforma interna',
    image: '/images/case-agro-biciuffa.png',
    problem:
      'La empresa necesitaba ordenar su presencia digital, centralizar información comercial y avanzar en herramientas internas para mejorar la administración, el control y la trazabilidad de sus operaciones.',
    solution:
      'Desarrollo de la web pública www.agrobiciuffa.com.ar y diseño de una plataforma interna de administración y control para operaciones, seguimiento comercial, documentación y procesos.',
    result:
      'Lanzamiento progresivo de un ecosistema digital que integra comunicación comercial, gestión interna y control operativo bajo criterios de mejora continua.',
    publicUrl: 'https://www.agrobiciuffa.com.ar',
    publicUrlLabel: 'Ver web pública',
  },
  {
    title: 'Don Juan GIS',
    category: 'GIS Agro + Inteligencia territorial',
    status: 'En desarrollo avanzado - 80%',
    image: '/images/deep-blue-gears.png',
    problem:
      'Las empresas agropecuarias y productores suelen trabajar con información territorial dispersa: lotes, imágenes satelitales, datos productivos, mapas, informes técnicos y registros históricos no siempre están integrados en una misma herramienta.',
    solution:
      'Plataforma GIS orientada al agro para visualizar lotes, integrar información satelital, generar informes técnicos y apoyar decisiones sobre producción, riesgos, ambiente y gestión territorial.',
    result:
      'Proyecto en etapa avanzada de desarrollo, con aproximadamente 80% de avance, orientado a convertir datos geográficos y productivos en información clara para la toma de decisiones.',
  },
];

export default function SoftwareSection() {
  return (
    <section id="proyectos" className="border-y border-l4-line bg-white px-5 py-24 md:px-8">
      <div className="site-container">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="l4-title">Proyectos</h2>
            <p className="l4-lead mt-4">
              Sistemas en producción donde procesos, costos, calidad y tecnología funcionan como una sola plataforma.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-l4-blue transition hover:text-l4-blue-dark"
          >
            Hablar de tu proyecto
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <article key={item.title} className="l4-card flex flex-col overflow-hidden">
              <Image
                src={item.image}
                alt={`Proyecto ${item.title}`}
                width={1536}
                height={864}
                className="aspect-[16/9] w-full border-b border-l4-line object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-md bg-l4-blue-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-l4-blue">
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-l4-muted/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-l4-night">{item.title}</h3>

                {item.status ? (
                  <span className="mt-3 inline-flex w-fit rounded-md bg-l4-green-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-l4-green">
                    {item.status}
                  </span>
                ) : null}

                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-l4-muted">Problema</dt>
                    <dd className="mt-1.5 text-l4-muted">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-l4-blue">Solución</dt>
                    <dd className="mt-1.5 text-l4-muted">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-l4-blue">Resultado</dt>
                    <dd className="mt-1.5 font-medium text-l4-night">{item.result}</dd>
                  </div>
                </dl>

                {item.publicUrl ? (
                  <a
                    href={item.publicUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-l4-blue transition hover:text-l4-blue-dark"
                  >
                    {item.publicUrlLabel}
                    <ArrowRight size={14} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
