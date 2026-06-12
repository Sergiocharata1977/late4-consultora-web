export default function ISOSection() {
  const norms = [
    { code: 'ISO 9001', title: 'Gestión de calidad', status: 'Implementamos' },
    { code: 'ISO 14001', title: 'Gestión ambiental', status: 'En desarrollo' },
    { code: 'ISO 45001', title: 'Seguridad y salud', status: 'En desarrollo' },
    { code: 'ISO 27001', title: 'Seguridad de información', status: 'En desarrollo' },
  ];

  return (
    <section id="iso" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Calidad no es burocracia</h2>
        <p className="section-subtitle">ISO 9001 es una guía para ordenar la empresa: definir procesos, documentarlos, medirlos y mejorarlos continuamente.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {norms.map((norm) => (
            <div key={norm.code} className="bg-late4-light-gray p-6 rounded">
              <div className="text-2xl font-bold text-late4-navy mb-2">{norm.code}</div>
              <h3 className="text-lg font-semibold text-late4-dark-gray mb-3">{norm.title}</h3>
              <span className="text-sm text-late4-gold font-medium">{norm.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
