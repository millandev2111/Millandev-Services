export default function Footer() {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">
                <span className="text-blue-400">&lt;</span>MillanDev<span className="text-blue-400">/&gt;</span>
              </div>
              <p className="text-gray-400">
                Transformando ideas en experiencias digitales extraordinarias
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
              <a href="#proceso" className="text-gray-400 hover:text-white transition-colors">Proceso</a>
              <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              © 2025 Andres Felipe Cardona Millan. Todos los derechos reservados. | Hecho con ❤️ en Colombia
            </p>
          </div>
        </div>
      </footer>
    )
}