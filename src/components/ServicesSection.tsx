export default function ServicesSection() {
  const services = [
    { title: 'Consultoría administrativa', description: 'Ordenamos circuitos administrativos, responsabilidades, controles y operaciones internas.' },
    { title: 'Normas de calidad ISO 9001', description: 'Implementamos sistemas de gestión basados en procesos, documentación y auditorías.' },
    { title: 'Digitalización y software', description: 'Diseñamos herramientas digitales adaptadas: tableros, formularios y sistemas internos.' },
    { title: 'IA aplicada a la gestión', description: 'Incorporamos inteligencia artificial para análisis de procesos y generación de reportes.' },
  ];

  return (
    <section id="servicios" className="py-20 px-6 bg-late4-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Diseñamos organizaciones más claras, medibles y digitales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded border border-late4-light-gray">
              <h3 className="text-xl font-bold text-late4-navy mb-4">{service.title}</h3>
              <p className="text-late4-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
