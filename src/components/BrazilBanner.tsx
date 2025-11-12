import { MapPin } from "lucide-react";

const BrazilBanner = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Ícone sutil */}
          <div className="mb-4">
            <MapPin 
              className="h-6 w-6 text-gray-400 mx-auto" 
              strokeWidth={1.5}
            />
          </div>
          
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl font-playfair font-normal text-gray-900 mb-3 tracking-tight">
            Atendemos em todo o Brasil
          </h2>
          
          {/* Texto discreto */}
          <p className="text-base sm:text-lg font-['Lato'] font-light text-gray-600">
            Atuação nacional online e presencial
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default BrazilBanner;
