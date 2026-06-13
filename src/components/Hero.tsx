export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-late4-light-gray relative overflow-hidden">
      {/* Engranaje animado de fondo */}
      <div className="absolute -top-24 -right-32 md:-right-20 md:-top-32 opacity-5 pointer-events-none animate-spin" style={{ animationDuration: '30s' }}>
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#C8A24A', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#785a00', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Círculo central */}
          <circle cx="100" cy="100" r="20" fill="url(#gearGradient)" />
          {/* Dientes del engranaje */}
          <g fill="url(#gearGradient)">
            <rect x="95" y="15" width="10" height="25" rx="2" />
            <rect x="95" y="160" width="10" height="25" rx="2" />
            <rect x="15" y="95" width="25" height="10" rx="2" />
            <rect x="160" y="95" width="25" height="10" rx="2" />
            <g transform="translate(100, 100) rotate(45) translate(-100, -100)">
              <rect x="95" y="15" width="10" height="25" rx="2" />
            </g>
            <g transform="translate(100, 100) rotate(135) translate(-100, -100)">
              <rect x="95" y="15" width="10" height="25" rx="2" />
            </g>
            <g transform="translate(100, 100) rotate(225) translate(-100, -100)">
              <rect x="95" y="15" width="10" height="25" rx="2" />
            </g>
            <g transform="translate(100, 100) rotate(315) translate(-100, -100)">
              <rect x="95" y="15" width="10" height="25" rx="2" />
            </g>
          </g>
          {/* Círculo interior decorativo */}
          <circle cx="100" cy="100" r="28" fill="none" stroke="url(#gearGradient)" strokeWidth="1.5" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
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
