import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Laptop, Scale } from "lucide-react";
import BrazilMap from "./BrazilMap";

const BrazilBanner = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/XXXXXXXX?text=Olá, gostaria de agendar uma reunião`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28">
      {/* Premium Background with Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#B71C1C] via-[#A01818] to-[#8C1515]"
        style={{
          background: 'radial-gradient(ellipse at center, #B71C1C 0%, #A01818 50%, #8C1515 100%)'
        }}
      />
      
      {/* Diagonal Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 37px)'
        }}
      />
      
      {/* Decorative Blurred Circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-48 -translate-y-48" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-32" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl translate-x-64 translate-y-64" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-white rounded-full blur-3xl -translate-x-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="text-center lg:text-left relative">
            {/* Digital Service Icon */}
            <div className="hidden lg:block absolute -top-8 -right-8 text-white/30 animate-float">
              <div className="relative">
                <Laptop size={40} strokeWidth={1.5} />
                <Scale size={20} strokeWidth={2} className="absolute bottom-0 right-0 translate-x-1 translate-y-1" />
              </div>
            </div>
            
            {/* Tag "Atuação Nacional" */}
            <div 
              className="inline-flex items-center gap-2 bg-[#8C1515]/30 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-6"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <MapPin className="h-[18px] w-[18px] text-white" strokeWidth={2.5} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Atuação Nacional</span>
            </div>

            {/* Main Title */}
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-6 leading-tight tracking-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Atendemos em todo o Brasil
            </h2>

            {/* New Subtitle */}
            <p 
              className="text-lg sm:text-xl lg:text-2xl font-poppins text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Do Sul ao Norte, estamos prontos para te atender com ética, excelência e proximidade.
            </p>

            {/* States List */}
            <div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-base sm:text-lg font-poppins font-light text-white/90 mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <span>Rio Grande do Sul</span>
              <span className="text-white/50">•</span>
              <span>Santa Catarina</span>
              <span className="text-white/50">•</span>
              <span>Paraná</span>
              <span className="text-white/50">•</span>
              <span>São Paulo</span>
              <span className="text-white/50">•</span>
              <span>Rio de Janeiro</span>
              <span className="text-white/50">•</span>
              <span>Minas Gerais</span>
              <span className="text-white/50">•</span>
              <span>Brasília e demais estados</span>
            </div>

            {/* Support Text */}
            <p 
              className="text-sm sm:text-base font-poppins text-white/85 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              Agende uma reunião diretamente pelo seu smartphone ou computador. 
              Estamos preparados para te atender de forma online ou presencial.
            </p>

            {/* Premium Button */}
            <Button
              size="lg"
              className="group bg-white text-accent hover:bg-accent hover:text-white border-2 border-transparent hover:border-white/30 transition-all duration-300 text-base sm:text-lg font-bold px-10 py-4 sm:py-5 rounded-lg shadow-2xl shadow-white/20 hover:shadow-accent/40 hover:scale-105 hover:-translate-y-0.5"
              onClick={handleWhatsAppClick}
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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
