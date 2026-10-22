import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ExternalLink, BookOpen, MapPin, ArrowRight, Award } from 'lucide-react';
import { verifiedFeatures, brandDetails } from '../data/featuresData';
import { SEOHead } from '../components/SEOHead';

export const OurStoryPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFDFC]">
      <SEOHead
        title="Our Story & Press Features — The Austin Cakery"
        description="The story of The Austin Cakery, a home-based custom cake studio in Austin, Texas, serving Austin and Leander. Featuring interviews in Canvas Rebel, Voyage Austin, and Voyage Houston."
      />

      {/* Header Banner */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-aqua-100 bg-gradient-to-b from-[#F0FAF9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Behind The Studio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso-900 font-normal">
            Our <span className="italic text-rosegold-600">Story</span>
          </h1>

          <p className="text-sm sm:text-base text-espresso-700 font-light max-w-2xl mx-auto leading-relaxed">
            A home-based custom cake studio in Austin, Texas, rooted in a simple creative belief: “A little art, a lot of heart.”
          </p>
        </div>
      </section>

      {/* Story Narrative with High-Res Studio Craft Photography */}
      <section className="py-14 sm:py-20 border-b border-aqua-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Studio Craft Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-3 sm:p-4 rounded-sm border border-aqua-200 shadow-elevated">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-aqua-50/50">
                  <img
                    src="/images/studio-craft.jpg"
                    alt="Artisan cake decorator crafting delicate textures at The Austin Cakery"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="800"
                  />
                </div>
                <div className="pt-3 pb-1 text-center">
                  <p className="font-serif text-base text-espresso-900 italic font-normal">
                    “A little art, a lot of heart.”
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-aqua-700 font-medium mt-0.5">
                    Handcrafted in Austin &bull; Leander, Texas
                  </p>
                </div>
              </div>

              {/* Accent Floating Logo Emblem */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-white border border-rosegold-300 p-2 rounded-full shadow-elevated items-center space-x-2 pr-4">
                <img
                  src="/images/the-austin-cakery-logo.png"
                  alt="Official Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <span className="text-[8px] uppercase tracking-widest text-rosegold-600 font-bold block">
                    Verified
                  </span>
                  <span className="font-serif text-xs text-espresso-900 font-medium">
                    The Austin Cakery
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-7 space-y-5 lg:pl-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Heart of the Craft</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-900 font-normal leading-tight">
                Crafting meaningful centerpieces for <span className="italic text-rosegold-600">Central Texas.</span>
              </h2>

              <p className="text-sm sm:text-base text-espresso-800 font-light leading-relaxed">
                The Austin Cakery is a home-based custom cake bakery located in Austin, Texas, serving Austin, Leander, and the surrounding Texas Hill Country communities.
              </p>

              <p className="text-sm sm:text-base text-espresso-800 font-light leading-relaxed">
                Founded by edible artist <strong>Niloufer Y. Khatri</strong>, the studio approaches cake design as a harmonious balance between fine visual artistry and heartfelt celebration. Every custom tier is sculpted with deliberate attention to texture, color balance, and natural elegance.
              </p>

              <div className="p-4 bg-aqua-50/60 border border-aqua-200 rounded-sm shadow-xs space-y-2.5">
                <div className="text-xs uppercase tracking-[0.2em] text-aqua-900 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-rosegold-500" />
                  <span>Verified Studio Information</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-espresso-800 font-light">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rosegold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-espresso-900 block">Service Locations</span>
                      Austin and Leander, Texas
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-rosegold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-espresso-900 block">Studio Type</span>
                      Home-based custom cake bakery
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/inquire"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
                >
                  <span>Connect With The Studio</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href={brandDetails.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.16em] px-4 py-3 border border-aqua-300 text-aqua-900 hover:bg-aqua-50 rounded-sm transition-colors"
                >
                  <span>View Public Linktree</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-14 sm:py-20 bg-[#FAFDFC] border-b border-aqua-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Verified Public Press</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-900 font-normal">
              Featured in local &amp; regional <span className="italic text-rosegold-600">publications.</span>
            </h2>

            <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
              The Austin Cakery has been spotlighted by publications recognizing independent creators, entrepreneurs, and culinary artisans across Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {verifiedFeatures.map((article, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-sm border border-aqua-100 hover:border-rosegold-300 shadow-soft flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif italic text-lg text-rosegold-600 font-medium">
                      {article.publication}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-aqua-800 font-light">
                      {article.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-espresso-900 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-espresso-700 font-light leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-aqua-100">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.16em] text-rosegold-600 hover:text-rosegold-700 font-medium transition-colors"
                  >
                    <span>Read via Linktree</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20 text-center bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 font-normal">
            Let’s collaborate on your next celebration.
          </h2>
          <p className="text-sm text-espresso-700 font-light leading-relaxed">
            We welcome inquiries for weddings, birthdays, anniversaries, and custom gatherings in Austin &amp; Leander.
          </p>
          <div className="pt-2">
            <Link
              to="/inquire"
              className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
            >
              <span>Begin Your Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
