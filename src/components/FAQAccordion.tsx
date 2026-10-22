import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';
import type { FAQItem } from '../types';
import { faqItems } from '../data/faqData';

interface FAQAccordionProps {
  items?: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items = faqItems }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full space-y-3.5 max-w-3xl mx-auto text-left">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`border rounded-sm transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-rosegold-300 shadow-soft'
                : 'bg-[#FAFDFC] border-aqua-100 hover:border-aqua-200'
            }`}
          >
            {/* Accordion Trigger Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold-500 cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <div className="flex items-center space-x-3 pr-4">
                <HelpCircle className="w-4 h-4 text-rosegold-500 flex-shrink-0" />
                <span className="font-serif text-lg text-espresso-900 font-medium">
                  {item.question}
                </span>
              </div>

              <div
                className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${
                  isOpen ? 'bg-rosegold-500 text-white' : 'bg-aqua-100/70 text-aqua-800'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {/* Accordion Body Content */}
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-5 pb-5 pt-0 text-espresso-800 text-xs sm:text-sm font-light leading-relaxed border-t border-aqua-100/80 space-y-2.5 animate-fadeIn"
              >
                <p className="pt-2">{item.answer}</p>
                {item.note && (
                  <div className="p-2.5 bg-aqua-50/80 rounded border border-aqua-200 text-[11px] text-aqua-950 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-rosegold-500 flex-shrink-0 mt-0.5" />
                    <span>{item.note}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
