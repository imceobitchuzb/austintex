import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutModal } from './CheckoutModal';

export const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex justify-end animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-label="Your Cake Cart"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-espresso-950/70 backdrop-blur-xs transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />

        {/* Drawer Panel */}
        <div className="relative w-full max-w-md bg-white h-full shadow-modal border-l border-aqua-200 flex flex-col justify-between overflow-hidden z-10 text-left">
          
          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-aqua-100 flex items-center justify-between bg-[#F0FAF9]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-rosegold-500" />
              <div>
                <h2 className="font-serif text-lg text-espresso-900 font-medium leading-none">
                  Your Cake Cart ({totalItems})
                </h2>
                <span className="text-[9px] uppercase tracking-wider text-aqua-800 font-light mt-0.5 block">
                  The Austin Cakery &bull; Austin &amp; Leander
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-white text-espresso-900 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="px-5 py-4 flex-1 overflow-y-auto space-y-3">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-aqua-50 text-aqua-600 flex items-center justify-center mx-auto mb-2">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-xl text-espresso-900">Your cart is empty</h3>
                <p className="text-xs text-espresso-600 font-light max-w-xs mx-auto">
                  Browse our gallery and click on any custom cake to select size, flavor, and add to your cart.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white text-xs uppercase tracking-wider font-medium rounded-sm shadow-soft cursor-pointer"
                >
                  <span>Explore The Gallery</span>
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-[#FAFDFC] border border-aqua-100 rounded-sm flex gap-3 items-center justify-between shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded bg-aqua-50 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="font-serif text-sm font-semibold text-espresso-900 truncate">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-rosegold-700 font-medium">
                      {item.size}
                    </p>
                    <p className="text-[10px] text-espresso-600 font-light truncate">
                      {item.flavor}
                    </p>
                    {item.inscription && (
                      <p className="text-[10px] text-aqua-800 italic truncate">
                        "{item.inscription}"
                      </p>
                    )}
                    <span className="text-xs font-bold text-espresso-900 block mt-0.5">
                      ${item.unitPrice * item.quantity}
                    </span>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-espresso-400 hover:text-rosegold-600 p-1 cursor-pointer transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center border border-aqua-200 rounded bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs text-espresso-700 hover:text-rosegold-600 font-bold cursor-pointer"
                      >
                        &minus;
                      </button>
                      <span className="px-2 text-[11px] font-semibold text-espresso-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs text-espresso-700 hover:text-rosegold-600 font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-aqua-100 bg-[#F0FAF9] space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-espresso-700">
                  <span>Subtotal</span>
                  <span className="font-semibold text-espresso-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-espresso-600 text-[11px] font-light">
                  <span>Pickup in Austin/Leander</span>
                  <span className="text-aqua-800 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-aqua-200/80 font-serif font-bold text-espresso-900">
                  <span>Estimated Total</span>
                  <span className="text-rosegold-700">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded shadow-soft hover:shadow-rosegold transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[10px] text-aqua-800 tracking-wider uppercase pt-0.5">
                <MapPin className="w-3 h-3 text-rosegold-500" />
                <span>Austin &amp; Leander, Texas &bull; Handcrafted to Order</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};
