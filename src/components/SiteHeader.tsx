import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowUpRight, MapPin, Sparkles, ShoppingBag } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { useCart } from '../context/CartContext';
import { brandDetails } from '../data/featuresData';

interface SiteHeaderProps {
  onOpenMobileNav: () => void;
  isMobileNavOpen: boolean;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  onOpenMobileNav,
  isMobileNavOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'The Gallery', path: '/gallery' },
    { label: 'Weddings & Celebrations', path: '/weddings-celebrations' },
    { label: 'Our Story', path: '/story' },
    { label: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Thin Announcement Bar */}
      <div className="bg-[#183637] text-aqua-50 text-[10px] sm:text-[11px] py-1 px-3 sm:px-6 lg:px-6 xl:px-8 border-b border-aqua-800/40">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-aqua-200">
            <MapPin className="w-3 h-3 text-rosegold-400 flex-shrink-0" />
            <span className="font-light tracking-wider uppercase">
              Austin &amp; Leander, Texas &bull; Home-Based Custom Bakery
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <span className="italic font-serif text-rosegold-200">
              “A little art, a lot of heart.”
            </span>
            <span className="text-aqua-600">&bull;</span>
            <a
              href={brandDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-aqua-200 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-3 h-3 text-rosegold-400" />
              <span className="tracking-wider uppercase">16.8K on Instagram</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Wide, Spacious & Balanced Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-sm py-2 sm:py-2.5 border-b border-aqua-200/80'
            : 'bg-white py-2.5 sm:py-3.5 border-b border-aqua-100'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-3 sm:px-6 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo on Left: Positioned cleanly to the left, refined pixel sizing on desktop, full text without truncation */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="group flex items-center space-x-2 sm:space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold-500 rounded p-0.5 cursor-pointer flex-shrink-0 mr-2 lg:mr-5 xl:mr-8"
              aria-label="The Austin Cakery - Return to Top"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full p-0.5 bg-gradient-to-tr from-aqua-300 via-rosegold-300 to-rosegold-400 shadow-soft group-hover:scale-105 transition-transform flex-shrink-0">
                <img
                  src="/images/the-austin-cakery-logo.png"
                  alt="The Austin Cakery Official Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  width="40"
                  height="40"
                />
              </div>

              <div className="flex flex-col flex-shrink-0">
                <span className="font-serif text-[15px] sm:text-lg lg:text-[1.25rem] xl:text-[1.35rem] tracking-[0.10em] sm:tracking-[0.13em] uppercase text-espresso-900 font-medium leading-none group-hover:text-rosegold-600 transition-colors whitespace-nowrap">
                  The Austin Cakery
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] tracking-[0.16em] sm:tracking-[0.22em] uppercase text-aqua-700 font-light mt-0.5 sm:mt-1 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span>Custom Studio</span>
                  <span className="text-rosegold-400">&bull;</span>
                  <span>Austin &amp; Leander</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links: Evenly Proportioned, Spacious, Single Line */}
            <nav className="hidden lg:flex items-center justify-center flex-1 space-x-5 xl:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium transition-all py-1.5 whitespace-nowrap ${
                      active
                        ? 'text-rosegold-600 font-semibold'
                        : 'text-espresso-800 hover:text-aqua-600'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-rosegold-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Inquire Button in Nav Flow */}
              <Link
                to="/inquire"
                className={`inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-sm text-[11px] uppercase tracking-[0.2em] font-medium shadow-xs transition-all whitespace-nowrap ${
                  isActive('/inquire')
                    ? 'bg-rosegold-600 text-white shadow-soft'
                    : 'bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white hover:shadow-rosegold'
                }`}
              >
                <Sparkles className="w-3 h-3 text-rosegold-200" />
                <span>Inquire</span>
              </Link>
            </nav>

            {/* Right Action Cluster:
                - On Mobile & Tablet (< lg): Always strictly Cart + Burger, never squeezed or hidden
                - On Desktop (>= lg): Cart + WhatsApp + Instagram
            */}
            <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
              
              {/* Shopping Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border border-aqua-200 bg-white hover:bg-aqua-50 text-espresso-800 hover:text-rosegold-600 transition-all duration-200 cursor-pointer shadow-soft hover:shadow-md hover:border-rosegold-300 active:scale-95"
                aria-label={`View cake cart with ${totalItems} items`}
                title="View Cake Cart"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-rosegold-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] sm:min-w-[18px] sm:h-[18px] px-1 rounded-full bg-rosegold-600 text-white text-[8.5px] sm:text-[9.5px] font-bold flex items-center justify-center shadow-sm animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* WhatsApp direct link - ONLY visible on Desktop (>= lg) */}
              <a
                href={brandDetails.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-aqua-200 bg-aqua-50/70 hover:bg-aqua-100 text-aqua-900 text-[10px] uppercase tracking-wider transition-colors whitespace-nowrap"
                title="WhatsApp / Contact via Linktree"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-aqua-600" />
                <span className="font-medium">WhatsApp</span>
              </a>

              {/* Instagram link - ONLY visible on Desktop (>= lg) */}
              <a
                href={brandDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center space-x-1 px-3 py-1.5 rounded-full border border-rosegold-200 bg-rosegold-50/70 hover:bg-rosegold-100 text-rosegold-800 text-[10px] uppercase tracking-wider transition-colors whitespace-nowrap"
                aria-label="Instagram @theaustincakery"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-rosegold-500" />
                <span className="font-medium">@theaustincakery</span>
              </a>

              {/* Mobile & Tablet Burger Menu Trigger Button */}
              <button
                type="button"
                onClick={onOpenMobileNav}
                className="lg:hidden relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-aqua-200 bg-[#FAFDFC] hover:bg-aqua-50 text-espresso-900 hover:text-rosegold-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rosegold-400 cursor-pointer shadow-soft active:scale-95"
                aria-label={isMobileNavOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileNavOpen}
              >
                {isMobileNavOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-rosegold-600" />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 w-4 sm:w-5" aria-hidden="true">
                    <span className="block w-4 sm:w-5 h-[1.75px] sm:h-[2px] bg-espresso-900 rounded-full transition-transform" />
                    <span className="block w-3 sm:w-3.5 h-[1.75px] sm:h-[2px] bg-rosegold-600 rounded-full self-start transition-transform" />
                    <span className="block w-4 sm:w-5 h-[1.75px] sm:h-[2px] bg-espresso-900 rounded-full transition-transform" />
                  </div>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
