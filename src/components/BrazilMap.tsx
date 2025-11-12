const BrazilMap = () => {
  return (
    <div className="relative w-full max-w-md mx-auto" data-aos="fade-up" data-aos-delay="300">
      <svg
        viewBox="0 0 1000 912"
        className="w-full h-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Import complete Brazil map with all 27 states */}
        <image href={`${import.meta.env.BASE_URL}src/assets/br.svg`} width="1000" height="912" className="fill-white/90" />
        
        {/* Overlay with custom styling */}
        <g id="overlay" className="pointer-events-none">
          <rect x="0" y="0" width="1000" height="912" 
            className="fill-white/5 hover:fill-white/10 transition-all duration-500"
          />
        </g>
        
        {/* Decorative pin markers for major regions */}
        <g className="animate-pulse">
          {/* Sul - Rio Grande do Sul */}
          <circle cx="460" cy="810" r="8" className="fill-accent" opacity="0.9" />
          <circle cx="460" cy="810" r="16" className="fill-accent" opacity="0.3" />
          
          {/* Sudeste - São Paulo */}
          <circle cx="520" cy="680" r="8" className="fill-accent" opacity="0.9" />
          <circle cx="520" cy="680" r="16" className="fill-accent" opacity="0.3" />
          
          {/* Centro-Oeste - Brasília */}
          <circle cx="485" cy="450" r="8" className="fill-accent" opacity="0.9" />
          <circle cx="485" cy="450" r="16" className="fill-accent" opacity="0.3" />
          
          {/* Nordeste - Bahia */}
          <circle cx="660" cy="370" r="8" className="fill-accent" opacity="0.9" />
          <circle cx="660" cy="370" r="16" className="fill-accent" opacity="0.3" />
          
          {/* Norte - Amazonas */}
          <circle cx="280" cy="170" r="8" className="fill-accent" opacity="0.9" />
          <circle cx="280" cy="170" r="16" className="fill-accent" opacity="0.3" />
        </g>
        
        {/* Glow effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* Map label */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
        <span className="text-white text-xs font-semibold uppercase tracking-wider">
          Cobertura Nacional
        </span>
      </div>
    </div>
  );
};

export default BrazilMap;
