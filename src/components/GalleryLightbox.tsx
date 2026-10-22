import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import type { CakeGalleryItem } from '../types';
import { brandDetails } from '../data/featuresData';

interface GalleryLightboxProps {
  items: CakeGalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && items.length > 0;
  const currentItem = isOpen && currentIndex !== null ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem || currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/90 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Top Header bar */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between text-white z-20">
        <div className="flex items-center space-x-3 text-xs tracking-[0.2em] uppercase font-light">
          <span className="text-aqua-300 font-semibold">{currentItem.category}</span>
          <span className="text-white/40">&bull;</span>
          <span>
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 -mr-2 text-white hover:text-rosegold-400 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-rosegold-400 cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 text-white hover:text-rosegold-400 bg-black/40 hover:bg-black/70 rounded-full transition-all focus:outline-none z-20 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 text-white hover:text-rosegold-400 bg-black/40 hover:bg-black/70 rounded-full transition-all focus:outline-none z-20 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal Container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row items-center bg-white rounded-sm overflow-hidden shadow-modal border border-aqua-200 my-auto">
        {/* Left: Image Canvas */}
        <div className="w-full md:w-3/5 bg-[#F0FAF9] flex items-center justify-center p-3 sm:p-4 max-h-[48vh] md:max-h-[78vh]">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            className="max-h-[44vh] md:max-h-[72vh] w-auto max-w-full object-contain rounded shadow-soft"
          />
        </div>

        {/* Right: Narrative & Action */}
        <div className="w-full md:w-2/5 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-[38vh] md:max-h-[78vh] text-left">
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              {currentItem.isRealClientWork ? (
                <span className="inline-flex items-center gap-1 bg-rosegold-500 text-white px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded">
                  <CheckCircle2 className="w-3 h-3 text-rosegold-200" />
                  <span>Real Studio Work</span>
                </span>
              ) : null}
              <span className="text-[10px] uppercase tracking-[0.2em] text-aqua-700 font-semibold">
                {currentItem.category}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-espresso-900 leading-tight">
              {currentItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-espresso-700 font-light leading-relaxed">
              {currentItem.conceptNote}
            </p>

            <div className="p-3 bg-aqua-50/70 rounded border border-aqua-200/80 text-[11px] text-aqua-900 font-light">
              <span className="font-medium text-aqua-950">Handcrafted in Austin &bull; Leander:</span> Custom scaled for your celebration date, flavor desires, and guest count.
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-aqua-100 space-y-2.5">
            <Link
              to={`/inquire?style=${encodeURIComponent(currentItem.title)}`}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.18em] font-medium rounded-sm transition-all shadow-soft"
            >
              <span>Inquire About This Style</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>

            <a
              href={brandDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-3 py-2 border border-aqua-300 text-aqua-800 hover:bg-aqua-50 text-[11px] uppercase tracking-wider font-medium rounded-sm transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 mr-1.5 text-rosegold-500" />
              <span>DM on Instagram @theaustincakery</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
