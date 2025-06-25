import { ArrowRight, LucideIcon } from 'lucide-react';

type ContactCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  color: string;
  text: string;
};

export default function ContactCard({ icon: Icon, title, subtitle, description, link, color, text }: ContactCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-${color}-500/50 transition-all duration-300 group`}>
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 bg-${color}-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-${color}-500/30 transition-colors`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-${color}-400 hover:text-${color}-300 font-semibold transition-colors`}>
        {text}
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
}
