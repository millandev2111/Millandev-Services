"use client"

import { ArrowRight, LucideIcon } from 'lucide-react';
import clsx from 'clsx';

type ContactCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  color: 'blue' | 'green' | 'yellow'; // para que sea más estricto
  text: string;
};

export default function ContactCard({ icon: Icon, title, subtitle, description, link, color, text }: ContactCardProps) {
  return (
    <div
      className={clsx(
        'bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 group',
        {
          'hover:border-blue-500/50': color === 'blue',
          'hover:border-green-500/50': color === 'green',
          'hover:border-yellow-500/50': color === 'yellow',
        }
      )}
    >
      <div
        className={clsx(
          'w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors group-hover:bg-opacity-30',
          {
            'bg-blue-500/20 group-hover:bg-blue-500/30': color === 'blue',
            'bg-green-500/20 group-hover:bg-green-500/30': color === 'green',
            'bg-yellow-500/20 group-hover:bg-yellow-500/30': color === 'yellow',
          }
        )}
      >
        <Icon
          className={clsx('w-6 h-6', {
            'text-blue-400': color === 'blue',
            'text-green-400': color === 'green',
            'text-yellow-400': color === 'yellow',
          })}
        />
      </div>
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          'inline-flex items-center font-semibold transition-colors',
          {
            'text-blue-400 hover:text-blue-300': color === 'blue',
            'text-green-400 hover:text-green-300': color === 'green',
            'text-yellow-400 hover:text-yellow-300': color === 'yellow',
          }
        )}
      >
        {text}
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
}
