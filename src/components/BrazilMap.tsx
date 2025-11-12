const BrazilMap = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto" data-aos="fade-left" data-aos-delay="600">
      <svg
        viewBox="0 0 1000 1200"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))' }}
      >
        {/* Stylized Brazil Outline */}
        <path
          d="M500,100 L520,110 L540,125 L560,145 L580,170 L600,200 L620,235 L640,270 L655,305 L665,340 L675,375 L685,410 L690,445 L692,480 L690,515 L685,550 L678,585 L668,620 L655,655 L640,690 L622,725 L602,760 L580,795 L555,830 L528,865 L498,900 L465,935 L430,965 L395,990 L360,1010 L325,1025 L290,1035 L255,1038 L220,1035 L185,1025 L150,1010 L120,990 L95,965 L75,935 L60,900 L50,865 L45,830 L43,795 L45,760 L50,725 L58,690 L70,655 L85,620 L103,585 L123,550 L145,515 L170,480 L197,445 L226,410 L257,375 L290,340 L325,305 L360,270 L395,235 L425,200 L450,170 L470,145 L485,125 L495,110 Z"
          className="fill-white/8 stroke-white/20"
          strokeWidth="2.5"
        />
        
        {/* Regional Pin Markers with Pulsating Animation */}
        <defs>
          <style>
            {`
              @keyframes pulse-pin {
                0%, 100% { 
                  transform: scale(1); 
                  opacity: 0.6; 
                }
                50% { 
                  transform: scale(1.3); 
                  opacity: 0.3; 
                }
              }
              .pin-ring-1 { animation: pulse-pin 2s ease-in-out infinite; }
              .pin-ring-2 { animation: pulse-pin 2s ease-in-out infinite 0.4s; }
              .pin-ring-3 { animation: pulse-pin 2s ease-in-out infinite 0.8s; }
              .pin-ring-4 { animation: pulse-pin 2s ease-in-out infinite 1.2s; }
              .pin-ring-5 { animation: pulse-pin 2s ease-in-out infinite 1.6s; }
            `}
          </style>
        </defs>
        
        {/* 1. Porto Alegre/Sul (RS) */}
        <g>
          <circle cx="450" cy="950" r="20" className="fill-accent pin-ring-1" opacity="0.3" />
          <circle cx="450" cy="950" r="12" className="fill-accent pin-ring-1" opacity="0.6" />
          <circle cx="450" cy="950" r="6" className="fill-accent" opacity="1" />
        </g>
        
        {/* 2. São Paulo/Sudeste */}
        <g>
          <circle cx="520" cy="800" r="20" className="fill-accent pin-ring-2" opacity="0.3" />
          <circle cx="520" cy="800" r="12" className="fill-accent pin-ring-2" opacity="0.6" />
          <circle cx="520" cy="800" r="6" className="fill-accent" opacity="1" />
        </g>
        
        {/* 3. Rio de Janeiro/Sudeste */}
        <g>
          <circle cx="560" cy="820" r="20" className="fill-accent pin-ring-3" opacity="0.3" />
          <circle cx="560" cy="820" r="12" className="fill-accent pin-ring-3" opacity="0.6" />
          <circle cx="560" cy="820" r="6" className="fill-accent" opacity="1" />
        </g>
        
        {/* 4. Brasília/Centro-Oeste */}
        <g>
          <circle cx="480" cy="600" r="20" className="fill-accent pin-ring-4" opacity="0.3" />
          <circle cx="480" cy="600" r="12" className="fill-accent pin-ring-4" opacity="0.6" />
          <circle cx="480" cy="600" r="6" className="fill-accent" opacity="1" />
        </g>
        
        {/* 5. Salvador/Nordeste */}
        <g>
          <circle cx="650" cy="500" r="20" className="fill-accent pin-ring-5" opacity="0.3" />
          <circle cx="650" cy="500" r="12" className="fill-accent pin-ring-5" opacity="0.6" />
          <circle cx="650" cy="500" r="6" className="fill-accent" opacity="1" />
        </g>
        
        {/* Enhanced Glow Effect */}
        <defs>
          <filter id="enhanced-glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* Map Label */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/25 backdrop-blur-md rounded-full px-6 py-2 border border-white/30">
        <span className="text-white text-xs font-bold uppercase tracking-widest">
          Cobertura Nacional
        </span>
      </div>
    </div>
  );
};

export default BrazilMap;
