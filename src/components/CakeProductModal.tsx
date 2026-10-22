import React, { useState } from 'react';
import { X, Check, ShoppingBag, Sparkles, MapPin } from 'lucide-react';
import type { CakeGalleryItem } from '../types';
import { useCart } from '../context/CartContext';

interface CakeProductModalProps {
  cake: CakeGalleryItem | null;
  onClose: () => void;
}

interface SizeOption {
  id: string;
  label: string;
  servings: string;
  price: number;
}

const SIZE_OPTIONS: SizeOption[] = [
  { id: '6-inch', label: '6" Round Single Tier', servings: 'Serves 6–8', price: 65 },
  { id: '8-inch', label: '8" Round Single Tier', servings: 'Serves 12–16', price: 95 },
  { id: '10-inch', label: '10" Round Celebration', servings: 'Serves 20–25', price: 135 },
  { id: '2-tier', label: '2-Tier Milestone Tier', servings: 'Serves 30–40', price: 235 },
  { id: '3-tier', label: '3-Tier Luxury Wedding', servings: 'Serves 60–80', price: 460 },
];

const FLAVOR_OPTIONS = [
  'Signature Vanilla Bean with Whipped Buttercream',
  'Rich Belgian Chocolate Ganache',
  'Texas Hill Country Wildberry & Sweet Cream',
  'Rose Water & Cardamom Velvet',
  'Lemon Zest with Lavender Blossom',
];

