import { X } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    'Informacion duplicada y errores de carga manual.',
    'Falta de trazabilidad en procesos criticos.',
    'Dependencia excesiva de personas clave y no de procesos.',
  ];

  return (
    <section id="soluciones" className="bg-late4-blue-deep px-5 py-20 text-white md:px-8">
      <div className="site-container grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-late4-blue-bright md:text-4xl">
            Tu empresa crecio, pero la gestion quedo en Excel, WhatsApp y papeles?
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/72">
            El crecimiento desordenado genera cuellos de botella invisibles. La falta de trazabilidad y la informacion dispersa impiden tomar decisiones estrategicas basadas en datos reales.
          </p>
          <div className="mt-8 space-y-4">
            {problems.map((problem) => (
              <div key={problem} className="flex items-start gap-3 text-sm text-white/82">
                <X className="mt-0.5 shrink-0 text-red-400" size={16} />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-sm bg-white/8 p-8">
            <p className="text-2xl font-extrabold text-late4-blue-bright">+40%</p>
            <p className="mt-4 text-xs font-extrabold uppercase text-white/65">Eficiencia operativa</p>
          </div>
          <div className="rounded-sm bg-white/8 p-8">
            <p className="text-2xl font-extrabold text-late4-blue-bright">100%</p>
            <p className="mt-4 text-xs font-extrabold uppercase text-white/65">Trazabilidad de datos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
