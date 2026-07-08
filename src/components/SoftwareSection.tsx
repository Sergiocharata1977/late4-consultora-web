import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function SoftwareSection() {
  const cases = [
    {
      title: 'Don Candido IA',
      category: 'SaaS ISO 9001 + IA',
      image: '/images/case-don-candido.png',
      problem:
        'Las empresas que quieren implementar ISO 9001 suelen trabajar con documentacion dispersa, procesos poco claros, baja trazabilidad y alta dependencia de consultores externos.',
      solution:
        'Plataforma SaaS con IA integrada para implementar y mantener sistemas de gestion ISO 9001, organizando procesos, documentos, auditorias, hallazgos, acciones correctivas e indicadores.',
      result:
        'Reduccion de tiempos y costos de implementacion, mayor trazabilidad documental y gestion continua del sistema de calidad.',
    },
    {
      title: 'Agro Biciuffa',
      category: 'Web + Plataforma interna',
      image: '/images/case-agro-biciuffa.png',
      problem:
        'La empresa necesitaba ordenar su presencia digital, centralizar informacion comercial y avanzar en herramientas internas para mejorar la administracion, el control y la trazabilidad de sus operaciones.',
      solution:
        'Desarrollo de la web publica www.agrobiciuffa.com.ar y diseno de una plataforma interna de administracion y control para operaciones, seguimiento comercial, documentacion y procesos.',
      result:
        'Lanzamiento progresivo de un ecosistema digital que integra comunicacion comercial, gestion interna y control operativo bajo criterios de mejora continua.',
      publicUrl: 'https://www.agrobiciuffa.com.ar',
      publicUrlLabel: 'Ver web publica',
    },
    {
      title: 'Don Juan GIS',
      category: 'GIS Agro + Inteligencia Territorial',
      status: 'En desarrollo avanzado - 80%',
      image: '/images/deep-blue-gears.png',
      problem:
        'Las empresas agropecuarias y productores suelen trabajar con informacion territorial dispersa: lotes, imagenes satelitales, datos productivos, mapas, informes tecnicos y registros historicos no siempre estan integrados en una misma herramienta.',
      solution:
        'Plataforma GIS orientada al agro para visualizar lotes, integrar informacion satelital, generar informes tecnicos y apoyar decisiones sobre produccion, riesgos, ambiente y gestion territorial.',
      result:
        'Proyecto en etapa avanzada de desarrollo, con aproximadamente 80% de avance, orientado a convertir datos geograficos y productivos en informacion clara para la toma de decisiones.',
    },
  ];

  return (
    <section id="proyectos" className="bg-[#F8F7F5] px-5 py-24 text-late4-ink md:px-8">
      <div className="site-container">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Resultados tangibles</p>
            <h2 className="section-title">Casos de Exito</h2>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-extrabold text-late4-teal">
            Ver todos los proyectos
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-sm border border-late4-ink/10 bg-white shadow-lg shadow-late4-ink/5">
              <Image
                src={item.image}
                alt={`Caso de exito ${item.title}`}
                width={1536}
                height={864}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-late4-teal/20 bg-late4-teal/10 px-3 py-1 text-[10px] font-extrabold uppercase text-late4-teal">
                    {item.category}
                  </span>
                  <span className="text-xs font-extrabold text-late4-slate/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                {item.status ? (
                  <span className="mb-4 inline-flex rounded-full border border-late4-ink/10 bg-late4-paper px-3 py-1 text-[10px] font-extrabold uppercase text-late4-slate">
                    {item.status}
                  </span>
                ) : null}
                <h3 className="text-xl font-extrabold text-late4-ink">{item.title}</h3>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div className="grid gap-2 sm:grid-cols-[110px_1fr]">
                    <dt className="text-[11px] font-extrabold uppercase text-late4-slate">Problema</dt>
                    <dd className="text-late4-slate">{item.problem}</dd>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-[110px_1fr]">
                    <dt className="text-[11px] font-extrabold uppercase text-late4-teal">Solucion</dt>
                    <dd className="text-late4-slate">{item.solution}</dd>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-[110px_1fr]">
                    <dt className="text-[11px] font-extrabold uppercase text-late4-teal">Resultado</dt>
                    <dd className="font-semibold text-late4-ink">{item.result}</dd>
                  </div>
                </dl>
                {item.publicUrl ? (
                  <a
                    href={item.publicUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-late4-teal"
                  >
                    {item.publicUrlLabel}
                    <ArrowRight size={16} />
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
