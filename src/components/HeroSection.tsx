import { Zap } from "lucide-react"

export default function HeroSection() {
    return (
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
                <Zap className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Desarrollo Web Profesional</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Tu Negocio Merece una
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Web Extraordinaria
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transformo ideas en experiencias digitales que cautivan a tus clientes y hacen crecer tu negocio. 
                Desarrollo web moderno, rápido y optimizado para conversiones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Comenzar Mi Proyecto
                </button>
                <a href='https://portfolio-astro-millandev.vercel.app/' className="text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Ver Mi Trabajo
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}