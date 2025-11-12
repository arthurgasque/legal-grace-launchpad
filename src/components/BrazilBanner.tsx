import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Laptop, Scale, Sparkles } from "lucide-react";

const BrazilBanner = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/XXXXXXXX?text=Olá, gostaria de agendar uma reunião`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28">
      {/* Premium Background with Gradient - Vermelho to Vinho */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #B71C1C 0%, #A01818 40%, #7D1414 70%, #5D0F0F 100%)'
        }}
      />
      
      {/* Diagonal Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 37px)'
        }}
      />
      
      {/* Organic Flowing Shapes - Green and Gold */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Green flowing wave */}
        <svg className="absolute top-0 left-0 w-full h-full animate-float-slow" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path 
            d="M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z" 
            fill="rgba(0, 151, 57, 0.15)"
            className="animate-wave"
          />
        </svg>
        
        {/* Gold flowing wave */}
        <svg className="absolute bottom-0 right-0 w-full h-full animate-float-slow-reverse" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path 
            d="M1440,500 Q1080,600 720,500 T0,500 L0,800 L1440,800 Z" 
            fill="rgba(255, 223, 0, 0.12)"
            className="animate-wave-reverse"
          />
        </svg>
        
        {/* Diagonal flowing band - Green */}
        <div 
          className="absolute top-0 -right-40 w-96 h-full bg-gradient-to-br from-[#009739]/20 to-transparent rotate-12 animate-slide-diagonal"
          style={{ transformOrigin: 'top right' }}
        />
        
        {/* Diagonal flowing band - Gold */}
        <div 
          className="absolute bottom-0 -left-40 w-80 h-full bg-gradient-to-tr from-[#FFDF00]/15 to-transparent -rotate-12 animate-slide-diagonal-reverse"
          style={{ transformOrigin: 'bottom left' }}
        />
      </div>
      
      {/* Luminous Points - Brazilian Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Green sparkles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#009739] rounded-full animate-pulse-glow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#009739] rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-[#009739] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Gold sparkles */}
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#FFDF00] rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#FFDF00] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-[#FFDF00] rounded-full animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        
        {/* Additional scattered points */}
        <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 bg-white rounded-full animate-pulse-glow opacity-60" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-[20%] left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse-glow opacity-60" style={{ animationDelay: '1.8s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content Section - Centered */}
          <div className="text-center relative">
            {/* Digital Service Icon - Floating */}
            <div className="hidden lg:flex absolute -top-12 right-0 text-white/25 animate-float items-center gap-2">
              <div className="relative">
                <Laptop size={44} strokeWidth={1.5} />
                <Scale size={22} strokeWidth={2} className="absolute bottom-0 right-0 translate-x-1 translate-y-1" />
              </div>
              <Sparkles size={24} strokeWidth={2} className="text-[#FFDF00]/60" />
            </div>
            
            {/* Tag "Atuação Nacional" */}
            <div 
              className="inline-flex items-center gap-2 bg-[#5D0F0F]/40 backdrop-blur-md border border-white/25 rounded-full px-6 py-3 mb-8"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <MapPin className="h-[18px] w-[18px] text-white" strokeWidth={2.5} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Atuação Nacional</span>
            </div>

            {/* Main Title */}
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-8 leading-tight tracking-tight max-w-4xl mx-auto"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Atendemos em todo o Brasil
            </h2>

            {/* New Subtitle */}
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-poppins text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Do Sul ao Norte, estamos prontos para te atender com ética, excelência e proximidade.
            </p>

            {/* States List */}
            <div 
              className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-lg font-poppins font-light text-white/90 mb-8"
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
              className="text-sm sm:text-base font-poppins text-white/85 mb-12 leading-relaxed max-w-2xl mx-auto"
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
              className="group bg-white text-accent hover:bg-accent hover:text-white border-2 border-transparent hover:border-white/30 transition-all duration-300 text-base sm:text-lg font-bold px-12 py-5 sm:py-6 rounded-xl shadow-2xl shadow-white/20 hover:shadow-accent/40 hover:scale-105 hover:-translate-y-1"
              onClick={handleWhatsAppClick}
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            {/* Abstract Brazilian Identity Elements */}
            <div className="mt-16 flex items-center justify-center gap-8 opacity-40" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#009739]" />
                <div className="w-6 h-6 rounded-full bg-[#FFDF00]" />
                <div className="w-3 h-3 rounded-full bg-[#009739]" />
              </div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FFDF00]" />
                <div className="w-5 h-5 rounded-full bg-[#009739]" />
                <div className="w-4 h-4 rounded-full bg-[#FFDF00]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilBanner;
