import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, Heart } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { AnimatedFloralBackdrop } from './AnimatedFloralBackdrop';
import { brandDetails } from '../data/featuresData';

export const EditorialHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-aqua-100 bg-gradient-to-b from-[#F0FAF9] via-[#FAFDFC] to-white">
      {/* Floating Animated Floral & Sparkle Backdrop */}
      <AnimatedFloralBackdrop />

      {/* Subtle Watercolor Splash Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-aqua-100/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-rosegold-100/40 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Narrative & Brand Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 lg:pr-6">
            
            {/* Top Category Tag with Official Logo Badge */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-rosegold-500" />
              <div className="inline-flex items-center gap-1.5 bg-white border border-rosegold-200 px-3 py-1 rounded-full shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-rosegold-500" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-rosegold-700 font-semibold">
                  A Little Art, A Lot of Heart
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-aqua-800 font-light hidden sm:inline">
                &bull; Austin &bull; Leander
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-5xl lg:text-[3.85rem] text-espresso-900 leading-[1.1] tracking-tight font-normal">
              Cakes made to be{' '}
              <span className="italic font-light text-rosegold-600">remembered.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-espresso-800 font-light leading-relaxed max-w-xl">
              From romantic tiered wedding cakes and bespoke celebration centerpieces to fine-art floral details, every creation is handcrafted with love, precision, and heartfelt artistry in Austin &amp; Leander, Texas.
            </p>

            {/* Quick Profile Stats Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-espresso-800 font-light">
              <span className="inline-flex items-center gap-1.5 bg-white border border-aqua-200 px-3 py-1.5 rounded-full shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-rosegold-500" /> Serving Austin &amp; Leander
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-aqua-200 px-3 py-1.5 rounded-full shadow-xs">
                <InstagramIcon className="w-3.5 h-3.5 text-aqua-600" /> 16.8K+ Community
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-aqua-200 px-3 py-1.5 rounded-full shadow-xs">
                <Heart className="w-3.5 h-3.5 text-rosegold-500" /> 1,300+ Creations
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <Link
                to="/inquire"
                className="group inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft hover:shadow-rosegold transition-all duration-200 active:scale-[0.98]"
              >
                <span>Let’s Create Your Cake</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-aqua-400 bg-white hover:bg-aqua-50 text-aqua-900 text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors duration-200"
              >
                Explore the Gallery
              </Link>
            </div>

            {/* Social Verification Footer Line */}
            <div className="pt-3 border-t border-aqua-100 flex items-center justify-between text-xs text-espresso-600 font-light">
              <span>Publicly featured in Canvas Rebel &amp; Voyage Austin</span>
              <a
                href={brandDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rosegold-600 hover:underline inline-flex items-center gap-1 font-medium"
              >
                DM on Instagram &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Visual Composition with High-Res Photography & Logo (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Background Rose Gold Wireframe Accent */}
            <div className="absolute -top-3 -right-3 -bottom-3 -left-3 border border-rosegold-300/70 rounded-sm pointer-events-none -z-10 hidden sm:block" />

            <div className="relative bg-white p-3 sm:p-4 rounded-sm shadow-elevated border border-aqua-200/80 overflow-hidden">
              {/* Primary High-Resolution Editorial Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-aqua-50/50 rounded-sm">
                <img
                  src="/images/hero-cake.jpg"
                  alt="Fine-art bespoke tiered wedding cake handcrafted by The Austin Cakery concept"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  width="600"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/75 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Card Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-aqua-200 font-semibold block mb-0.5">
                    Studio Showcase &bull; @theaustincakery
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-normal leading-tight">
                    Textural Buttercream &amp; Dried Florals
                  </p>
                  <p className="text-[10px] text-white/80 font-light mt-0.5">
                    Austin &amp; Leander, Texas
                  </p>
                </div>
              </div>

              {/* Floating Real Logo Badge in Upper-Left Corner */}
              <div className="absolute top-6 -left-3 sm:-left-4 bg-white border border-rosegold-300 p-1.5 rounded-full shadow-elevated flex items-center space-x-2 pr-3.5 transform -rotate-2">
                <img
                  src="/images/the-austin-cakery-logo.png"
                  alt="Logo Badge"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="text-left">
                  <span className="text-[8px] uppercase tracking-widest text-rosegold-600 font-bold block leading-none">
                    Original
                  </span>
                  <span className="font-serif text-xs text-espresso-900 font-medium leading-none">
                    The Austin Cakery
                  </span>
                </div>
              </div>
            </div>

            {/* Second Inset Card: High-Res Frosting Detail */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-36 sm:w-44 bg-white p-2 rounded shadow-elevated border border-aqua-200">
              <div className="aspect-square overflow-hidden bg-aqua-50 rounded">
                <img
                  src="/images/frosting-detail.jpg"
                  alt="Close-up detail of artisanal frosting texture"
                  className="w-full h-full object-cover"
                  width="180"
                  height="180"
                  loading="lazy"
                />
              </div>
              <p className="text-[9px] text-center text-espresso-700 tracking-wider uppercase mt-1.5 font-medium">
                Piped Texture Detail
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
