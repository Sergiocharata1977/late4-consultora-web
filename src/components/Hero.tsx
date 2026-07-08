import Image from 'next/image';
import { ArrowRight, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#F8F7F5] px-5 pb-20 pt-28 text-late4-ink md:px-8 md:pb-28 md:pt-36">
      <div className="site-container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <p className="eyebrow mb-6">Transformacion operativa</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
            Ordenamos procesos, digitalizamos la gestion y ayudamos a PyMEs a trabajar con{' '}
            <span className="text-late4-teal">informacion confiable.</span>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-late4-slate md:text-base">
            Combinamos consultoria profesional, normas de calidad, tecnologia e inteligencia artificial para transformar la forma en que las empresas registran, controlan y mejoran sus operaciones.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              Solicitar diagnostico de gestion
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#metodo" className="btn-secondary">
              Ver metodologia
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-sm border border-late4-ink/10 bg-white p-3 shadow-2xl shadow-late4-ink/18">
            <Image
              src="/images/sergio-defilippi-hero.png"
              alt="Sergio De Filippi, consultor en procesos, calidad y tecnologia"
              width={1130}
              height={1414}
              priority
              className="aspect-[16/10] w-full rounded-sm bg-[#F3F2F0] object-contain object-center"
            />
          </div>
          <div className="absolute bottom-6 left-3 flex items-center gap-3 rounded-sm bg-late4-teal px-4 py-3 text-white shadow-xl shadow-late4-ink/25">
            <BadgeCheck size={22} />
            <div>
              <p className="text-[10px] font-extrabold uppercase">Calidad certificable</p>
              <p className="text-sm font-extrabold">Normas ISO 9001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
