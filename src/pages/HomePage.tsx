import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Award, MapPin } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { StoryHighlightsBar } from '../components/StoryHighlightsBar';
import { CakeGallery } from '../components/CakeGallery';
import { OccasionSection } from '../components/OccasionSection';
import { ProcessSection } from '../components/ProcessSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { SEOHead } from '../components/SEOHead';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { brandDetails } from '../data/featuresData';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFDFC]">
      <SEOHead
        title="Custom Cake Studio Austin & Leander"
        description="Home-based custom cake bakery in Austin, Texas, serving Austin and Leander. Fine-art bespoke wedding cakes, 3D celebration cakes, and cake workshops. A little art, a lot of heart."
      />

      {/* Hero Section */}
      <EditorialHero />

      {/* Actual Instagram Story Highlights Strip */}
      <StoryHighlightsBar />

      {/* 1. Brand Philosophy Section */}
      <section className="py-16 sm:py-20 border-b border-aqua-100 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Heart className="w-3.5 h-3.5 text-rosegold-500" />
            <span>The Studio Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-900 leading-tight font-normal">
            “A little art, a lot of heart.”
          </h2>

          <div className="h-0.5 w-16 bg-gradient-to-r from-aqua-400 to-rosegold-400 mx-auto my-3 rounded-full" />

          <p className="text-base sm:text-lg text-espresso-800 font-light leading-relaxed max-w-2xl mx-auto">
            At The Austin Cakery, custom cakes are sculpted edible centerpieces. Based in Austin and serving Austin and Leander, we blend contemporary design, organic textures, and heartfelt culinary craftsmanship for life’s most cherished milestones.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-5 text-xs uppercase tracking-widest text-espresso-700 font-medium">
            <span className="flex items-center gap-1.5 text-aqua-800">
              <MapPin className="w-4 h-4 text-rosegold-500" />
              Austin &bull; Leander, Texas
            </span>
            <span className="text-aqua-300">&bull;</span>
            <span className="flex items-center gap-1.5 text-aqua-800">
              <Sparkles className="w-4 h-4 text-rosegold-500" />
              Handcrafted To Order
            </span>
            <span className="text-aqua-300">&bull;</span>
            <span className="flex items-center gap-1.5 text-aqua-800">
              <Award className="w-4 h-4 text-rosegold-500" />
              Featured in Canvas Rebel &bull; Voyage
            </span>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Gallery Preview */}
      <section className="py-16 sm:py-24 border-b border-aqua-100 bg-[#FAFDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Creations &bull; Austin &amp; Leander</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-900 font-normal">
                Edible art, <span className="italic text-rosegold-600">thoughtfully sculpted.</span>
              </h2>
              <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
                Featuring real client orders—from 3D milestone celebration cakes to fine-art wedding tiers and studio workshops.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 border border-rosegold-400 bg-white text-rosegold-700 hover:bg-rosegold-500 hover:text-white rounded-sm transition-all self-start md:self-auto font-medium shadow-xs"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* 6 Curated Preview Items */}
          <CakeGallery limit={6} showFilters={false} />
        </div>
      </section>

      {/* 3. Occasion / Category Section */}
      <OccasionSection />

      {/* 4. Process Section */}
      <ProcessSection />

      {/* 5. Press Features */}
      <FeaturesSection />

      {/* 6. High-Conversion Inquiry Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-tr from-[#163637] via-[#1D3E3F] to-[#254C4D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rosegold-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aqua-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-aqua-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-rosegold-300" />
            <span>Reserve Your Celebration Date</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white">
            Let’s design something <span className="italic text-rosegold-300">unforgettable.</span>
          </h2>

          <p className="text-sm sm:text-base text-aqua-100 font-light max-w-xl mx-auto leading-relaxed">
            Whether planning a wedding reception, landmark birthday, or bespoke event in Austin or Leander, we would love to hear your vision.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/inquire"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.22em] font-medium rounded-sm shadow-elevated transition-all"
            >
              <span>Inquire About Your Date</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href={brandDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border border-aqua-300/60 hover:border-aqua-200 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors"
            >
              <InstagramIcon className="w-4 h-4 mr-2 text-rosegold-300" />
              <span>DM on Instagram</span>
            </a>

            <a
              href={brandDetails.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border border-aqua-300/60 hover:border-aqua-200 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 text-aqua-300" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] text-aqua-200/70 font-light pt-1">
            Inquiries are reviewed individually &bull; Serving Austin &amp; Leander, TX
          </p>
        </div>
      </section>
    </div>
  );
};
