import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import MethodSection from '@/components/MethodSection';
import SoftwareSection from '@/components/SoftwareSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <MethodSection />
      <SoftwareSection />

      <section id="contacto" className="bg-late4-paper px-5 py-24 text-late4-ink md:px-8">
        <div className="site-container text-center">
          <p className="mx-auto mb-8 inline-flex rounded-full border border-late4-ink/10 bg-white px-4 py-2 text-[11px] font-extrabold uppercase text-late4-teal">
            Listo para el siguiente nivel
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Las PyMEs no necesitan mas planillas aisladas. Necesitan procesos claros.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-late4-slate">
            Informacion confiable y sistemas que acompanen la forma real de trabajar. Empece hoy su transformacion.
          </p>
          <a href="mailto:info@late4.com.ar?subject=Solicitud%20de%20diagnostico%20de%20gestion" className="btn-primary mt-10">
            Quiero ordenar mi empresa
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
