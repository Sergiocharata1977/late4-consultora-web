export default function MethodSection() {
  const steps = [
    { number: '01', title: 'Diagnóstico profundo', description: 'Entrevistas y auditoría de procesos actuales para identificar la raíz real de las fricciones operativas.' },
    { number: '02', title: 'Diseño de solución', description: 'Propuesta técnica y organizacional. Definición de flujos, responsables y métricas de éxito.' },
    { number: '03', title: 'Implementación guiada', description: 'No entregamos manuales: acompañamos la ejecución. Ajustamos el plan en tiempo real con el equipo.' },
    { number: '04', title: 'Medición y ajuste', description: 'Monitoreamos resultados mediante dashboards personalizados. El dato es el crítico juez de la mejora.' },
    { number: '05', title: 'Escalada autónoma', description: 'Capacitación final para que la organización pueda seguir creciendo sin dependencia externa.' },
  ];

  return (
    <section id="metodo" className="bg-late4-paper px-5 py-24 text-late4-ink md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow mb-5">Metodología</p>
          <h2 className="section-title">Un método simple para transformar la gestión</h2>
          <p className="section-subtitle mt-6">
            No buscamos la complejidad. Buscamos la claridad radical a través de cinco etapas fundamentales.
          </p>
          <div className="mt-10 overflow-hidden rounded-sm border border-late4-ink/10 bg-late4-ink p-4 shadow-2xl shadow-late4-blue-deep/20">
            <div className="h-56 rounded-sm border border-white/10 bg-[radial-gradient(circle_at_center,rgba(29,142,216,0.28),rgba(3,11,24,0.95)_58%)] p-6">
              <div className="h-full rounded-sm border border-late4-gold/20 bg-late4-blue-deep/70 p-5">
                <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                <div className="space-y-3">
                  <div className="h-3 w-full bg-late4-blue-bright/30" />
                  <div className="h-3 w-4/5 bg-white/15" />
                  <div className="h-3 w-2/3 bg-late4-gold/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="grid grid-cols-[54px_1fr] gap-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-late4-gold bg-white text-xs font-bold text-late4-gold">
                {step.number}
              </div>
              <div className="border-b border-late4-ink/10 pb-6">
                <h3 className="font-bold text-late4-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-late4-slate">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
