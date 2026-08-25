import { ArrowRight, CheckCircle2, Factory, LineChart, ShieldCheck, Wallet } from 'lucide-react';
import Late4Mark from './Late4Mark';

const dataSources = [
  { icon: LineChart, label: 'Ventas' },
  { icon: Wallet, label: 'Costos' },
  { icon: Factory, label: 'Producción' },
  { icon: ShieldCheck, label: 'Calidad' },
];

const highlights = ['ISO 9001', 'Control de Costos', 'Software a Medida'];

export default function Hero() {
  return (
    <section id="inicio" className="l4-grid-bg border-b border-l4-line bg-white px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="site-container grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-l4-blue/20 bg-l4-blue-soft px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-l4-blue">
            <span className="text-[8px] leading-none">&#9670;</span>
            Gestión Integrada para PyMEs
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-l4-night md:text-5xl">
            De datos dispersos a una{' '}
            <span className="block text-l4-blue">plataforma unificada</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-l4-muted md:text-base">
            Transformamos la información dispersa en planillas Excel, correos y sistemas aislados en un sistema de
            gestión único. Integramos procesos, costos, calidad y tecnología para que tomes mejores decisiones.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="l4-btn">
              Solicitar diagnóstico
              <ArrowRight size={14} />
            </a>
            <a href="#metodo" className="l4-btn-outline">
              Ver metodología
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-l4-muted">
                <CheckCircle2 size={15} className="text-l4-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-l4-line border-t-[3px] border-t-l4-blue bg-l4-surface p-8 md:p-10">
          <div className="text-center">
            <Late4Mark className="mx-auto h-9 w-9 text-l4-blue" />
            <h2 className="mt-5 text-xl font-bold tracking-tight text-l4-night">Mapeo e Integración</h2>
            <p className="mx-auto mt-3 max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-l4-muted">
              Excel + ERP + CRM + Procesos + Costos &rarr; Un solo sistema
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {dataSources.map((source) => {
              const Icon = source.icon;
              return (
                <div
                  key={source.label}
                  className="flex items-center gap-2.5 rounded-lg border border-l4-line bg-white px-3 py-3"
                >
                  <Icon size={15} className="shrink-0 text-l4-blue" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-l4-night">{source.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
