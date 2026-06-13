import { AlertTriangle, LineChart, Users } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    'Decisiones basadas en intuición, no en datos.',
    'Equipos desconectados y procesos manuales redundantes.',
    'Pérdida de márgenes por ineficiencia operativa.',
  ];

  return (
    <section className="bg-late4-paper px-5 py-20 text-late4-ink md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1fr] md:items-center">
        <div>
          <p className="eyebrow mb-5">Diagnóstico ejecutivo</p>
          <h2 className="section-title">Cuando una empresa crece, el desorden también crece.</h2>
          <p className="section-subtitle mt-6">
            El éxito repentino suele traer consigo cuellos de botella invisibles. Los procesos que funcionaban con 5 personas se rompen con 50. Late 4 convierte esa fricción en orden, trazabilidad y control.
          </p>
          <div className="mt-8 space-y-4">
            {problems.map((problem) => (
              <div key={problem} className="flex items-start gap-3 text-sm text-late4-slate">
                <AlertTriangle className="mt-0.5 shrink-0 text-late4-gold" size={17} />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm bg-white p-8 shadow-2xl shadow-late4-blue-deep/10">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-late4-ink text-late4-gold">
                <LineChart size={21} />
              </span>
              <div>
                <p className="font-bold text-late4-ink">Operational Audit</p>
                <p className="text-sm text-late4-slate">Mapa de eficiencia por área</p>
              </div>
            </div>
            <Users className="text-late4-gold" />
          </div>
          <div className="flex h-52 items-end gap-4 border-b border-late4-slate/20 pb-2">
            {[30, 46, 38, 78, 45].map((height, index) => (
              <div key={index} className="flex-1 bg-late4-slate/30">
                <div className="bg-late4-gold" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-late4-slate">
            Incremento de eficiencia post-Late 4
          </p>
        </div>
      </div>
    </section>
  );
}
