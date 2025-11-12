const BrazilMap = () => {
  return (
    <div className="relative w-full max-w-md mx-auto" data-aos="fade-up" data-aos-delay="300">
      <svg
        viewBox="0 0 500 600"
        className="w-full h-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brazil map simplified silhouette */}
        <path
          d="M250 50 L280 60 L310 80 L330 100 L350 130 L360 160 L365 190 L370 220 L375 250 L378 280 L380 310 L380 340 L378 370 L375 400 L370 430 L365 460 L355 490 L340 510 L320 525 L295 535 L270 540 L245 542 L220 540 L195 535 L170 525 L150 510 L135 490 L125 470 L118 445 L115 420 L113 395 L112 370 L112 345 L113 320 L115 295 L118 270 L122 245 L127 220 L133 195 L140 170 L150 145 L162 120 L177 100 L195 85 L215 70 L235 58 Z"
          className="fill-white/90 hover:fill-white transition-all duration-500"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
        
        {/* Decorative pin markers for major regions */}
        <g className="animate-pulse">
          {/* South */}
          <circle cx="200" cy="480" r="6" className="fill-accent" opacity="0.9" />
          <circle cx="200" cy="480" r="12" className="fill-accent" opacity="0.3" />
          
          {/* Southeast */}
          <circle cx="280" cy="420" r="6" className="fill-accent" opacity="0.9" />
          <circle cx="280" cy="420" r="12" className="fill-accent" opacity="0.3" />
          
          {/* Central-West */}
          <circle cx="220" cy="320" r="6" className="fill-accent" opacity="0.9" />
          <circle cx="220" cy="320" r="12" className="fill-accent" opacity="0.3" />
          
          {/* Northeast */}
          <circle cx="330" cy="200" r="6" className="fill-accent" opacity="0.9" />
          <circle cx="330" cy="200" r="12" className="fill-accent" opacity="0.3" />
          
          {/* North */}
          <circle cx="250" cy="120" r="6" className="fill-accent" opacity="0.9" />
          <circle cx="250" cy="120" r="12" className="fill-accent" opacity="0.3" />
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
