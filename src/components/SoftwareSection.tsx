import { Bot, CreditCard, Monitor } from 'lucide-react';

export default function SoftwareSection() {
  const products = [
    { icon: Bot, title: 'Don Cándido IA', description: 'Asistente inteligente para la gestión de normativa e ISO.' },
    { icon: CreditCard, title: 'Sistema de financiación', description: 'Control exhaustivo de líneas de crédito y flujos financieros.' },
  ];

  return (
    <section id="software" className="bg-late4-blue-deep px-5 py-24 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="overflow-hidden rounded-sm border border-white/10 bg-late4-ink p-8 shadow-2xl shadow-late4-blue-bright/10">
          <div className="rounded-sm border border-late4-blue-bright/20 bg-[radial-gradient(circle_at_top_left,rgba(29,142,216,0.35),rgba(3,11,24,0.98)_62%)] p-6">
            <div className="mb-6 flex items-center gap-3">
              <Monitor className="text-late4-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Command center</span>
            </div>
            <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-sm border border-white/10 bg-late4-blue-deep/55 p-4">
                <div className="mb-4 h-36 rounded-sm bg-[linear-gradient(135deg,rgba(29,142,216,0.55),rgba(200,162,74,0.28))]" />
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-white/20" />
                  <div className="h-2 w-1/2 bg-white/10" />
                </div>
              </div>
              <div className="space-y-4">
                {[72, 54, 88].map((value) => (
                  <div key={value} className="rounded-sm border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 h-2 w-16 bg-late4-gold/60" />
                    <div className="h-16 rounded-full border-4 border-late4-blue-bright/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">Ecosistema tecnológico</p>
          <h2 className="section-title-dark">Consultoría que también construye software</h2>
          <p className="section-subtitle-dark mt-6">
            A diferencia de otras consultoras, materializamos la estrategia en herramientas digitales propias. Si el software comercial no encaja, nosotros lo creamos.
          </p>
          <div className="mt-9 space-y-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article key={product.title} className="glass-card flex items-start gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-late4-gold/15 text-late4-gold">
                    <Icon size={21} />
                  </span>
                  <div>
                    <h3 className="font-bold text-late4-ivory">{product.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{product.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
