
import React from 'react';

const Logo: React.FC<{ className?: string; hideText?: boolean }> = ({ className = "w-12 h-12", hideText = false }) => {
  return (
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className={`${className} relative transition-transform duration-700 group-hover:scale-110`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052D4" />
              <stop offset="50%" stopColor="#4364F7" />
              <stop offset="100%" stopColor="#6FB1FC" />
            </linearGradient>
          </defs>
          {/* Background Circle */}
          <circle cx="50" cy="50" r="48" fill="white" className="opacity-10" />
          
          {/* Stylized 'S' */}
          <path 
            d="M35 35 C 35 20, 65 20, 65 35 C 65 45, 35 55, 35 65 C 35 80, 65 80, 65 65" 
            fill="none" 
            stroke="url(#logoGrad)" 
            strokeWidth="12" 
            strokeLinecap="round"
            className="transition-all duration-500 group-hover:stroke-[14]"
          />
          
          {/* Integrated Graduation Cap */}
          <g transform="translate(55, 15) scale(0.6)" className="transition-transform duration-500 group-hover:rotate-12">
            <path 
              d="M0 15 L 25 0 L 50 15 L 25 30 Z" 
              fill="#0052D4" 
            />
            <path 
              d="M10 18 L 10 25 C 10 25, 25 35, 40 25 L 40 18" 
              fill="#003a94" 
            />
            <path 
              d="M48 15 L 48 35" 
              stroke="#0052D4" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            <circle cx="48" cy="35" r="4" fill="#0052D4" />
          </g>
        </svg>
      </div>
      {!hideText && (
        <div className="flex flex-col">
          <span className="text-[#0A0A0A] font-black text-2xl tracking-tighter leading-none uppercase group-hover:text-[#3A86FF] transition-colors">Student</span>
          <span className="text-[#64748b] text-[10px] font-black uppercase tracking-[0.3em] leading-none mt-1">Education • Tech • Growth</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
