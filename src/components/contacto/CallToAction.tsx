export default function CallToAction() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-4">¿Listo Para Transformar Tu Negocio?</h3>
        <p className="text-xl text-gray-300 mb-6">
          No esperes más. Cada día sin una web profesional es una oportunidad perdida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:millandev2111@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Comenzar Mi Proyecto Ahora
          </a>
          <a
            href="https://wa.me/+573023391357"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Consulta Rápida por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
