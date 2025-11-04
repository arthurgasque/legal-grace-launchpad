import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Defenda seus direitos com segurança e{" "}
            <span className="text-accent">orientação especializada</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up font-light max-w-2xl mx-auto">
            Atendimento jurídico personalizado em diversas áreas do direito, com experiência,
            ética e comprometimento total com seus interesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-gradient-gold hover:opacity-90 transition-opacity shadow-gold text-base sm:text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Entrar em Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base sm:text-lg px-8 py-6"
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
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
