import { Cpu, Gauge, ListChecks, Search } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Entender',
    description: 'Analizamos cómo funciona la empresa, identificando cuellos de botella y flujos de información ocultos.',
  },
  {
    number: '02',
    icon: ListChecks,
    title: 'Ordenar',
    description: 'Estandarizamos procesos, definimos responsabilidades claras y estructuramos registros de datos.',
  },
  {
    number: '03',
    icon: Gauge,
    title: 'Medir',
    description: 'Implementamos sistemas de medición para costos y calidad, estableciendo línea base para mejoras.',
  },
  {
    number: '04',
    icon: Cpu,
    title: 'Digitalizar',
    description: 'La tecnología se convierte en el soporte automatizado del método de gestión ya ordenado.',
    highlight: true,
  },
];

export default function MethodSection() {
  return (
    <section id="metodo" className="bg-l4-band px-5 py-24 md:px-8">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="l4-title">El Método Late4</h2>
          <p className="l4-lead mt-4">
            No vendemos solo software ni solo certificaciones. Construimos un método de gestión.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className={`rounded-xl border p-6 ${
                  step.highlight ? 'border-l4-green/40 bg-l4-green-soft' : 'border-l4-line bg-white'
                }`}
              >
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-md font-mono text-[11px] font-bold ${
                    step.highlight ? 'bg-l4-green text-white' : 'bg-l4-surface text-l4-muted'
                  }`}
                >
                  {step.number}
                </span>
                <h3 className="mt-6 flex items-center gap-2 text-base font-bold tracking-tight text-l4-night">
                  <Icon size={16} className={step.highlight ? 'text-l4-green' : 'text-l4-blue'} />
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-l4-muted">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
