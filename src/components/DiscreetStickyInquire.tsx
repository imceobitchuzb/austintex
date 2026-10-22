import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export const DiscreetStickyInquire: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/inquire') {
        setIsVisible(false);
      } else {
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  if (!isVisible || location.pathname === '/inquire') return null;

  return (
    <div className="fixed bottom-5 right-5 z-30 sm:hidden animate-fadeIn">
      <Link
        to="/inquire"
        className="flex items-center space-x-1.5 px-3.5 py-2 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white border border-rosegold-300 rounded-full shadow-elevated text-[10px] uppercase tracking-widest font-semibold active:scale-95 transition-all"
        aria-label="Inquire for your date"
      >
        <Sparkles className="w-3 h-3 text-rosegold-200 animate-pulse" />
        <span>Inquire for Date</span>
      </Link>
    </div>
  );
};
