import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import BrazilMap from "./BrazilMap";

const BrazilBanner = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/XXXXXXXX?text=Olá, gostaria de agendar uma reunião`,
      "_blank"
    );
  };

  return (
    <section className="bg-gradient-red py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              data-aos="fade-down"
            >
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-semibold uppercase tracking-wide">Atuação Nacional</span>
            </div>

            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Atendemos em todo o Brasil
            </h2>

            <p 
              className="text-base sm:text-lg lg:text-xl text-white/95 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Rio Grande do Sul • Santa Catarina • Paraná • São Paulo • Rio de Janeiro • Minas Gerais • Brasília e demais estados
            </p>

            <p 
              className="text-sm sm:text-base text-white/90 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Agende uma reunião diretamente pelo seu smartphone ou computador. 
              Estamos preparados para te atender de forma online ou presencial.
            </p>

            <Button
              size="lg"
              className="bg-white text-accent hover:bg-gray-50 transition-all text-base sm:text-lg px-8 py-6 sm:py-7 hover:scale-105 font-bold shadow-lg"
              onClick={handleWhatsAppClick}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Brazil Map Section */}
          <div className="flex justify-center lg:justify-end">
            <BrazilMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilBanner;
