import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const OccasionSection: React.FC = () => {
  const occasions = [
    {
      title: 'Weddings & Receptions',
      subtitle: 'Multi-tier sculptural centerpieces',
      description:
        'Designed in conversation with your florals, color palette, and Texas venue architecture across Austin and the Hill Country.',
      image: '/images/wedding-tiered.jpg',
      aspect: 'aspect-[3/4]',
      badge: 'Inquiry Category',
      link: '/weddings-celebrations',
    },
    {
      title: 'Milestone Celebrations',
      subtitle: 'Vintage piping & celebration tiers',
      description:
        'From romantic vintage Lambeth piping to custom floral cakes that celebrate life’s most meaningful personal moments.',
      image: '/images/celebration-floral.jpg',
      aspect: 'aspect-[3/4]',
      badge: 'Inquiry Category',
      link: '/gallery?category=Celebrations',
    },
    {
      title: 'Artistic Details & Florals',
      subtitle: 'Botanicals & palette knife textures',
      description:
        'Pressed edible blossoms, sculptural buttercream textures, and organic garden styling that turn every cake into an edible canvas.',
      image: '/images/botanical-delight.jpg',
      aspect: 'aspect-[3/4]',
      badge: 'Bespoke Art',
      link: '/gallery?category=Floral',
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-aqua-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-rosegold-500" />
            <span>Curated For Your Occasion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-900 font-normal">
            Bespoke artistry for <span className="italic text-rosegold-600">meaningful events.</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
            Every custom creation begins with your story. Inquiries are accepted on a limited basis to ensure uninterrupted focus on design and handcrafted quality.
          </p>
        </div>

        {/* 3 Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {occasions.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-3.5 rounded-sm border border-aqua-100 hover:border-rosegold-300 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className={`relative ${item.aspect} overflow-hidden bg-aqua-50/50 rounded-sm mb-4`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width="600"
                    height="800"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs border border-aqua-200/80 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-rosegold-700 font-semibold rounded-sm">
                    {item.badge}
                  </div>
                </div>

                {/* Typography */}
                <span className="text-[10px] uppercase tracking-[0.2em] text-aqua-700 font-semibold block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-espresso-900 group-hover:text-rosegold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-espresso-600 font-light mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-3 border-t border-aqua-100">
                <Link
                  to={item.link}
                  className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-espresso-900 group-hover:text-rosegold-600 font-medium transition-colors"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note below categories */}
        <div className="mt-10 text-center text-xs text-espresso-600 font-light">
          Serving Austin, Leander, and surrounding Hill Country venues &bull; All designs are custom and subject to studio date availability.
        </div>
      </div>
    </section>
  );
};
