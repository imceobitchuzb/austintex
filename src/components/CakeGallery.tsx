import React, { useState, useMemo } from 'react';
import { ZoomIn, Filter, ShoppingBag } from 'lucide-react';
import type { CakeCategory, CakeGalleryItem } from '../types';
import { galleryItems } from '../data/galleryData';
import { GalleryLightbox } from './GalleryLightbox';
import { CakeProductModal } from './CakeProductModal';

interface CakeGalleryProps {
  initialCategory?: CakeCategory;
  limit?: number;
  showFilters?: boolean;
}

export const CakeGallery: React.FC<CakeGalleryProps> = ({
  initialCategory = 'All',
  limit,
  showFilters = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory>(initialCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [selectedProductCake, setSelectedProductCake] = useState<CakeGalleryItem | null>(null);

  const categories: CakeCategory[] = [
    'All',
    'Celebrations',
    'Weddings',
    'Floral',
    'Artistic Details',
  ];

  const filteredItems = useMemo(() => {
    let items = galleryItems;
    if (selectedCategory !== 'All') {
      items = items.filter((item) => item.category === selectedCategory);
    }
    if (limit) {
      items = items.slice(0, limit);
    }
    return items;
  }, [selectedCategory, limit]);

  return (
    <div className="w-full">
      {/* Category Filter Pills (if enabled) */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-aqua-100">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-aqua-800 font-semibold">
            <Filter className="w-3.5 h-3.5 text-rosegold-500" />
            <span>Filter Studio Portfolio:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.16em] font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white shadow-soft'
                      : 'bg-white text-espresso-700 border border-aqua-200 hover:border-rosegold-400 hover:text-rosegold-700'
                  }`}
                  aria-pressed={active}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Editorial & E-Commerce Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const aspectClass =
            item.aspectRatio === 'tall'
              ? 'aspect-[3/4.2]'
              : item.aspectRatio === 'portrait'
              ? 'aspect-[3/3.8]'
              : 'aspect-square';

          return (
            <div
              key={item.id}
              className="group relative bg-white p-3.5 rounded-sm shadow-soft hover:shadow-elevated border border-aqua-100 hover:border-rosegold-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div
                className={`relative w-full ${aspectClass} overflow-hidden bg-aqua-50/40 rounded-sm cursor-pointer`}
                onClick={() => setSelectedProductCake(item)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width="600"
                  height="750"
                />

                {/* Quick View Button Overlay */}
                <div className="absolute inset-0 bg-espresso-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProductCake(item);
                    }}
                    className="bg-white/95 backdrop-blur-xs text-rosegold-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-soft hover:bg-rosegold-600 hover:text-white transition-all flex items-center space-x-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Select Size &amp; Customize</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveLightboxIndex(index);
                    }}
                    className="p-2 bg-white/90 rounded-full text-espresso-800 hover:text-rosegold-600 hover:bg-white shadow-soft transition-colors"
                    title="Zoom in lightbox"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start pointer-events-none">
                  {item.highlightBadge && (
                    <span className="bg-rosegold-500 text-white px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold rounded shadow-xs">
                      {item.highlightBadge}
                    </span>
                  )}
                  <span className="bg-white/95 backdrop-blur-xs border border-aqua-200 px-2 py-0.5 text-[9px] uppercase tracking-widest text-espresso-800 font-medium rounded-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption Content */}
              <div className="pt-3 pb-1 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedProductCake(item)}
                    className="font-serif text-lg sm:text-xl text-espresso-900 hover:text-rosegold-600 transition-colors leading-tight cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-espresso-600 font-light mt-1 line-clamp-2 leading-relaxed">
                    {item.conceptNote}
                  </p>
                </div>

                {/* Price & Magnolia Bakery Style Customize Button */}
                <div className="pt-3 mt-2 border-t border-aqua-100 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] text-espresso-500 block font-light leading-none">Starting from</span>
                    <span className="font-serif text-base font-bold text-rosegold-700">$65</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProductCake(item)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-aqua-50 hover:bg-rosegold-500 hover:text-white text-aqua-900 border border-aqua-200 hover:border-rosegold-500 text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-rosegold-500 hover:text-white" />
                    <span>Order / Options</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />

      {/* Magnolia Bakery Style Cake Product Modal */}
      <CakeProductModal
        cake={selectedProductCake}
        onClose={() => setSelectedProductCake(null)}
      />
    </div>
  );
};
