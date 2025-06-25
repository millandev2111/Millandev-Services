import { Globe, Code, TrendingUp, LucideIcon } from 'lucide-react';

export type Plan = {
  id: string;
  icon: LucideIcon;
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight: boolean;
  color: 'blue' | 'yellow';
};

export const plans: Plan[] = [
  {
    id: 'basico',
    icon: Globe,
    title: 'Portafolios',
    price: 'Desde $400.000COP',
    description: 'Perfecto para personas que quieren mostrar su trabajo',
    features: [
      'Diseño responsivo moderno',
      'Imagenes que llaman la atención',
      'Optimizado para móviles',
      'Formulario de contacto',
      'SEO básico incluido',
    ],
    buttonText: 'Comenzar Ahora',
    highlight: false,
    color: 'blue',
  },
  {
    id: 'landing',
    icon: Code,
    title: 'Landing Page',
    price: 'Desde $600.000COP',
    description: 'Para negocios en crecimiento',
    features: [
      'Todo lo del plan Esencial',
      '4 Secciones personalizadas',
      'Animaciones personalizadas',
      'Integración con redes sociales',
      'Posibilidad de pasarela de pagos',
      'SEO avanzado',
    ],
    buttonText: 'Elegir Plan',
    highlight: true,
    color: 'blue',
  },
  {
    id: 'ecommerce',
    icon: TrendingUp,
    title: 'E-commerce',
    price: "Desde $1'000.000COP",
    description: 'Para empresas establecidas',
    features: [
      'Todo lo del plan Profesional',
      '5 Páginas',
      'E-commerce integrado',
      'Panel de administración de contenido (CMS)',
      'Soporte prioritario 6 meses',
    ],
    buttonText: 'Contactar',
    highlight: false,
    color: 'yellow',
  },
];
