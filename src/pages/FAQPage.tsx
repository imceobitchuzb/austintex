import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { FAQAccordion } from '../components/FAQAccordion';
import { SEOHead } from '../components/SEOHead';
import { brandDetails } from '../data/featuresData';

export const FAQPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFDFC]">
      <SEOHead
        title="Frequently Asked Questions — The Austin Cakery"
        description="Helpful guidance on custom cake commissions, design inspiration, and booking inquiries for weddings and celebrations in Austin and Leander, Texas."
      />

      {/* Header Banner */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-14 border-b border-aqua-100 bg-gradient-to-b from-[#F0FAF9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Studio Guidance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso-900 font-normal">
            Frequently Asked <span className="italic text-rosegold-600">Questions</span>
          </h1>

          <p className="text-sm sm:text-base text-espresso-700 font-light max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about preparing your custom cake inquiry, sharing design inspiration, and planning your celebration centerpiece.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <section className="py-12 sm:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-aqua-800 font-semibold">
              Helpful Custom Commission Information
            </p>
          </div>

          <FAQAccordion />

          {/* Policy Distinction Notice */}
          <div className="mt-8 p-4 bg-aqua-50/70 border border-aqua-200 rounded text-xs text-aqua-950 leading-relaxed max-w-3xl mx-auto text-left font-light space-y-1">
            <div className="font-semibold text-aqua-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rosegold-500" />
              <span>Studio Policy Transparency Notice</span>
            </div>
            <p>
              Because every cake is unique and handcrafted to order in our home-based Austin studio, all specifics regarding availability dates, custom pricing, delivery or pickup coordination, and dietary accommodations are confirmed directly with the baker upon reviewing your inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-12 sm:py-16 bg-[#F0FAF9] border-t border-aqua-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 font-normal">
            Still have a question about your event?
          </h2>
          <p className="text-xs sm:text-sm text-espresso-700 font-light max-w-xl mx-auto leading-relaxed">
            We are always happy to chat about your ideas. Send us an inquiry or reach out via Instagram.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/inquire"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
            >
              <span>Submit An Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>

            <a
              href={brandDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-rosegold-300 hover:bg-rosegold-50 text-rosegold-800 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
            >
              <InstagramIcon className="w-4 h-4 mr-1.5 text-rosegold-500" />
              <span>DM on Instagram</span>
            </a>

            <a
              href={brandDetails.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-aqua-300 hover:bg-aqua-50 text-aqua-800 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 mr-1.5 text-aqua-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
