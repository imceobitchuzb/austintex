import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Sparkles, MapPin, ShoppingBag, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { useCart } from '../context/CartContext';
import { brandDetails } from '../data/featuresData';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();
  const prevKeyRef = useRef(location.key);

  // Close when user navigates to a new route
  useEffect(() => {
    if (prevKeyRef.current !== location.key) {
      prevKeyRef.current = location.key;
      onClose();
    }
  }, [location.key, onClose]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { num: '01', label: 'Home', path: '/', subtitle: 'Welcome to the custom studio' },
    { num: '02', label: 'The Gallery', path: '/gallery', subtitle: 'Browse real cakes & select sizes' },
    { num: '03', label: 'Weddings & Celebrations', path: '/weddings-celebrations', subtitle: 'Milestone tiered artistry' },
    { num: '04', label: 'Our Story', path: '/story', subtitle: 'Niloufer Y. Khatri & press features' },
    { num: '05', label: 'FAQ', path: '/faq', subtitle: 'Ordering guidance & studio policies' },
    { num: '06', label: 'Custom Inquiry', path: '/inquire', subtitle: 'Reserve your celebration date' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex justify-end animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Darkened Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-espresso-950/70 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-modal border-l border-aqua-200 flex flex-col justify-between overflow-y-auto z-10 text-left animate-slide-in-right">
        
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-aqua-100 flex items-center justify-between bg-[#F0FAF9] sticky top-0 z-10">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center space-x-2.5 text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-aqua-400 to-rosegold-400 shadow-soft flex-shrink-0">
              <img
                src="/images/the-austin-cakery-logo.png"
                alt="The Austin Cakery"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <div>
              <span className="font-serif text-base tracking-[0.16em] uppercase text-espresso-900 font-medium block leading-none">
                The Austin Cakery
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-aqua-800 font-light mt-0.5 block">
                Austin &amp; Leander, TX
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-espresso-900 hover:text-rosegold-600 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-rosegold-400 cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Cart Banner in Mobile Menu */}
        <div className="p-3.5 bg-aqua-50/70 border-b border-aqua-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4 text-rosegold-600" />
            <span className="text-xs font-semibold text-espresso-900">
              Cake Cart ({totalItems} items)
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              setIsCartOpen(true);
            }}
            className="text-[11px] uppercase tracking-wider font-semibold text-rosegold-700 hover:text-rosegold-800 inline-flex items-center space-x-1"
          >
            <span>View Cart</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Navigation Items List */}
        <div className="px-5 py-4 flex-1 space-y-2.5">
          <div className="text-[10px] uppercase tracking-[0.22em] text-rosegold-600 font-semibold mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-rosegold-500" /> Navigation
          </div>

          <nav className="space-y-1.5">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`group block p-3 rounded border transition-all duration-200 ${
                    isActive
                      ? 'bg-aqua-50/90 border-rosegold-400 shadow-soft ring-1 ring-rosegold-300'
                      : 'bg-[#FAFDFC] border-aqua-100 hover:bg-white hover:border-aqua-200'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-2.5">
                      <span className="text-xs font-serif text-rosegold-500 font-semibold italic">
                        {item.num}
                      </span>
                      <span
                        className={`font-serif text-lg tracking-wide transition-colors ${
                          isActive
                            ? 'text-rosegold-700 font-semibold'
                            : 'text-espresso-900 group-hover:text-rosegold-600'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {isActive && (
                      <span className="text-[9px] uppercase tracking-widest text-rosegold-600 font-semibold bg-rosegold-50 px-2 py-0.5 rounded border border-rosegold-200">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-espresso-600 mt-0.5 font-light tracking-wide pl-5">
                    {item.subtitle}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Actions: Inquiry + WhatsApp + Instagram */}
        <div className="p-5 border-t border-aqua-100 bg-[#F0FAF9] space-y-3">
          <Link
            to="/inquire"
            onClick={onClose}
            className="w-full flex items-center justify-center py-3.5 px-5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded shadow-soft transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-rosegold-200" />
            <span>Start Custom Cake Inquiry</span>
          </Link>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={brandDetails.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 py-2 px-2.5 border border-aqua-200 bg-white hover:bg-aqua-50 text-aqua-900 text-xs tracking-wider uppercase rounded transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-aqua-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={brandDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 py-2 px-2.5 border border-rosegold-200 bg-white hover:bg-rosegold-50 text-rosegold-800 text-xs tracking-wider uppercase rounded transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-rosegold-500" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-[10px] text-aqua-800 tracking-wider uppercase pt-0.5 font-medium">
            <MapPin className="w-3 h-3 text-rosegold-500" />
            <span>Serving Austin &amp; Leander, Texas</span>
          </div>
        </div>

      </div>
    </div>
  );
};
