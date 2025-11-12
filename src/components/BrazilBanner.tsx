import { MapPin } from "lucide-react";

const BrazilBanner = () => {
  return (
    <section className="py-14 sm:py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
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
            <span className="font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
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
