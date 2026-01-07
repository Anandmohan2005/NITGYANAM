
import React from 'react';

const Logo: React.FC<{ className?: string; hideText?: boolean }> = ({ className = "w-12 h-12", hideText = false }) => {
  // Use a root-relative path or a reliable external URL instead of an ESM import
  const logoUrl = '/logo.png';
  const fallbackUrl = 'https://media.licdn.com/dms/image/v2/D560BAQF225xp-GCLoQ/company-logo_100_100/B56ZrdNHQOL8AQ-/0/1764647797939/nitgyanam_logo?e=2147483647&v=beta&t=EkOL1VghOZWLzu0SL4muC3mF32rzx-MBBIuGpFIlXGU';

  return (
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className={`${className} bg-gold rounded-full p-0.5 shadow-neon-gold transition-transform duration-700 group-hover:rotate-[360deg]`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-white">
          <img 
            src={logoUrl}
            alt="NitGyanam" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== fallbackUrl) {
                target.src = fallbackUrl;
              }
            }}
          />
        </div>
      </div>
      {!hideText && (
        <div className="flex flex-col">
          <span className="text-charcoal font-black text-2xl tracking-tighter leading-none uppercase group-hover:text-gold transition-colors">NitGyanam</span>
          <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] leading-none mt-1">Well-Being Portal</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
