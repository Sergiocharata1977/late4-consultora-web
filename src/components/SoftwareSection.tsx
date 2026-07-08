import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function SoftwareSection() {
  const cases = [
    {
      title: 'Don Candido IA',
      image: '/images/case-don-candido.png',
      problem: 'Gestion manual de trazabilidad animal y falta de prediccion en stock.',
      solution: 'Implementacion de agente IA para analisis de datos y digitalizacion de campo.',
      result: 'Reduccion del 30% en costos operativos y 100% trazabilidad.',
    },
    {
      title: 'Agro Biciuffa',
      image: '/images/case-agro-biciuffa.png',
      problem: 'Dispersion de informacion contable y operativa en multiples planillas.',
      solution: 'Software a medida centralizado bajo normas ISO 9001.',
      result: 'Informacion en tiempo real y certificacion de calidad obtenida.',
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

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-sm border border-late4-ink/10 bg-white shadow-lg shadow-late4-ink/5">
              <Image
                src={item.image}
                alt={`Caso de exito ${item.title}`}
                width={1536}
                height={864}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-8">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
