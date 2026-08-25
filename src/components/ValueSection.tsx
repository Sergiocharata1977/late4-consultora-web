import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Trazabilidad total',
    description: 'Seguimiento completo de punta a punta, desde materia prima hasta producto final.',
  },
  {
    title: 'Reducción de desperdicios',
    description: 'Visibilidad en tiempo real para detectar ineficiencias de manera temprana.',
  },
];

const kpis = [
  { label: 'Cumplimiento entrega', value: '92%', delta: '+6 pp' },
  { label: 'Rendimiento OEE', value: '78%', delta: '+4 pp' },
];

export default function ValueSection() {
  return (
    <section id="rentabilidad" className="bg-white px-5 py-24 md:px-8">
      <div className="site-container grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="l4-title">La rentabilidad es una ciencia exacta.</h2>
          <p className="l4-lead mt-5">
            Integrar la gestión de calidad (ISO 9001) con la contabilidad de costos no es burocracia: es la única forma
            de garantizar procesos eficientes que no desperdicien recursos. Una no conformidad también tiene un costo.
          </p>

          <div className="mt-9 space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-l4-green" />
                <div>
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-l4-night">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-l4-muted">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#proyectos"
            className="mt-9 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-l4-blue transition hover:text-l4-blue-dark"
          >
            Leer caso de estudio
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="rounded-xl border border-l4-line bg-l4-surface p-6 md:p-8">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-l4-muted">Indicadores clave</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-l4-green-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-l4-green">
              <span className="h-1.5 w-1.5 rounded-full bg-l4-green" />
              Tiempo real
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-l4-line bg-white p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-l4-muted">{kpi.label}</p>
                <p className="mt-3 text-3xl font-bold tracking-tight text-l4-night">{kpi.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-l4-green">{kpi.delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-l4-line bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-l4-muted">Costo unitario promedio</p>
              <p className="text-sm font-bold text-l4-night">
                $1.245 <span className="font-mono text-[10px] font-medium text-l4-green">(-3,2%)</span>
              </p>
            </div>

            <div className="mt-4 flex h-1.5 overflow-hidden rounded-full bg-l4-surface">
              <span className="h-full w-[62%] bg-l4-blue" />
              <span className="h-full w-[38%] bg-l4-night" />
            </div>

            <div className="mt-3 flex items-center gap-5">
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-l4-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-l4-blue" />
                Materiales
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-l4-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-l4-night" />
                Mano de obra
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
