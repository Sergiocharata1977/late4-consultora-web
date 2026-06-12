export default function Footer() {
  return (
    <footer className="bg-late4-navy text-late4-light-gray py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-2">Late 4<span className="text-late4-gold">.</span></div>
            <p className="text-sm text-gray-300">Consultoría, procesos y tecnología para empresas en crecimiento.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#servicios" className="hover:text-late4-gold transition">Servicios</a></li>
              <li><a href="#software" className="hover:text-late4-gold transition">Software</a></li>
              <li><a href="#iso" className="hover:text-late4-gold transition">ISO 9001</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>contacto@late4.com</li>
              <li>+54 9 362 4xxxxxx</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ubicación</h4>
            <p className="text-sm text-gray-300">Charata, Chaco, Argentina</p>
          </div>
        </div>
        <div className="border-t border-late4-blue pt-8">
          <p className="text-center text-sm text-gray-300">© 2024 Late 4 Consultora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
