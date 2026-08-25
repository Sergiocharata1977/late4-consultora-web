import { ArrowRight, Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import MethodSection from '@/components/MethodSection';
import ValueSection from '@/components/ValueSection';
import SoftwareSection from '@/components/SoftwareSection';
import Footer from '@/components/Footer';

const measures = [
  'Costo real por producto, orden o etapa.',
  'Desvío entre presupuesto y costo real.',
  'Desperdicios, reprocesos y costo de no calidad.',
  'Horas productivas, tiempos y utilización.',
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesSection />
      <MethodSection />
      <ValueSection />
      <SoftwareSection />

      <section id="contacto" className="bg-l4-surface px-5 py-24 md:px-8">
        <div className="site-container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="l4-eyebrow mb-5">Diagnóstico inicial</p>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-l4-night md:text-4xl">
              Empecemos por entender cómo funciona hoy tu empresa.
            </h2>
            <p className="l4-lead mt-5">
              Una reunión de diagnóstico para relevar procesos, costos y sistemas actuales, y definir el camino hacia una
              sola fuente de información para gestionar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@late4.com.ar?subject=Solicitud%20de%20diagn%C3%B3stico%20de%20gesti%C3%B3n"
                className="l4-btn"
              >
                <Mail size={14} />
                Solicitar diagnóstico
                <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/5493731511514"
                target="_blank"
                rel="noreferrer"
                className="l4-btn-outline"
              >
                <Phone size={14} />
                3731 511514
              </a>
            </div>

            <div className="mt-10 border-t border-l4-line pt-6">
              <p className="text-sm font-bold text-l4-night">Cont. Sergio Javier De Filippi</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-l4-muted">
                Contador Público · Maestrando en Ingeniería de la Calidad · Móvil 3731 511514
              </p>
            </div>
          </div>

          <div className="l4-card p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-l4-muted">Qué podemos medir</p>
            <ul className="mt-6 space-y-4">
              {measures.map((item, index) => (
                <li key={item} className="flex gap-4 border-b border-l4-line pb-4 last:border-0 last:pb-0">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-l4-blue">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-l4-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
