import React from 'react';
import { ExternalLink, Sparkles, BookOpen } from 'lucide-react';
import { verifiedFeatures, brandDetails } from '../data/featuresData';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-aqua-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In The Spotlight</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-900 font-normal">
              Press &amp; <span className="italic text-rosegold-600">verified features.</span>
            </h2>
            <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
              Read verified interviews exploring the creative roots, edible art philosophy, and community stories behind The Austin Cakery.
            </p>
          </div>

          <a
            href={brandDetails.linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] px-4 py-2 border border-aqua-300 text-aqua-900 hover:border-rosegold-500 hover:text-rosegold-700 rounded-sm transition-colors self-start md:self-auto font-medium"
          >
            <span>Explore All On Linktree</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Verified Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {verifiedFeatures.map((article, index) => (
            <div
              key={index}
              className="group bg-[#FAFDFC] p-6 sm:p-7 rounded-sm border border-aqua-100 hover:border-rosegold-300 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs tracking-wider uppercase">
                  <span className="font-serif italic text-base text-rosegold-600 font-semibold">
                    {article.publication}
                  </span>
                  <span className="text-[10px] text-aqua-800 font-medium">
                    {article.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-espresso-900 leading-snug group-hover:text-rosegold-600 transition-colors">
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
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] text-rosegold-600 hover:text-rosegold-700 font-semibold transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Interview</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
