import Image from 'next/image';
import { ArrowRight, BadgeCheck, CheckCircle2, Factory, LineChart, ShieldCheck, Wallet } from 'lucide-react';
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
    <>
      <section id="inicio" className="l4-grid-bg bg-white px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="site-container grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
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
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-l4-muted"
                >
                  <CheckCircle2 size={15} className="text-l4-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-l4-line border-t-[3px] border-t-l4-blue bg-white">
              <Image
                src="/images/sergio-defilippi-hero.png"
                alt="Cont. Sergio Javier De Filippi, consultor en procesos, costos, calidad y tecnología"
                width={1130}
                height={1414}
                priority
                className="aspect-[4/5] w-full bg-l4-surface object-cover object-center"
              />
              <div className="border-t border-l4-line px-6 py-5">
                <p className="text-sm font-bold text-l4-night">Cont. Sergio Javier De Filippi</p>
                <p className="mt-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-l4-muted">
                  Contador Público · Maestrando en Ingeniería de la Calidad
                </p>
              </div>
            </div>

            <div className="absolute -left-3 bottom-24 hidden items-center gap-2.5 rounded-lg bg-l4-blue px-4 py-3 text-white shadow-lg shadow-l4-blue/20 sm:flex">
              <BadgeCheck size={18} />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/75">Calidad certificable</p>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]">Normas ISO 9001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-l4-line bg-l4-surface px-5 py-14 md:px-8">
        <div className="site-container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="flex items-start gap-4">
            <Late4Mark className="mt-1 h-8 w-8 shrink-0 text-l4-blue" />
            <div>
              <h2 className="text-xl font-bold tracking-tight text-l4-night">Mapeo e Integración</h2>
              <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-l4-muted">
                Excel + ERP + CRM + Procesos + Costos &rarr; Un solo sistema
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
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
      </section>
    </>
  );
}
