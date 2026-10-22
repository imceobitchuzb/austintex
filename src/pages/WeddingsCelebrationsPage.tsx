import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, CheckCircle } from 'lucide-react';
import { ProcessSection } from '../components/ProcessSection';
import { SEOHead } from '../components/SEOHead';

export const WeddingsCelebrationsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFDFC]">
      <SEOHead
        title="Weddings & Celebrations — Custom Cake Studio"
        description="Fine-art bespoke wedding cakes and milestone celebration designs in Austin and Leander, Texas. Handcrafted sculptural artistry and heartfelt collaboration."
      />

      {/* Hero Header */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-aqua-100 bg-gradient-to-b from-[#F0FAF9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Milestone Occasions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso-900 font-normal">
            Weddings &amp; <span className="italic text-rosegold-600">Celebrations</span>
          </h1>

          <p className="text-sm sm:text-base text-espresso-700 font-light max-w-2xl mx-auto leading-relaxed">
            Elevating your most meaningful gatherings with bespoke cake architecture, sculptural textures, and authentic handcrafted detail across Austin, Leander, and the Texas Hill Country.
          </p>

          <div className="pt-2">
            <Link
              to="/inquire?event=Wedding"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
            >
              <span>Tell Us About Your Event</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full-Width Editorial Hero Image */}
      <section className="w-full relative overflow-hidden bg-espresso-950">
        <div className="aspect-[16/9] md:aspect-[21/9] max-h-[500px] w-full relative">
          <img
            src="/images/wedding-tiered.jpg"
            alt="Tiered wedding cake styled in natural daylight with organic botanicals"
            className="w-full h-full object-cover object-center opacity-90"
            width="1920"
            height="820"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 max-w-xl text-white">
            <span className="text-[10px] uppercase tracking-[0.25em] text-aqua-300 font-semibold block mb-1">
              Bespoke Bridal Tier
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal">
              Fine-art tiered wedding cake in natural daylight.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Wedding Inspiration */}
      <section className="py-14 sm:py-20 border-b border-aqua-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white p-2 border border-aqua-200 shadow-soft">
                  <img
                    src="/images/hero-cake-alt.jpg"
                    alt="Tiered wedding cake styled with organic pampas grass"
                    className="w-full h-full object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] text-center uppercase tracking-widest text-espresso-600 font-light">
                  Hill Country Neutrals
                </p>
              </div>

              <div className="space-y-3 pt-6">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white p-2 border border-aqua-200 shadow-soft">
                  <img
                    src="/images/minimalist-white.jpg"
                    alt="Minimalist architectural white wedding cake"
                    className="w-full h-full object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] text-center uppercase tracking-widest text-espresso-600 font-light">
                  Architectural Simplicity
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 lg:pl-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Wedding Cake Inspiration</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 font-normal leading-tight">
                Designed to complement your <span className="italic text-rosegold-600">entire celebration.</span>
              </h2>

              <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
                A wedding cake is an integral visual element of your reception styling. We take cues from your stationery font choices, bouquet textures, linens, and venue geometry to craft a centerpiece that belongs harmoniously in your space.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-espresso-800 font-light">
                  <CheckCircle className="w-4 h-4 text-rosegold-500 flex-shrink-0 mt-0.5" />
                  <span>Tier proportions customized to your venue scale and guest count.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-espresso-800 font-light">
                  <CheckCircle className="w-4 h-4 text-rosegold-500 flex-shrink-0 mt-0.5" />
                  <span>Artisanal texturing: stucco, deckled edges, and hand-painted metallic touches.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-espresso-800 font-light">
                  <CheckCircle className="w-4 h-4 text-rosegold-500 flex-shrink-0 mt-0.5" />
                  <span>Fresh and pressed floral placements tailored to your florist’s palette.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/inquire?event=Wedding"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] px-5 py-2.5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white rounded-sm hover:from-rosegold-600 hover:to-rosegold-700 transition-colors font-medium shadow-soft"
                >
                  <span>Inquire for Weddings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Celebration Cake Inspiration with Real Studio Works */}
      <section className="py-14 sm:py-20 bg-[#F0FAF9]/60 border-b border-aqua-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5 lg:pr-6 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Celebration Cake Artistry</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 font-normal leading-tight">
                Every milestone deserves <span className="italic text-rosegold-600">heartfelt artistry.</span>
              </h2>

              <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
                From landmark birthdays and kindergarten graduations to golden anniversaries and intimate dinner parties, our celebration cakes infuse custom themes with sculpted beauty.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-espresso-800 font-light">
                  <CheckCircle className="w-4 h-4 text-rosegold-500 flex-shrink-0 mt-0.5" />
                  <span>Custom 3D sculpted fondant elements, apples, crayons, and plaques.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-espresso-800 font-light">
                  <CheckCircle className="w-4 h-4 text-rosegold-500 flex-shrink-0 mt-0.5" />
                  <span>Intricate calligraphy, gold leaf gilding, and custom toppers.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-espresso-800 font-light">
                  <CheckCircle className="w-4 h-4 text-rosegold-500 flex-shrink-0 mt-0.5" />
                  <span>Single-tier and two-tier centerpieces for intimate Austin gatherings.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/inquire?event=Celebration"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] px-5 py-2.5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white rounded-sm hover:from-rosegold-600 hover:to-rosegold-700 transition-colors font-medium shadow-soft"
                >
                  <span>Inquire for Celebrations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="space-y-3">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white p-2 border border-aqua-200 shadow-soft">
                  <img
                    src="/images/real-work-kindergarten-1.jpg"
                    alt="Kindergarten milestone celebration cake"
                    className="w-full h-full object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] text-center uppercase tracking-widest text-rosegold-700 font-medium">
                  Kindergarten 3D Sculpted
                </p>
              </div>

              <div className="space-y-3 pt-6">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white p-2 border border-aqua-200 shadow-soft">
                  <img
                    src="/images/real-work-rumi-1.jpg"
                    alt="Rumi Persian calligraphy and gold leaf cake"
                    className="w-full h-full object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] text-center uppercase tracking-widest text-rosegold-700 font-medium">
                  Gold Calligraphy &amp; Topper
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Final Action CTA */}
      <section className="py-14 sm:py-20 text-center bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 font-normal">
            Ready to share your celebration date?
          </h2>
          <p className="text-sm text-espresso-700 font-light max-w-lg mx-auto leading-relaxed">
            Submit your celebration date, guest count, and design vision. We look forward to connecting with you.
          </p>
          <div className="pt-2">
            <Link
              to="/inquire"
              className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
            >
              <span>Tell Us About Your Event</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
