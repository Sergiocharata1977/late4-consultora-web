'use client';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b border-late4-light-gray z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-late4-navy">
          Late 4<span className="text-late4-gold">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('servicios')} className="text-late4-gray hover:text-late4-navy transition">
            Servicios
          </button>
          <button onClick={() => scrollToSection('software')} className="text-late4-gray hover:text-late4-navy transition">
            Software
          </button>
          <button onClick={() => scrollToSection('iso')} className="text-late4-gray hover:text-late4-navy transition">
            ISO 9001
          </button>
          <button onClick={() => scrollToSection('contacto')} className="text-late4-gray hover:text-late4-navy transition">
            Contacto
          </button>
        </nav>

        <button onClick={() => scrollToSection('contacto')} className="btn-primary text-sm">
          Solicitar diagnóstico
        </button>
      </div>
    </header>
  );
}
