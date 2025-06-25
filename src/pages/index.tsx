import React, { useState } from 'react';
import { 
  CheckCircle,
  Clock,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SeccionServicios from '../components/SeccionServicios';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSeccion';


export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Seccion */}
      <section id="inicio" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </section>

      {/* Seccion problema / solucion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                ¿Tu Negocio Está <span className="text-red-400">Perdiendo Clientes</span> Cada Día?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Sin Presencia Online, No Existes</h3>
                    <p className="text-gray-400">el 97% de los consumidores buscan negocios online antes de comprar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Tu Competencia Te Está Superando</h3>
                    <p className="text-gray-400">mientras no tienes web, tus competidores capturan TUS clientes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Ventas Limitadas</h3>
                    <p className="text-gray-400">solo vendes en horario comercial y a clientes locales</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                <span className="text-green-400">La Solución:</span> Tu Web Profesional
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Credibilidad Instantánea</h3>
                    <p className="text-gray-400">una web profesional te posiciona como líder en tu sector</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Ventas 24/7</h3>
                    <p className="text-gray-400">tu negocio nunca duerme, genera ingresos mientras descansas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Alcance Global</h3>
                    <p className="text-gray-400">expande tu mercado más allá de tu ubicación física</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion de planes y servicios */}
      <SeccionServicios/>

      {/* Seccion de como es trabajar conmigo */}
      <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mi Proceso de <span className="text-blue-400">Trabajo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un proceso probado que garantiza resultados excepcionales y comunicación transparente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-blue-500/30">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Resuelves el Formulario</h3>
              <p className="text-gray-400">
                Completas un formulario detallado con tus necesidades, objetivos y preferencias de diseño.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-blue-500/30">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Análisis y Estrategia</h3>
              <p className="text-gray-400">
                Analizo tus respuestas y creo una estrategia personalizada con cronograma y propuesta técnica.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Desarrollo y Updates</h3>
              <p className="text-gray-400">
                Desarrollo tu web en etapas, enviándote avances semanales para tu feedback y aprobación.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-yellow-500/30">
                <span className="text-2xl font-bold text-yellow-400">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Entrega y Lanzamiento</h3>
              <p className="text-gray-400">
                Entrego tu web finalizada, la lanzo en producción y te capacito para administrarla.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Tiempo de Entrega</h3>
              <p className="text-gray-300 text-lg">
                <span className="text-blue-400 font-semibold">Plan Esencial:</span> 7-10 días • 
                <span className="text-blue-400 font-semibold"> Plan Profesional:</span> 14-21 días • 
                <span className="text-blue-400 font-semibold"> Plan Premium:</span> 21-30 días
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Seccion */}
      <FaqSection/>

      {/* Seccion de contacto / Enviame un Gmail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo Para <span className="text-blue-400">Comenzar?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Cuéntame sobre tu proyecto y te enviaré una propuesta personalizada
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <ContactForm/>
          </div>
        </div>
      </section>

      {/* Informacion Sobre mi */}
      <ContactSection />

      {/* Footer */}
      <Footer/>
    </div>
  );
}