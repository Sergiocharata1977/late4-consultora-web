export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-late4-light-gray px-6 pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-28 -top-20 h-96 w-96 rounded-full border border-late4-gold/20 bg-white/30 blur-sm" />
        <div className="absolute left-6 top-20 hidden h-24 w-24 border-l-2 border-t-2 border-late4-gold/30 md:block" />
      </div>

      <div
        className="pointer-events-none absolute -right-28 top-16 opacity-20 md:-right-8 md:top-20"
        aria-hidden="true"
      >
        <svg
          className="h-[360px] w-[360px] animate-spin md:h-[520px] md:w-[520px]"
          style={{ animationDuration: '36s' }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#C8A24A', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#785a00', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="21" fill="url(#gearGradient)" />
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
          <circle cx="100" cy="100" r="58" fill="none" stroke="url(#gearGradient)" strokeWidth="14" opacity="0.25" />
          <circle cx="100" cy="100" r="38" fill="none" stroke="url(#gearGradient)" strokeWidth="4" opacity="0.55" />
          <circle cx="100" cy="100" r="28" fill="none" stroke="url(#gearGradient)" strokeWidth="1.5" opacity="0.6" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-late4-navy md:text-6xl">
          Consultoría, procesos y tecnología para empresas que necesitan ordenarse y crecer
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-late4-gray">
          Ayudamos a PyMEs y empresas en crecimiento a profesionalizar su gestión, documentar procesos, implementar normas de calidad e implementar sistemas digitales.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary">Solicitar diagnóstico</button>
          <button className="btn-secondary">Ver servicios</button>
        </div>
        <p className="mt-12 text-lg italic text-late4-gray">
          Procesos claros. Responsables definidos. Información confiable. Mejora continua.
        </p>
      </div>
    </section>
  );
}
