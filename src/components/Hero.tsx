import { Button } from "@/components/ui/button";
import { ArrowRight, Scale } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/XXXXXXXX?text=Olá, gostaria de mais informações sobre os serviços jurídicos`,
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Medeiros Jr. Advocacia - Escritório de Advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Scale className="h-5 w-5 text-accent" />
            <span className="text-white font-medium">Advocacia de Excelência</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Comprometimento e confiança para{" "}
            <span className="text-accent">defender seus direitos</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 animate-fade-in-up font-light max-w-3xl mx-auto leading-relaxed">
            Atuação ética e especializada em diversas áreas do Direito, com foco total nos seus interesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-gradient-red hover:opacity-90 transition-all shadow-red text-base sm:text-lg px-8 py-7 hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              Falar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg px-8 py-7 transition-all hover:scale-105"
              onClick={() => {
                const element = document.getElementById("sobre");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
