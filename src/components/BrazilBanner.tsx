import { MapPin } from "lucide-react";

const BrazilBanner = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 bg-gradient-to-b from-gray-50/50 to-white">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculos Desfocados */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-green-600/6 rounded-full blur-3xl"></div>
        
        {/* Formas Orgânicas SVG */}
        <svg className="absolute left-0 top-1/4 w-32 h-auto opacity-[0.03] hidden sm:block" viewBox="0 0 200 200">
          <path 
            d="M0,100 Q50,50 100,100 T200,100 L200,200 L0,200 Z" 
            fill="currentColor" 
            className="text-green-600"
          />
        </svg>
        <svg className="absolute right-0 top-1/3 w-40 h-auto opacity-[0.04] hidden sm:block" viewBox="0 0 200 200">
          <path 
            d="M200,100 Q150,150 100,100 T0,100 L0,200 L200,200 Z" 
            fill="currentColor" 
            className="text-yellow-500"
          />
        </svg>
        
        {/* Linhas Diagonais Sutis */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-green-600/10 to-transparent rotate-45 origin-top hidden md:block"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent -rotate-45 origin-bottom hidden md:block"></div>
        
        {/* Pontos Luminosos Decorativos */}
        <div className="absolute top-12 left-1/4 w-2 h-2 rounded-full bg-green-500/20"></div>
        <div className="absolute top-20 right-1/3 w-1.5 h-1.5 rounded-full bg-yellow-400/25"></div>
        <div className="absolute bottom-16 left-1/3 w-2.5 h-2.5 rounded-full bg-green-600/15 hidden sm:block"></div>
        <div className="absolute bottom-24 right-1/4 w-1 h-1 rounded-full bg-yellow-500/20 hidden sm:block"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
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
