import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const SitePreloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1.2s active, then 0.5s fade out
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FAFDFC] via-[#F0FAF9] to-[#FAFDFC] transition-all duration-500 ease-out ${
        fading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      aria-label="Loading The Austin Cakery"
    >
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-aqua-200/50 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-60 h-60 rounded-full bg-rosegold-200/40 blur-2xl pointer-events-none" />

      {/* Center Logo Showcase with Rotating Ring */}
      <div className="relative mb-6">
        {/* Animated Dashed Ring */}
        <div className="absolute -inset-3 rounded-full border-2 border-dashed border-rosegold-400 animate-spin [animation-duration:12s] opacity-80" />
        
        {/* Glowing Inner Halo */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-aqua-400 via-rosegold-300 to-rosegold-500 shadow-elevated">
          <img
            src="/images/the-austin-cakery-logo.png"
            alt="The Austin Cakery"
            className="w-full h-full object-cover rounded-full bg-white animate-pulse [animation-duration:2s]"
          />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="text-center space-y-2 z-10">
        <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase text-espresso-900 font-medium">
          The Austin Cakery
        </h1>
        <p className="text-[11px] uppercase tracking-[0.28em] text-aqua-800 font-light flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-rosegold-500 animate-spin [animation-duration:4s]" />
          <span>Austin &bull; Leander, Texas</span>
          <Sparkles className="w-3 h-3 text-rosegold-500 animate-spin [animation-duration:4s]" />
        </p>
        <p className="font-serif italic text-xs text-rosegold-700 font-light mt-1">
          “A little art, a lot of heart.”
        </p>
      </div>

      {/* Minimal Progress Bar */}
      <div className="w-36 h-1 bg-aqua-100 rounded-full overflow-hidden mt-6 z-10 shadow-xs">
        <div className="h-full bg-gradient-to-r from-aqua-500 via-rosegold-400 to-rosegold-500 animate-[pulse_1s_infinite] w-full" />
      </div>
    </div>
  );
};
