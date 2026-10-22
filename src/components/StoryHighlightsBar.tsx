import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { storyHighlights } from '../data/galleryData';

export const StoryHighlightsBar: React.FC = () => {
  return (
    <div className="w-full py-6 px-4 bg-gradient-to-b from-white via-aqua-50/30 to-white border-b border-aqua-100/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-aqua-800 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-rosegold-500" />
            <span>Studio Collections &bull; As Featured on Instagram</span>
          </div>
          <span className="text-[10px] text-espresso-600 font-light hidden sm:inline">
            Direct from @theaustincakery
          </span>
        </div>

        {/* Scrollable Story Bubbles */}
        <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto pb-2 scrollbar-none">
          {storyHighlights.map((highlight, index) => (
            <Link
              key={index}
              to={highlight.link}
              className="group flex flex-col items-center space-y-1.5 flex-shrink-0 focus:outline-none"
            >
              {/* Circular Highlight Ring with Rose Gold & Aqua Gradient */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-aqua-400 via-rosegold-400 to-rosegold-500 shadow-soft group-hover:scale-105 group-hover:shadow-rosegold transition-all duration-300">
                <div className="w-full h-full rounded-full p-0.5 bg-white overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <span className="text-[11px] sm:text-xs font-serif text-espresso-900 group-hover:text-rosegold-600 transition-colors font-medium">
                {highlight.title}
              </span>
            </Link>
          ))}

          {/* Real Works Badge Bubble */}
          <Link
            to="/gallery"
            className="group flex flex-col items-center space-y-1.5 flex-shrink-0 focus:outline-none"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-rosegold-400 via-aqua-400 to-rosegold-500 shadow-soft group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full rounded-full p-0.5 bg-white overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-aqua-50 to-rosegold-50">
                <span className="text-[9px] uppercase tracking-widest text-rosegold-600 font-bold leading-none">
                  2026
                </span>
                <span className="text-[8px] uppercase tracking-wider text-aqua-800 font-light mt-0.5">
                  Portfolio
                </span>
              </div>
            </div>
            <span className="text-[11px] sm:text-xs font-serif text-espresso-900 group-hover:text-rosegold-600 transition-colors font-medium">
              All Creations
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
