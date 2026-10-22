import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Camera } from 'lucide-react';
import { CakeGallery } from '../components/CakeGallery';
import { StoryHighlightsBar } from '../components/StoryHighlightsBar';
import { SEOHead } from '../components/SEOHead';
import type { CakeCategory } from '../types';

export const GalleryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as CakeCategory | null;

  return (
    <div className="w-full bg-[#FAFDFC]">
      <SEOHead
        title="The Gallery — Custom Cake Portfolio"
        description="Explore custom tiered wedding cakes, 3D celebration cakes, and cake decorating workshops handcrafted by The Austin Cakery in Austin and Leander, Texas."
      />

      {/* Header Banner */}
      <section className="pt-10 pb-10 sm:pt-14 sm:pb-12 border-b border-aqua-100 bg-gradient-to-b from-[#F0FAF9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>The Visual Studio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso-900 font-normal">
            The <span className="italic text-rosegold-600">Gallery</span>
          </h1>

          <p className="text-sm sm:text-base text-espresso-700 font-light max-w-2xl mx-auto leading-relaxed">
            Featuring actual client creations from @theaustincakery—including custom 3D sculpted graduation cakes, Rumi gold-leaf tiers, fine-art wedding cakes, and studio workshops.
          </p>
        </div>
      </section>

      {/* Story Highlights Bar */}
      <StoryHighlightsBar />

      {/* Main Gallery Grid with Filtering & Lightbox */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CakeGallery initialCategory={categoryParam || 'All'} showFilters={true} />
        </div>
      </section>

      {/* Post-Browsing Inquiry CTA */}
      <section className="py-14 sm:py-18 bg-[#F0FAF9] border-t border-aqua-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Found An Aesthetic You Love?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 font-normal">
            Ready to design your <span className="italic text-rosegold-600">custom cake?</span>
          </h2>

          <p className="text-xs sm:text-sm text-espresso-700 font-light leading-relaxed max-w-lg mx-auto">
            Every creation is individually designed to align with your celebration date, guest count, and theme. Inquire today to check studio calendar availability.
          </p>

          <div className="pt-2">
            <Link
              to="/inquire"
              className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
            >
              <span>Start Your Custom Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
