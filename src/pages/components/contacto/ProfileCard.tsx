export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-b from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 text-center">
      <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
        <img src="/Foto-millandev.webp" alt="Andres Cardona" className="w-full h-full rounded-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Andres Cardona</h3>
      <p className="text-blue-400 font-semibold mb-4">Full Stack Developer</p>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Especializado en la creación de landing pages usando AstroJS, NextJS y React, así como herramientas lowcode/no-code como Webflow, WordPress y Framer.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatItem label="Proyectos" value="20+" />
        <StatItem label="Años" value="2+" />
        <StatItem label="Satisfacción" value="100%" />
      </div>

      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Tecnologías Principales</h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind'].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
