export default function ProblemSection() {
  const problems = [
    'Tareas que dependen de una sola persona',
    'Falta de responsables claros',
    'Procesos informales',
    'Documentación dispersa',
    'Indicadores inexistentes',
    'Sistemas aislados que no conversan',
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Cuando una empresa crece, el desorden también crece</h2>
        <p className="section-subtitle">
          Muchas empresas comienzan siendo ágiles, pero cuando aumentan los clientes, aparecen problemas operativos que impiden el crecimiento ordenado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem) => (
            <div key={problem} className="p-6 border-l-4 border-late4-gold bg-late4-light-gray rounded">
              <p className="text-late4-navy font-semibold">{problem}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-late4-navy font-semibold">
          Nuestro trabajo es convertir ese desorden operativo en un sistema de gestión claro, medible y mejorable.
        </p>
      </div>
    </section>
  );
}
