import { Mail, Phone, Users, Clock } from 'lucide-react';
import ContactCard from './ContactCard';

export default function ContactGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <ContactCard
        icon={Mail}
        title="Email"
        subtitle="Respuesta en 24h"
        description="La forma más directa de contactarme. Te respondo personalmente con una propuesta detallada."
        link="mailto:millandev2111@gmail.com"
        color="blue"
        text="millandev2111@gmail.com"
      />
      <ContactCard
        icon={Phone}
        title="WhatsApp"
        subtitle="Respuesta inmediata"
        description="Para consultas rápidas y seguimiento de proyectos. Disponible de 9AM a 7PM."
        link="https://wa.me/+573023391357"
        color="green"
        text="+57 (302) 339-1357"
      />
      <ContactCard
        icon={Users}
        title="LinkedIn"
        subtitle="Red profesional"
        description="Conecta conmigo profesionalmente y ve mi portafolio completo de proyectos."
        link="https://www.linkedin.com/in/andres-felipe-cardona-millan-4429a333a/"
        color="blue"
        text="/in/Andres-Felipe-Cardona-Millan"
      />
      <ContactCard
        icon={Clock}
        title="Videollamada"
        subtitle="30 min gratis"
        description="Agenda una consulta gratuita para discutir tu proyecto en detalle."
        link="https://calendly.com/tu-usuario"
        color="yellow"
        text="Agendar Consulta"
      />
    </div>
  );
}
