import { CheckCircle } from 'lucide-react';
import { Plan } from './PlanesData';

export default function PlanCard({ 
  icon: Icon, // esta es la referencia al componente del icono
  title, price, description, features, buttonText, highlight, color 
}: Plan) {
  const baseStyles = "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300";
  const highlightStyles = "bg-gradient-to-b from-blue-600/20 to-cyan-600/20 border-blue-500/50 scale-105 relative";
  const hoverBorder = color === 'yellow' ? 'hover:border-yellow-500/50' : 'hover:border-purple-500/50';

  return (
    <div className={`${baseStyles} ${highlight ? highlightStyles : hoverBorder}`}>
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold">
            MÁS POPULAR
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <div className={`w-16 h-16 ${color === 'yellow' ? 'bg-yellow-500/20' : 'bg-blue-500/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon className={`w-8 h-8 ${color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'}`} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="text-4xl font-bold text-white mb-2">{price}</div>
        <p className="text-gray-400">{description}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full ${highlight ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' : 'bg-white/10 hover:bg-white/20'} text-white py-3 rounded-full font-semibold transition-colors`}>
        {buttonText}
      </button>
    </div>
  );
}
