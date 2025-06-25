export default function Navbar () {
    return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">&lt;</span>MillanDev<span className="text-blue-400">/&gt;</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-blue-400 transition-colors">Inicio</a>
              <a href="#servicios" className="text-white hover:text-blue-400 transition-colors">Servicios</a>
              <a href="#proceso" className="text-white hover:text-blue-400 transition-colors">Proceso</a>
              <a href="#contacto" className="text-white hover:text-blue-400 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>
    )
}