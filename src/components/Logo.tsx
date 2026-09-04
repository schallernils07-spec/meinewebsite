import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'stacked';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'horizontal',
  showTagline = false,
  className = ''
}) => {
  // SVG Monogram Mark
  const renderMonogram = (markClass: string) => (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${markClass} transition-transform duration-200 group-hover:scale-105 shrink-0`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sd-d-gradient" x1="15%" y1="100%" x2="85%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {/* S - Upper Arm & Smooth Loop */}
      <path
        d="M 235 32 
           L 130 32 
           C 86 32, 52 64, 52 106 
           C 52 148, 86 178, 130 178 
           L 205 178 
           C 236 178, 258 198, 258 226 
           C 258 254, 236 272, 208 272 
           L 188 272"
        stroke="#ffffff"
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* S - Bottom Left Angled Bar */}
      <path
        d="M 68 280 L 36 316 L 152 316 L 168 280 Z"
        fill="#ffffff"
      />

      {/* Code bracket </> inside lower crook of S */}
      <g stroke="#38bdf8" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        {/* < */}
        <path d="M 98 234 L 84 245 L 98 256" />
        {/* / */}
        <path d="M 116 230 L 106 260" />
        {/* > */}
        <path d="M 124 234 L 138 245 L 124 256" />
      </g>

      {/* D - Sweeping Outer Arc and Rising Diagonal Inner Stem */}
      <path
        d="M 268 36 
           L 295 36 
           C 388 36, 448 96, 448 176 
           C 448 256, 388 316, 295 316 
           L 182 316 
           L 236 218"
        stroke="url(#sd-d-gradient)"
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center select-none text-center ${className}`} id="brand-logo-stacked">
        {renderMonogram(size === 'lg' ? 'w-24 h-16' : size === 'sm' ? 'w-16 h-11' : 'w-20 h-14')}
        
        <div className="mt-3">
          <span
            className={`font-extrabold tracking-[0.22em] text-white uppercase block ${
              size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl'
            }`}
          >
            SCHALLER<span className="text-blue-400 font-bold">DESIGN</span>
          </span>

          {showTagline && (
            <div className="flex items-center justify-center gap-3 mt-2 text-zinc-400">
              <span className="h-[1px] w-8 bg-zinc-700/80" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                Webdesign. Modern. Individuell.
              </span>
              <span className="h-[1px] w-8 bg-zinc-700/80" />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Horizontal variant (default, optimized for Navbar and header)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="brand-logo-container">
      {renderMonogram(
        size === 'lg' ? 'w-12 h-9' : size === 'sm' ? 'w-9 h-6' : 'w-10 h-7'
      )}

      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-[0.18em] text-white uppercase leading-tight ${
            size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-lg sm:text-xl'
          }`}
        >
          SCHALLER<span className="text-blue-400 font-semibold">DESIGN</span>
        </span>

        {showTagline && (
          <span className="text-[9px] font-medium tracking-[0.2em] text-zinc-400 uppercase mt-0.5 hidden sm:block">
            Webdesign. Modern. Individuell.
          </span>
        )}
      </div>
    </div>
  );
};
