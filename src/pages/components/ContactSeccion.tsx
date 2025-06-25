import ProfileCard from './contacto/ProfileCard';
import ContactGrid from './contacto/ContactGrid';
import InfoCard from './contacto/InfoCard';
import CallToAction from './contacto/CallToAction';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conectemos y Hagamos <span className="text-blue-400">Realidad</span> Tu Proyecto
          </h2>
          <p className="text-xl text-gray-300">
            Con más de 2 años transformando ideas en experiencias digitales exitosas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
          <div className="lg:col-span-2">
            <ContactGrid />
            <InfoCard />
          </div>
        </div>

        <CallToAction />
      </div>
    </section>
  );
}
