import { ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[720px] overflow-hidden bg-late4-ink px-5 pt-28 text-white md:px-8 md:pt-36">
      <div
        className="absolute inset-0 bg-[url('/images/deep-blue-gears.png')] bg-cover bg-left opacity-80"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,24,0.95)_0%,rgba(3,11,24,0.78)_34%,rgba(3,11,24,0.32)_68%,rgba(3,11,24,0.72)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-late4-ink to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-20 md:grid-cols-[1.05fr_0.95fr] md:items-end">
        <div className="max-w-3xl pt-10 md:pt-20">
          <div className="mb-6 inline-flex items-center border border-late4-gold/40 bg-late4-gold/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-late4-gold">
            IA nativa & estrategia
          </div>
          <h1 className="font-editorial text-5xl font-bold leading-[0.95] text-late4-ivory md:text-7xl">
            Consultoría en procesos y tecnología
          </h1>
          <p className="mt-7 max-w-2xl font-editorial text-2xl font-semibold leading-tight text-white/88 md:text-4xl">
            El reto: ordenar la empresa para que pueda crecer sin perder precisión.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
            Transformamos el caos operativo en sistemas de alta precisión diseñados para la escalabilidad y la excelencia estratégica.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contacto" className="btn-primary">
              Agendar consulta
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#metodo" className="btn-secondary">Nuestra metodología</a>
          </div>
        </div>

        <div className="glass-card mb-2 ml-auto w-full max-w-md p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/15 text-late4-blue-bright">
                <BarChart3 size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-late4-ivory">Auditoría operativa</p>
                <p className="text-xs text-white/55">Eficiencia posterior a Late 4</p>
              </div>
            </div>
            <ShieldCheck className="text-late4-blue-bright" size={22} />
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3">
            {[
              { label: 'Procesos', value: '82%' },
              { label: 'Control', value: '74%' },
              { label: 'Riesgo', value: '-31%' },
            ].map((metric) => (
              <div key={metric.label} className="rounded-sm border border-white/10 bg-white/8 p-3">
                <p className="text-lg font-bold text-late4-ivory">{metric.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="flex h-40 items-end gap-3">
            {[42, 58, 47, 92, 55].map((height, index) => (
              <div key={index} className="flex-1 bg-white/25">
                <div className="bg-late4-blue-bright" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
            Incremento de eficiencia post-Late 4
          </p>
        </div>
      </div>
    </section>
  );
}
