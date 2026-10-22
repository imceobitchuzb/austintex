import React from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageSquare, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Send,
      title: 'Share Your Vision',
      description:
        'Submit your inquiry with target date, serving count, preferred color palette, theme, or inspiration moodboard.',
      detail: 'Austin & Leander events',
    },
    {
      number: '02',
      icon: MessageSquare,
      title: 'Discuss Your Event',
      description:
        'We review your aesthetic goals, tier architecture, flavor options, and custom design nuances directly with you.',
      detail: 'Personalized consultation',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Confirm Directly',
      description:
        'Finalize custom design specifications, logistics, and date reservation directly with the baker for your celebration.',
      detail: 'Secured booking',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F0FAF9] via-white to-[#F0FAF9] border-b border-aqua-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Custom Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-900 font-normal">
            Your vision, <span className="italic text-rosegold-600">beautifully made.</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
            Collaborating on a bespoke cake should be as joyful as the celebration itself. Here is how we bring your centerpiece to life.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-px bg-aqua-200 -z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-7 rounded-sm border border-aqua-100 hover:border-rosegold-300 shadow-soft flex flex-col justify-between z-10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl text-rosegold-500 font-light italic">
                      {step.number}
                    </span>
                    <div className="p-2.5 bg-aqua-100/70 rounded-full text-aqua-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-espresso-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-espresso-700 font-light leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-aqua-100 text-[10px] uppercase tracking-wider text-aqua-800 font-semibold">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 max-w-xl mx-auto text-center space-y-3.5">
          <p className="text-xs text-espresso-600 font-light">
            Have a target date in mind? Central Texas celebration dates book in advance.
          </p>
          <Link
            to="/inquire"
            className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
          >
            <span>Tell Us About Your Event</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
};
