export default function SoftwareSection() {
  const projects = [
    { title: 'Don Cándido IA', description: 'Plataforma SaaS con IA para implementar sistemas de gestión ISO 9001.', tags: ['ISO 9001', 'IA', 'SaaS'] },
    { title: 'Sistema de Financiación y Cheques', description: 'Gestión integral de cuentas corrientes, seguimiento de cheques, refinanciaciones y morosidad.', tags: ['Finanzas', 'Cheques', 'Cobranzas'] },
    { title: 'CRM de Gestión de Morosidad', description: 'Control y seguimiento de clientes morosos, acciones de cobranza y compromisos de pago.', tags: ['CRM', 'Cobranzas', 'Morosidad'] },
  ];

  return (
    <section id="software" className="py-20 px-6 bg-late4-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Consultoría que también construye software</h2>
        <p className="section-subtitle">Primero entendemos tu empresa. Luego construimos el sistema digital que la transforma.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

        <div className="border-t pt-12">
          <h3 className="text-2xl font-bold text-late4-navy mb-8">Servicios complementarios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded border border-late4-light-gray">
              <h4 className="text-xl font-bold text-late4-navy mb-3">AgroCredit Hub</h4>
              <p className="text-late4-gray mb-4">Legajos digitales para productores, contadores y bancos con documentación crediticia integrada.</p>
              <div className="flex flex-wrap gap-2">
                {['Crédito agro', 'Documentación', 'Bancos'].map((tag) => (
                  <span key={tag} className="text-xs bg-late4-light-gray text-late4-navy px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded border border-late4-light-gray">
              <h4 className="text-xl font-bold text-late4-navy mb-3">Sistema de Turnos y Servicio a Campo</h4>
              <p className="text-late4-gray mb-4">Planificación de turnos, asignación de técnicos y seguimiento de servicios en terreno.</p>
              <div className="flex flex-wrap gap-2">
                {['Operaciones', 'Servicios técnicos', 'Agro'].map((tag) => (
                  <span key={tag} className="text-xs bg-late4-light-gray text-late4-navy px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
