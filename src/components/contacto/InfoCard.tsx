import { MapPin, Clock } from 'lucide-react';

export default function InfoCard() {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center mb-3">
          <MapPin className="w-5 h-5 text-purple-400 mr-2" />
          <h3 className="text-white font-semibold">Ubicación</h3>
        </div>
        <p className="text-gray-300">Cali, Valle del Cauca, Colombia</p>
        <p className="text-gray-400 text-sm mt-1">Trabajo con clientes globalmente de forma remota</p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center mb-3">
          <Clock className="w-5 h-5 text-green-400 mr-2" />
          <h3 className="text-white font-semibold">Disponibilidad</h3>
        </div>
        <p className="text-gray-300">Lun - Vie: 9:00 AM - 7:00 PM</p>
        <p className="text-gray-400 text-sm mt-1">Zona horaria: GMT-5 (COT)</p>
      </div>
    </div>
  );
}
