import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Home } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full py-20 sm:py-32 text-center bg-[#FAFDFC]">
      <SEOHead
        title="Page Not Found — The Austin Cakery"
        description="The requested page could not be found. Return to The Austin Cakery home."
      />

      <div className="max-w-md mx-auto px-4 sm:px-6 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl text-espresso-900 font-normal">
          404
        </h1>

        <div className="h-0.5 w-12 bg-gradient-to-r from-aqua-400 to-rosegold-400 mx-auto rounded-full" />

        <p className="text-sm text-espresso-700 font-light leading-relaxed">
          The page you are looking for has been moved or does not exist. Let us guide you back to our studio gallery.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white text-xs uppercase tracking-[0.18em] font-medium rounded-sm shadow-soft transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-aqua-300 text-aqua-900 hover:bg-aqua-50 text-xs uppercase tracking-[0.18em] font-medium rounded-sm transition-colors"
          >
            <span>Explore The Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
