import PlanCard from './planes/PlanesCard';
import { plans } from './planes/PlanesData';

export default function SeccionServicios() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Planes Diseñados Para Tu <span className="text-blue-400">Éxito</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desde startups hasta empresas establecidas, tengo la solución perfecta para tu negocio
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
