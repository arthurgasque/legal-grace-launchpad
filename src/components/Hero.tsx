import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out"
        }}
      >
        <img
          src={heroImage}
          alt="Medeiros Jr. Advocacia - Escritório de Advocacia Premium"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <Scale className="h-5 w-5 text-accent" />
            <span className="text-white font-medium tracking-wide">Advocacia de Excelência</span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Compromisso, transparência e{" "}
            <span className="text-accent">excelência jurídica</span> para defender seus direitos
          </h1>
          
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 font-light max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Bem-vindo ao Medeiros Jr. Associados, um escritório jurídico dedicado a oferecer soluções personalizadas, pautadas na ética, transparência e comprometimento com resultados concretos.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <Button
              size="lg"
              className="bg-gradient-red hover:opacity-90 transition-all shadow-red text-base sm:text-lg px-8 py-6 sm:py-7 hover:scale-105 font-semibold"
              onClick={handleWhatsAppClick}
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary text-base sm:text-lg px-8 py-6 sm:py-7 transition-all hover:scale-105 font-semibold"
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
