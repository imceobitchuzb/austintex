import React from 'react';
import { Sparkles, MapPin, Calendar, Heart } from 'lucide-react';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { InquiryForm } from '../components/InquiryForm';
import { SEOHead } from '../components/SEOHead';
import { brandDetails } from '../data/featuresData';

export const InquirePage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFDFC]">
      <SEOHead
        title="Custom Cake Inquiry — The Austin Cakery"
        description="Submit your custom cake inquiry for weddings, birthdays, and celebrations in Austin and Leander, Texas. Handcrafted bespoke cakes with a little art and a lot of heart."
      />

      {/* Header Banner */}
      <section className="pt-10 pb-10 sm:pt-14 sm:pb-12 border-b border-aqua-100 bg-gradient-to-b from-[#F0FAF9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso-900 font-normal">
            Custom Cake <span className="italic text-rosegold-600">Inquiry</span>
          </h1>

          <p className="text-sm sm:text-base text-espresso-700 font-light max-w-2xl mx-auto leading-relaxed">
            We are honored to be considered for your milestone day. Please share your event specifications below to begin your bespoke cake commission in Austin or Leander, Texas.
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-3 text-xs text-espresso-700 font-light">
            <span className="inline-flex items-center gap-1.5 bg-white border border-aqua-200 px-3 py-1 rounded-full shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-rosegold-500" /> Serving Austin &amp; Leander, TX
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-aqua-200 px-3 py-1 rounded-full shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-rosegold-500" /> Bookings Subject to Availability
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Inquiry Form (8 cols) */}
            <div className="lg:col-span-8">
              <InquiryForm />
            </div>

            {/* Right: Helpful Guidance & Studio Note (4 cols) */}
            <div className="lg:col-span-4 space-y-5 text-left">
              {/* Studio Info Card */}
              <div className="bg-[#F0FAF9] p-6 rounded-sm border border-aqua-200 space-y-3.5 shadow-soft">
                <div className="text-[10px] uppercase tracking-[0.25em] text-rosegold-600 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rosegold-500" />
                  <span>The Process</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-espresso-900">
                  What Happens Next?
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-espresso-700 font-light leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="font-serif italic font-medium text-rosegold-600">1.</span>
                    <span>We review your date, location, and guest count against our studio calendar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-serif italic font-medium text-rosegold-600">2.</span>
                    <span>We discuss custom themes, 3D elements, tier scaling, and flavor desires.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-serif italic font-medium text-rosegold-600">3.</span>
                    <span>Your custom order is confirmed directly with the baker.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Instagram & WhatsApp Contact Card */}
              <div className="bg-white p-6 rounded-sm border border-aqua-200 space-y-3.5 shadow-soft">
                <div className="flex items-center space-x-2 text-espresso-900">
                  <InstagramIcon className="w-5 h-5 text-rosegold-500" />
                  <h4 className="font-serif text-xl">DM or WhatsApp to Order</h4>
                </div>
                <p className="text-xs text-espresso-700 font-light leading-relaxed">
                  As featured on our profile: <span className="italic font-medium text-espresso-900">“Austin / Leander Bakery. DM to Order”</span>. You are always welcome to reach out directly with your inspiration photos!
                </p>
                <div className="pt-1 space-y-2">
                  <a
                    href={brandDetails.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2 px-3 border border-rosegold-400 text-rosegold-700 hover:bg-rosegold-50 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 mr-1.5" />
                    <span>Message @theaustincakery</span>
                  </a>

                  <a
                    href={brandDetails.linktreeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2 px-3 border border-aqua-300 text-aqua-800 hover:bg-aqua-50 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
                    <span>WhatsApp / Linktree</span>
                  </a>
                </div>
              </div>

              {/* Note */}
              <div className="p-3.5 bg-aqua-50/70 rounded border border-aqua-200 text-[11px] text-aqua-950 font-light leading-relaxed">
                <span className="font-medium text-aqua-900">Studio Location:</span> Home-based custom bakery in Austin, TX, proudly serving Austin and Leander events.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
