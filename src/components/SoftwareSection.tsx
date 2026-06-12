export default function SoftwareSection() {
  const projects = [
    { title: 'Don Cándido IA', description: 'Plataforma SaaS con IA para implementar sistemas de gestión ISO 9001.', tags: ['ISO 9001', 'IA', 'SaaS'] },
    { title: 'Agro Biciuffa', description: 'Sistema operativo para concesionaria con gestión de cobranzas e ISO 9001.', tags: ['Agro', 'Procesos', 'ISO 9001'] },
    { title: 'AgroCredit Hub', description: 'Legajos digitales para productores, contadores y bancos.', tags: ['Crédito agro', 'Documentación'] },
  ];

  return (
    <section id="software" className="py-20 px-6 bg-late4-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Consultoría que también construye software</h2>
        <p className="section-subtitle">Primero entendemos tu empresa. Luego construimos el sistema digital que la transforma.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-8 rounded border border-late4-light-gray">
              <h3 className="text-xl font-bold text-late4-navy mb-3">{project.title}</h3>
              <p className="text-late4-gray mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-late4-light-gray text-late4-navy px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
