import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Send,
  CheckCircle,
  Copy,
  Check,
  Sparkles,
  Info,
} from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import type { InquiryFormData } from '../types';
import { brandDetails } from '../data/featuresData';
import { saveNewInquiry } from '../services/ordersStorage';

export const InquiryForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    servingsCount: '',
    stylePalette: '',
    inspirationDetails: '',
    budgetRange: '',
    dietaryRequirements: '',
    deliveryLocation: 'Austin Area',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const styleQuery = searchParams.get('style');
    const eventQuery = searchParams.get('event');

    if (styleQuery) {
      setFormData((prev) => ({
        ...prev,
        stylePalette: `Inspired by: ${styleQuery}`,
      }));
    }
    if (eventQuery) {
      setFormData((prev) => ({
        ...prev,
        eventType: eventQuery,
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event category.';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select your target event date.';
    }

    if (!formData.inspirationDetails.trim()) {
      newErrors.inspirationDetails =
        'Please describe your vision, theme, or celebration ideas.';
    } else if (formData.inspirationDetails.trim().length < 10) {
      newErrors.inspirationDetails =
        'Please provide at least a short sentence (10+ characters) about your vision.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding this inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('.has-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save inquiry to Studio Admin Dashboard storage
      saveNewInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        servingsCount: formData.servingsCount,
        stylePalette: formData.stylePalette,
        inspirationDetails: formData.inspirationDetails,
        budgetRange: formData.budgetRange,
        dietaryRequirements: formData.dietaryRequirements,
        deliveryLocation: formData.deliveryLocation,
      });

      window.scrollTo({ top: 250, behavior: 'smooth' });
    }, 600);
  };

  const getFormattedSummary = () => {
    return `THE AUSTIN CAKERY — CUSTOM CAKE INQUIRY
----------------------------------------
Client Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Guest Count / Servings: ${formData.servingsCount || 'Not specified'}
Delivery / Location: ${formData.deliveryLocation}
Preferred Style / Palette: ${formData.stylePalette || 'Open to recommendations'}
Budget Range: ${formData.budgetRange || 'To be discussed'}
Dietary Requirements: ${formData.dietaryRequirements || 'None specified'}

Inspiration & Vision:
${formData.inspirationDetails}
----------------------------------------
Generated via The Austin Cakery Concept Portal`;
  };

  const handleCopy = () => {
    const text = getFormattedSummary();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCopied(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: 'Wedding',
      eventDate: '',
      servingsCount: '',
      stylePalette: '',
      inspirationDetails: '',
      budgetRange: '',
      dietaryRequirements: '',
      deliveryLocation: 'Austin Area',
      consent: false,
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-6 sm:p-10 rounded-sm border border-aqua-200 shadow-elevated animate-fadeIn max-w-2xl mx-auto text-left">
        {/* Success Header */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="p-2.5 bg-aqua-100 text-aqua-700 rounded-full">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-rosegold-600 font-bold block">
              Inquiry Draft Prepared
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-espresso-900 font-normal">
              Thank you, {formData.name}
            </h3>
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="p-3.5 bg-aqua-50 border border-aqua-200 rounded mb-5 text-xs text-aqua-950 leading-relaxed">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-rosegold-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-aqua-900">
                Website Demonstration Flow:
              </span>{' '}
              Your custom inquiry is formatted below. You can copy the details to your clipboard and send them directly via Instagram DM or WhatsApp to The Austin Cakery!
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-wider text-espresso-600 font-medium">
              Prepared Inquiry Summary
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center space-x-1.5 text-xs text-rosegold-700 hover:text-rosegold-800 font-medium px-2.5 py-1 bg-rosegold-50 border border-rosegold-200 rounded transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-aqua-600" />
                  <span className="text-aqua-800 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Details</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 bg-[#142C2D] text-aqua-50 rounded text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed border border-aqua-800">
            {getFormattedSummary()}
          </pre>
        </div>

        {/* Primary Next Actions */}
        <div className="space-y-2.5 pt-3 border-t border-aqua-100">
          <a
            href={brandDetails.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center py-3 px-5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-colors"
          >
            <InstagramIcon className="w-4 h-4 mr-2" />
            <span>Continue via Instagram DM (@theaustincakery)</span>
          </a>

          <a
            href={brandDetails.linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center py-2.5 px-4 border border-aqua-300 hover:bg-aqua-50 text-aqua-900 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 mr-2 text-aqua-600" />
            <span>Connect via WhatsApp / Linktree</span>
          </a>

          <button
            onClick={handleReset}
            className="w-full inline-flex items-center justify-center py-2.5 px-4 text-espresso-600 hover:text-espresso-900 text-[11px] uppercase tracking-wider font-light transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-6 sm:p-9 rounded-sm border border-aqua-200/80 shadow-soft max-w-3xl mx-auto space-y-5 text-left"
    >
      {/* Form Introduction */}
      <div className="border-b border-aqua-100 pb-5">
        <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-rosegold-600 font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Commission</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-espresso-900 font-normal">
          Custom Cake Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-espresso-600 font-light mt-1">
          Serving Austin and Leander, Texas. Please share your event specifications to begin planning your bespoke design.
        </p>
      </div>

      {/* Grid: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className={errors.name ? 'has-error' : ''}>
          <label
            htmlFor="inquiry-name"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Your Name <span className="text-rosegold-500">*</span>
          </label>
          <input
            id="inquiry-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Eleanor Vance"
            className={`w-full px-3.5 py-2 bg-[#FAFDFC] border rounded text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none transition-colors ${
              errors.name
                ? 'border-rosegold-500 focus:ring-2 focus:ring-rosegold-200'
                : 'border-aqua-200 focus:border-rosegold-500'
            }`}
          />
          {errors.name && (
            <p className="text-[11px] text-rosegold-600 mt-1 font-medium">{errors.name}</p>
          )}
        </div>

        <div className={errors.email ? 'has-error' : ''}>
          <label
            htmlFor="inquiry-email"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Email Address <span className="text-rosegold-500">*</span>
          </label>
          <input
            id="inquiry-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. eleanor@example.com"
            className={`w-full px-3.5 py-2 bg-[#FAFDFC] border rounded text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none transition-colors ${
              errors.email
                ? 'border-rosegold-500 focus:ring-2 focus:ring-rosegold-200'
                : 'border-aqua-200 focus:border-rosegold-500'
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-rosegold-600 mt-1 font-medium">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Grid: Phone & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="inquiry-phone"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Telephone <span className="text-[10px] text-espresso-500 lowercase font-light">(optional)</span>
          </label>
          <input
            id="inquiry-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(512) 000-0000"
            className="w-full px-3.5 py-2 bg-[#FAFDFC] border border-aqua-200 rounded text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-rosegold-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="inquiry-location"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Service Location
          </label>
          <select
            id="inquiry-location"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
            className="w-full px-3.5 py-2 bg-[#FAFDFC] border border-aqua-200 rounded text-xs text-espresso-900 focus:outline-none focus:border-rosegold-500 transition-colors"
          >
            <option value="Austin Area">Austin, TX Area</option>
            <option value="Leander Area">Leander, TX Area</option>
            <option value="Cedar Park / Round Rock">Cedar Park / Round Rock</option>
            <option value="Texas Hill Country">Texas Hill Country Venue</option>
            <option value="Studio Pickup Coordination">Studio Pickup Coordination</option>
          </select>
        </div>
      </div>

      {/* Grid: Event Type & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className={errors.eventType ? 'has-error' : ''}>
          <label
            htmlFor="inquiry-eventType"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Event Category <span className="text-rosegold-500">*</span>
          </label>
          <select
            id="inquiry-eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 bg-[#FAFDFC] border rounded text-xs text-espresso-900 focus:outline-none transition-colors ${
              errors.eventType
                ? 'border-rosegold-500 focus:ring-2 focus:ring-rosegold-200'
                : 'border-aqua-200 focus:border-rosegold-500'
            }`}
          >
            <option value="Celebration">Custom 3D / Milestone Celebration Cake</option>
            <option value="Wedding">Tiered Wedding Cake</option>
            <option value="Anniversary">Anniversary Cake</option>
            <option value="Floral Artistry">Pressed / Fresh Floral Creation</option>
            <option value="Workshops">Cake Decorating Workshop Inquiry</option>
            <option value="Other">Other Bespoke Event</option>
          </select>
        </div>

        <div className={errors.eventDate ? 'has-error' : ''}>
          <label
            htmlFor="inquiry-eventDate"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Event Date <span className="text-rosegold-500">*</span>
          </label>
          <input
            id="inquiry-eventDate"
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 bg-[#FAFDFC] border rounded text-xs text-espresso-900 focus:outline-none transition-colors ${
              errors.eventDate
                ? 'border-rosegold-500 focus:ring-2 focus:ring-rosegold-200'
                : 'border-aqua-200 focus:border-rosegold-500'
            }`}
          />
          {errors.eventDate && (
            <p className="text-[11px] text-rosegold-600 mt-1 font-medium">{errors.eventDate}</p>
          )}
        </div>
      </div>

      {/* Grid: Servings & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="inquiry-servings"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Approximate Servings / Guests <span className="text-[10px] text-espresso-500 lowercase font-light">(optional)</span>
          </label>
          <input
            id="inquiry-servings"
            type="text"
            name="servingsCount"
            value={formData.servingsCount}
            onChange={handleChange}
            placeholder="e.g. 25-40 guests"
            className="w-full px-3.5 py-2 bg-[#FAFDFC] border border-aqua-200 rounded text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-rosegold-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="inquiry-budget"
            className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
          >
            Target Budget Range <span className="text-[10px] text-espresso-500 lowercase font-light">(optional)</span>
          </label>
          <select
            id="inquiry-budget"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-3.5 py-2 bg-[#FAFDFC] border border-aqua-200 rounded text-xs text-espresso-900 focus:outline-none focus:border-rosegold-500 transition-colors"
          >
            <option value="">Select or discuss upon inquiry</option>
            <option value="Under $250">Under $250</option>
            <option value="$250 – $500">$250 – $500</option>
            <option value="$500 – $800">$500 – $800</option>
            <option value="$800 – $1,200">$800 – $1,200</option>
            <option value="$1,200+">$1,200+</option>
          </select>
        </div>
      </div>

      {/* Style & Palette */}
      <div>
        <label
          htmlFor="inquiry-palette"
          className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
        >
          Theme, Style, or Color Palette <span className="text-[10px] text-espresso-500 lowercase font-light">(optional)</span>
        </label>
        <input
          id="inquiry-palette"
          type="text"
          name="stylePalette"
          value={formData.stylePalette}
          onChange={handleChange}
          placeholder="e.g. Turquoise & rose gold, chalkboard style, floral piping"
          className="w-full px-3.5 py-2 bg-[#FAFDFC] border border-aqua-200 rounded text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-rosegold-500 transition-colors"
        />
      </div>

      {/* Inspiration & Details */}
      <div className={errors.inspirationDetails ? 'has-error' : ''}>
        <label
          htmlFor="inquiry-details"
          className="block text-xs uppercase tracking-[0.16em] text-espresso-800 font-medium mb-1"
        >
          Inspiration &amp; Event Details <span className="text-rosegold-500">*</span>
        </label>
        <textarea
          id="inquiry-details"
          name="inspirationDetails"
          rows={3}
          value={formData.inspirationDetails}
          onChange={handleChange}
          placeholder="Tell us about your celebration theme, honored guest, flavor desires, or design elements you love."
          className={`w-full px-3.5 py-2 bg-[#FAFDFC] border rounded text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none transition-colors ${
            errors.inspirationDetails
              ? 'border-rosegold-500 focus:ring-2 focus:ring-rosegold-200'
              : 'border-aqua-200 focus:border-rosegold-500'
          }`}
        />
        {errors.inspirationDetails && (
          <p className="text-[11px] text-rosegold-600 mt-1 font-medium">
            {errors.inspirationDetails}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className={`pt-1 ${errors.consent ? 'has-error' : ''}`}>
        <label className="flex items-start space-x-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 text-rosegold-600 border-aqua-300 rounded focus:ring-rosegold-400"
          />
          <span className="text-xs text-espresso-700 font-light leading-snug">
            I understand that inquiries are subject to studio availability and confirmation. I consent to being contacted by The Austin Cakery regarding this custom inquiry. <span className="text-rosegold-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-[11px] text-rosegold-600 mt-1 font-medium">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center py-3.5 px-6 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-soft transition-all active:scale-[0.99] disabled:opacity-70 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center space-x-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Preparing Inquiry...</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-2">
              <Send className="w-4 h-4 mr-1.5" />
              <span>Submit Custom Cake Inquiry</span>
            </span>
          )}
        </button>
      </div>

      <p className="text-[11px] text-center text-espresso-500 font-light">
        Prefer to reach out via WhatsApp or social? You can also DM directly via{' '}
        <a
          href={brandDetails.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rosegold-600 hover:underline font-medium"
        >
          Instagram @theaustincakery
        </a>
      </p>
    </form>
  );
};
