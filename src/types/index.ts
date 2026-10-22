export type CakeCategory = 'All' | 'Weddings' | 'Celebrations' | 'Floral' | 'Artistic Details' | 'Workshops';

export interface CakeGalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Celebrations' | 'Floral' | 'Artistic Details' | 'Workshops';
  image: string;
  aspectRatio: 'square' | 'portrait' | 'tall';
  alt: string;
  conceptNote: string;
  isRealClientWork?: boolean;
  highlightBadge?: string;
  sourceUrl?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  servingsCount: string;
  stylePalette: string;
  inspirationDetails: string;
  budgetRange: string;
  dietaryRequirements: string;
  deliveryLocation: string;
  consent: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'inquiries' | 'design' | 'logistics';
  note?: string;
}

export interface FeatureArticle {
  title: string;
  publication: string;
  year: string;
  url: string;
  description: string;
  quote?: string;
}

export interface StoryHighlightItem {
  title: string;
  image: string;
  link: string;
}
