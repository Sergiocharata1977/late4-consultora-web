export default function MethodSection() {
  const steps = [
    { number: '1', title: 'Diagnostico', description: 'Identificacion de cuellos de botella.' },
    { number: '2', title: 'Diseno', description: 'Modelado de procesos eficientes.' },
    { number: '3', title: 'Digitalizacion', description: 'Implementacion de herramientas tech.' },
    { number: '4', title: 'Implementacion', description: 'Puesta en marcha y capacitacion.' },
    { number: '5', title: 'Mejora continua', description: 'Auditoria y optimizacion constante.' },
  ];

  return (
    <section id="metodo" className="bg-late4-paper px-5 py-24 text-late4-ink md:px-8">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">El Metodo Late4</h2>
          <p className="mt-4 text-sm leading-relaxed text-late4-slate">
            Un camino estructurado hacia la madurez digital y operativa.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-late4-ink/15 md:block" aria-hidden="true" />
          {steps.map((step) => (
            <article key={step.number} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm border-2 border-late4-teal bg-white text-sm font-extrabold text-late4-ink shadow-lg shadow-late4-teal/10">
                {step.number}
              </div>
              <h3 className="mt-6 text-sm font-extrabold text-late4-ink">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[150px] text-xs leading-relaxed text-late4-slate">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
