export default function MethodSection() {
  const steps = [
    { number: '1', title: 'Diagnóstico', description: 'Relevamos cómo funciona tu empresa y oportunidades.' },
    { number: '2', title: 'Diseño', description: 'Definimos procesos, roles, indicadores y documentos.' },
    { number: '3', title: 'Implementación', description: 'Acompañamos la puesta en marcha de procedimientos y controles.' },
    { number: '4', title: 'Digitalización', description: 'Convertimos procesos en sistemas, tableros y módulos.' },
    { number: '5', title: 'Mejora continua', description: 'Medimos resultados y sostenemos la mejora.' },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Un método simple para transformar la gestión</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-4xl font-bold text-late4-gold mb-4">{step.number}</div>
              <h3 className="text-lg font-bold text-late4-navy mb-3">{step.title}</h3>
              <p className="text-sm text-late4-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