export const CakeProductModal: React.FC<CakeProductModalProps> = ({ cake, onClose }) => {
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<SizeOption>(SIZE_OPTIONS[1]);
  const [selectedFlavor, setSelectedFlavor] = useState<string>(FLAVOR_OPTIONS[0]);
  const [inscription, setInscription] = useState<string>('');
  const [isGlutenFriendly, setIsGlutenFriendly] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  if (!cake) return null;

  const basePrice = selectedSize.price + (isGlutenFriendly ? 10 : 0);
  const totalPrice = basePrice * quantity;

  const handleAddToCart = () => {
    addItem({
      cakeId: cake.id,
      title: cake.title,
      image: cake.image,
      size: `${selectedSize.label} (${selectedSize.servings})`,
      servings: selectedSize.servings,
      flavor: selectedFlavor,
      inscription: inscription.trim() || undefined,
      dietary: isGlutenFriendly ? 'Gluten-Friendly' : 'Classic Recipe',
      unitPrice: basePrice,
      quantity,
    });

    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-espresso-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`${cake.title} Product Details`}
    >
      {/* Click backdrop to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-sm shadow-modal border border-aqua-200 overflow-hidden flex flex-col md:flex-row my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/90 text-espresso-900 hover:text-rosegold-600 hover:bg-white shadow-soft transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image & Gallery Showcase (45%) */}
        <div className="w-full md:w-5/12 bg-gradient-to-b from-aqua-50/60 to-white p-4 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-aqua-100">
          <div className="relative aspect-[3/4] max-h-[40vh] md:max-h-[60vh] w-full overflow-hidden rounded shadow-soft bg-white">
            <img
              src={cake.image}
              alt={cake.alt}
              className="w-full h-full object-cover"
            />
            {cake.highlightBadge && (
              <span className="absolute top-2.5 left-2.5 bg-rosegold-500 text-white px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold rounded shadow-xs">
                {cake.highlightBadge}
              </span>
            )}
          </div>

          <div className="pt-4 text-left space-y-1.5 hidden md:block">
            <div className="flex items-center space-x-1.5 text-[11px] text-aqua-800 font-medium">
              <MapPin className="w-3.5 h-3.5 text-rosegold-500" />
              <span>Studio Pickup in Austin / Delivery Available</span>
            </div>
            <p className="text-[11px] text-espresso-600 font-light leading-relaxed">
              Every cake is baked fresh to order in our Austin studio with fine artisanal details.
            </p>
          </div>
        </div>

        {/* Right: Magnolia Bakery Style Product Configuration Form (55%) */}
        <div className="w-full md:w-7/12 p-5 sm:p-7 overflow-y-auto max-h-[52vh] md:max-h-[92vh] text-left flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.22em] text-rosegold-600 font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Austin Cakery Studio Selection</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso-900 leading-tight font-normal">
                {cake.title}
              </h2>
              <div className="flex items-baseline space-x-3 mt-1.5">
                <span className="font-serif text-2xl sm:text-3xl text-rosegold-600 font-semibold">
                  ${totalPrice}
                </span>
                <span className="text-xs text-espresso-500 font-light">
                  (${basePrice} each) &bull; {selectedSize.servings}
                </span>
              </div>
            </div>

            {/* 1. Size Selection (Magnolia Bakery style) */}
            <div className="space-y-2 pt-1 border-t border-aqua-100">
              <label className="block text-xs uppercase tracking-[0.16em] text-espresso-900 font-semibold">
                Select Size &amp; Servings:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SIZE_OPTIONS.map((opt) => {
                  const isSelected = selectedSize.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedSize(opt)}
                      className={`p-2.5 rounded text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-aqua-50/80 border-rosegold-500 shadow-soft ring-1 ring-rosegold-400'
                          : 'bg-[#FAFDFC] border-aqua-200 hover:border-rosegold-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-espresso-900 leading-snug">
                          {opt.label}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-rosegold-500" />}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-espresso-600 mt-1 font-light">
                        <span>{opt.servings}</span>
                        <span className="font-medium text-rosegold-700">${opt.price}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Flavor Selection */}
            <div className="space-y-1.5 pt-2 border-t border-aqua-100">
              <label className="block text-xs uppercase tracking-[0.16em] text-espresso-900 font-semibold">
                Select Cake &amp; Buttercream Flavor:
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAFDFC] border border-aqua-200 rounded text-espresso-900 focus:outline-none focus:border-rosegold-500"
              >
                {FLAVOR_OPTIONS.map((flavor, i) => (
                  <option key={i} value={flavor}>
                    {flavor}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Custom Inscription Message */}
            <div className="space-y-1.5 pt-2 border-t border-aqua-100">
              <div className="flex items-center justify-between">
                <label className="block text-xs uppercase tracking-[0.16em] text-espresso-900 font-semibold">
                  Custom Cake Inscription:
                </label>
                <span className="text-[10px] text-espresso-500 font-light">optional</span>
              </div>
              <input
                type="text"
                value={inscription}
                onChange={(e) => setInscription(e.target.value)}
                maxLength={45}
                placeholder="e.g. Happy Birthday Sarah! or Congratulations"
                className="w-full px-3 py-2 text-xs bg-[#FAFDFC] border border-aqua-200 rounded text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-rosegold-500"
              />
            </div>

            {/* 4. Dietary Option */}
            <div className="pt-2 border-t border-aqua-100 flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isGlutenFriendly}
                  onChange={(e) => setIsGlutenFriendly(e.target.checked)}
                  className="rounded text-rosegold-600 focus:ring-rosegold-400 h-4 w-4"
                />
                <span className="text-xs text-espresso-800 font-light">
                  Gluten-Friendly Recipe Preparation (+ $10)
                </span>
              </label>
            </div>

            {/* Quantity Stepper & Add to Cart Action */}
            <div className="pt-4 border-t border-aqua-100 flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-aqua-200 rounded bg-[#FAFDFC]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-espresso-700 hover:text-rosegold-600 font-bold focus:outline-none cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  &minus;
                </button>
                <span className="px-3 text-xs font-semibold text-espresso-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-espresso-700 hover:text-rosegold-600 font-bold focus:outline-none cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-2 py-3 px-5 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded shadow-soft hover:shadow-rosegold transition-all cursor-pointer"
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-aqua-200" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    <span>Add to Cart &bull; ${totalPrice}</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Client Concept Demo Transparency Note */}
            <p className="text-[10px] text-center text-espresso-500 font-light pt-1">
              Sample configuration inspired by Magnolia Bakery &bull; Ready for client e-commerce activation.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};
