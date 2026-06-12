export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-late4-light-gray">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-late4-navy mb-6 leading-tight">
          Consultoría, procesos y tecnología para empresas que necesitan ordenarse y crecer
        </h1>
        <p className="text-lg text-late4-gray mb-12 leading-relaxed">
          Ayudamos a PyMEs y empresas en crecimiento a profesionalizar su gestión, documentar procesos, implementar normas de calidad e implementar sistemas digitales.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">Solicitar diagnóstico</button>
          <button className="btn-secondary">Ver servicios</button>
        </div>
        <p className="mt-12 text-late4-gray italic text-lg">
          Procesos claros. Responsables definidos. Información confiable. Mejora continua.
        </p>
      </div>
    </section>
  );
}
