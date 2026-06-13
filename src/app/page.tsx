import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import MethodSection from '@/components/MethodSection';
import SoftwareSection from '@/components/SoftwareSection';
import ContactForm from '@/components/ContactForm';
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">Primer paso</p>
          <h2 className="font-editorial text-4xl font-bold leading-tight md:text-5xl">
            Empecemos por entender cómo funciona tu empresa
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-late4-slate md:text-base">
            Agenda una llamada estratégica de 15 minutos para identificar tus cuellos de botella actuales.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-sm border border-late4-ink/10 bg-white p-6 shadow-2xl shadow-late4-blue-deep/10 md:p-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
