import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import MethodSection from '@/components/MethodSection';
import SoftwareSection from '@/components/SoftwareSection';
import ISOSection from '@/components/ISOSection';
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
      <ISOSection />

      <section id="contacto" className="py-20 px-6 bg-late4-light-gray">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title text-center">Empecemos por entender cómo funciona tu empresa</h2>
          <p className="section-subtitle text-center">Podemos ayudarte a detectar problemas de organización, procesos críticos y oportunidades de digitalización.</p>
          <div className="bg-white p-8 rounded mb-12">
            <ContactForm />
          </div>
          <div className="text-center space-y-4">
            <p className="text-late4-navy font-semibold">O contáctanos directamente:</p>
            <p className="text-late4-gray">contacto@late4.com</p>
            <p className="text-late4-gray">WhatsApp: +54 9 362 4xxxxxx</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
