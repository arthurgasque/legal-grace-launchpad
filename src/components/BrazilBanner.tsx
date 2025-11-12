import { MapPin } from "lucide-react";

const BrazilBanner = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-br from-green-50 via-yellow-50/40 to-green-50">
      
      {/* Elementos Decorativos de Fundo - Design Limpo e Elegante */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente Suave com Círculos Desfocados */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-yellow-400/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-green-600/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Círculos com Borda - Elementos de Elegância */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-green-500/15 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-yellow-400/15 rounded-full hidden lg:block"></div>
        
        {/* Pontos Luminosos Estratégicos */}
        <div className="absolute top-20 left-[15%] w-2.5 h-2.5 rounded-full bg-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.4)] animate-pulse-glow"></div>
        <div className="absolute bottom-28 right-[20%] w-3 h-3 rounded-full bg-yellow-400/50 shadow-[0_0_18px_rgba(250,204,21,0.4)] animate-pulse-glow"></div>
        <div className="absolute top-32 right-[30%] w-2 h-2 rounded-full bg-green-500/40 shadow-[0_0_12px_rgba(34,197,94,0.3)] hidden md:block"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 sm:p-10 text-center border border-green-100/50">
          
          {/* Tag Premium com Ícone */}
          <div 
            className="inline-flex items-center gap-2 bg-green-600/10 px-4 py-2 rounded-full mb-6"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <MapPin 
              className="h-4 w-4 text-green-600" 
              strokeWidth={2}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-green-700">
              Abrangência Nacional
            </span>
          </div>
          
          {/* Título com Destaque em BRASIL */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Atendemos em todo o{" "}
            <span className="inline-block font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 bg-clip-text text-transparent hover:from-green-500 hover:via-yellow-400 hover:to-green-500 transition-all duration-500 hover:scale-110 cursor-pointer hover:drop-shadow-[0_0_12px_rgba(0,151,57,0.4)]">
              BRASIL
            </span>
          </h2>
          
          {/* Linha Decorativa Verde */}
          <div 
            className="flex items-center justify-center gap-3 mb-6"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-600"></div>
            <div className="h-2 w-2 rounded-full bg-green-600"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-600"></div>
          </div>
          
          {/* Lista de Estados Estilizada */}
          <div 
            className="flex flex-wrap items-center justify-center gap-2 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {["RS", "SC", "PR", "SP", "RJ", "MG", "DF", "BA", "PE", "CE"].map((state, index) => (
              <span key={state}>
                <span className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium">
                  {state}
                </span>
                {index < 9 && <span className="text-gray-400 ml-2">•</span>}
              </span>
            ))}
            <span className="text-sm sm:text-base text-gray-400 font-light">
              e demais estados
            </span>
          </div>
          
          {/* Texto de Apoio */}
          <p 
            className="text-base text-gray-600 font-light"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Atuação online e presencial em todo o território nacional
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default BrazilBanner;
