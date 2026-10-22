import React from 'react';

export const AnimatedFloralBackdrop: React.FC = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-0"
      aria-hidden="true"
    >
      {/* 1. Large Luxury Watercolor Rose Bouquet (Top Right) */}
      <div className="absolute -top-6 -right-6 sm:top-4 sm:right-6 w-44 sm:w-60 h-44 sm:h-60 opacity-30 animate-float-sway">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Main Rose Blossom */}
          <circle cx="100" cy="100" r="45" fill="#FCEEF0" stroke="#C58F7C" strokeWidth="2.5" />
          <path
            d="M75 90 C70 65, 110 55, 125 75 C145 95, 125 130, 95 125 C70 120, 60 100, 75 90 Z"
            fill="#F8D8DC"
            stroke="#B47863"
            strokeWidth="2"
          />
          <circle cx="100" cy="98" r="16" fill="#FCEEF0" stroke="#C58F7C" strokeWidth="1.8" />
          <path d="M94 96 C98 90, 106 90, 108 96 C110 102, 102 105, 98 101" stroke="#965E4C" strokeWidth="1.8" />
          {/* Surrounding Rose Petals */}
          <path d="M135 65 C155 50, 170 70, 155 90 C145 80, 140 70, 135 65 Z" fill="#FCEEF0" stroke="#C58F7C" strokeWidth="1.8" />
          <path d="M65 65 C45 50, 30 70, 45 90 C55 80, 60 70, 65 65 Z" fill="#FCEEF0" stroke="#C58F7C" strokeWidth="1.8" />
          <path d="M100 145 C115 165, 85 165, 100 145 Z" fill="#F8D8DC" stroke="#C58F7C" strokeWidth="1.8" />
          {/* Aqua/Sage Botanical Leaves */}
          <path d="M140 125 C165 135, 160 160, 135 150 C130 140, 135 130, 140 125 Z" fill="#C2EAE8" stroke="#40A9A7" strokeWidth="2" />
          <path d="M60 125 C35 135, 40 160, 65 150 C70 140, 65 130, 60 125 Z" fill="#C2EAE8" stroke="#40A9A7" strokeWidth="2" />
          <path d="M100 45 C110 20, 90 20, 100 45 Z" fill="#C2EAE8" stroke="#40A9A7" strokeWidth="1.8" />
        </svg>
      </div>

      {/* 2. Delicate Rose Garden Bloom (Top Left) */}
      <div className="absolute top-24 left-6 sm:left-12 w-32 sm:w-44 h-32 sm:h-44 opacity-25 animate-float-sway-delayed">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
          <circle cx="80" cy="80" r="35" fill="#FCEEF0" stroke="#C58F7C" strokeWidth="2" />
          <circle cx="80" cy="80" r="22" fill="#F8D8DC" stroke="#C58F7C" strokeWidth="1.5" />
          <path d="M74 78 C78 72, 86 72, 88 78 C90 84, 82 87, 78 83" stroke="#B47863" strokeWidth="1.5" />
          <path d="M110 50 C125 40, 135 55, 120 70" fill="#C2EAE8" stroke="#40A9A7" strokeWidth="1.8" />
          <path d="M50 110 C35 120, 25 105, 40 90" fill="#C2EAE8" stroke="#40A9A7" strokeWidth="1.8" />
        </svg>
      </div>

      {/* 3. Floating Signature Striped Cake (Matching Brand Logo) */}
      <div className="absolute top-48 right-1/3 w-12 h-14 opacity-35 animate-float-slow hidden xl:block">
        <svg viewBox="0 0 60 70" fill="none" className="w-full h-full">
          <path d="M22 62h16v3H22v-3z" fill="#292A25" />
          <path d="M28 45h4v17h-4V45z" fill="#292A25" />
          <path d="M16 43h28v3a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-3z" fill="#292A25" />
          <rect x="18" y="20" width="24" height="24" rx="2" fill="#FFFFFF" stroke="#292A25" strokeWidth="1.2" />
          <rect x="18" y="26" width="24" height="5" fill="#292A25" />
          <rect x="18" y="35" width="24" height="5" fill="#292A25" />
          <circle cx="30" cy="17" r="4" fill="#F8D8DC" stroke="#C58F7C" strokeWidth="1" />
          <circle cx="34" cy="19" r="3" fill="#FCEEF0" stroke="#C58F7C" strokeWidth="0.8" />
        </svg>
      </div>

      {/* 4. Large Watercolor Rose Cluster (Bottom Left) */}
      <div className="absolute bottom-6 left-8 w-40 sm:w-56 h-40 sm:h-56 opacity-25 animate-float-sway hidden md:block">
        <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
          <circle cx="90" cy="90" r="40" fill="#FCEEF0" stroke="#C58F7C" strokeWidth="2.2" />
          <circle cx="90" cy="90" r="26" fill="#F8D8DC" stroke="#B47863" strokeWidth="1.8" />
          <circle cx="90" cy="90" r="14" fill="#FCEEF0" stroke="#965E4C" strokeWidth="1.5" />
          <path d="M125 65 Q145 75 140 100 Q120 105 115 85 Z" fill="#C2EAE8" stroke="#40A9A7" strokeWidth="1.8" />
          <path d="M55 115 Q35 105 40 80 Q60 75 65 95 Z" fill="#C2EAE8" stroke="#40A9A7" strokeWidth="1.8" />
        </svg>
      </div>

      {/* 5. Rose Petals drifting */}
      <div className="absolute top-1/3 left-1/4 w-8 h-8 opacity-45 animate-float-slow hidden sm:block">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-rosegold-400">
          <path
            d="M10 20 C10 10, 25 5, 30 15 C35 25, 25 35, 15 30 C8 28, 10 24, 10 20 Z"
            fill="#FCEEF0"
            stroke="#C58F7C"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-1/6 w-7 h-7 opacity-40 animate-float-sway-delayed hidden sm:block">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-rosegold-400">
          <path
            d="M15 10 C25 8, 32 16, 28 26 C24 34, 12 30, 10 22 C8 16, 12 11, 15 10 Z"
            fill="#F8D8DC"
            stroke="#C58F7C"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* 6. Twinkling Rose-Gold Sparkles */}
      <div className="absolute top-20 left-1/3 text-rosegold-400 opacity-60 animate-twinkle">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5z" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 right-1/4 text-aqua-400 opacity-55 animate-twinkle-delayed">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5z" />
        </svg>
      </div>

      <div className="absolute top-3/4 left-1/5 text-rosegold-400 opacity-50 animate-twinkle">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5z" />
        </svg>
      </div>
    </div>
  );
};
