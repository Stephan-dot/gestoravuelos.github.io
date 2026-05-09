import { MessageCircle, Mail, Phone } from "lucide-react";
const agentImage = new URL("../../assets/IMG-20260403-WA0019.jpg", import.meta.url).href;
export function ContactSection() {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp de ejemplo - cambiar por el número real
    window.open("https://wa.me/+5352390740", "_blank");
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conoce a tu Agente
          </h2>
          <p className="text-lg text-gray-600">
            Contacta directamente con nuestra gestora de vuelos experta
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Agent Image */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-8">
              <div className="">
                <img
                  src={agentImage}
                  alt="Gestora de vuelos"
                  className="w-50 h-65 rounded-full md:w-60 md:h-75 object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* Agent Info */}
            <div className="md:col-span-3 py-8 px-6 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Hola, soy Damaris Brizuela
              </h3>
              <p className="text-blue-600 font-semibold mb-6">
                Tu agente de vuelos a Suriname y Guyana
              </p>
              <p className="text-gray-600 mb-8 text-justify">
                Con más de 5 años de experiencia ayudando a cubanos a llegar a su destino, te garantizo un servicio honesto y profesional. Te acompaño en todo el proceso para que tu viaje sea un éxito desde el primer paso. ¡Estoy lista para ayudarte con todas tus dudas y gestionar tu boleto con total seguridad!
              </p>

              {/* Contact Options */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+5352390740 </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>damarisbrizuelaflyallways@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>damarisflyallways@gmail.com</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Clientes satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Compromiso y confianza</div>
          </div>
        </div>
      </div>
    </section>
  );
}
