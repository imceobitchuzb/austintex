import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { brandDetails } from '../data/featuresData';
import { saveNewOrder } from '../services/ordersStorage';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, clearCart } = useCart();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExp, setCardExp] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('789');

  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const estimatedTax = subtotal * 0.0825; // Texas 8.25%
  const deliveryFee = fulfillment === 'delivery' ? 25 : 0;
  const finalTotal = subtotal + estimatedTax + deliveryFee;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
      const generatedOrder = `AC-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);

      // Save order into Studio Admin storage
      saveNewOrder({
        id: generatedOrder,
        customerName: name || 'Valued Guest',
        customerEmail: email || 'guest@example.com',
        customerPhone: phone || '(512) 555-0199',
        eventDate: date || 'Flexible / To be confirmed',
        fulfillment,
        deliveryAddress: fulfillment === 'delivery' ? address : undefined,
        items: items.map((it) => ({
          id: it.id,
          title: it.title,
          size: it.size,
          flavor: it.flavor,
          inscription: it.inscription,
          glutenFriendly: it.dietary?.includes('Gluten') ?? false,
          unitPrice: it.unitPrice,
          quantity: it.quantity,
        })),
        subtotal,
        tax: estimatedTax,
        deliveryFee,
        total: finalTotal,
        paymentMethod: `Card ending in ${cardNumber.slice(-4) || '4242'}`,
      });

      clearCart();
    }, 1400);
  };

  const getReceiptSummary = () => {
    return `THE AUSTIN CAKERY — ORDER CONFIRMATION
----------------------------------------
Order #: ${orderNumber}
Client: ${name || 'Valued Guest'}
Contact: ${email || 'email@example.com'} / ${phone || '(512) 000-0000'}
Fulfillment: ${fulfillment === 'pickup' ? 'Studio Pickup (Austin / Leander)' : `Local Delivery to: ${address}`}
Target Event Date: ${date || 'To be scheduled'}
Items:
${items.map((it) => `• ${it.quantity}x ${it.title} (${it.size}) - $${it.unitPrice * it.quantity}`).join('\n')}

Subtotal: $${subtotal.toFixed(2)}
Estimated Tax: $${estimatedTax.toFixed(2)}
${deliveryFee > 0 ? `Delivery Fee: $${deliveryFee.toFixed(2)}\n` : ''}Total Paid: $${finalTotal.toFixed(2)}
----------------------------------------
Bespoke Custom Cake Studio — Austin & Leander, Texas`;
  };

  const handleCopyReceipt = () => {
    navigator.clipboard.writeText(getReceiptSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-espresso-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Secure Checkout"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-sm shadow-modal border border-aqua-200 overflow-hidden max-h-[92vh] flex flex-col my-auto text-left">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-aqua-100 flex items-center justify-between bg-[#F0FAF9]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-aqua-700" />
            <div>
              <h2 className="font-serif text-lg sm:text-xl text-espresso-900 font-medium leading-none">
                {isPaid ? 'Order Confirmed!' : 'Secure Checkout & Order Preparation'}
              </h2>
              <span className="text-[10px] uppercase tracking-widest text-rosegold-600 font-light mt-0.5 block">
                The Austin Cakery &bull; Austin &amp; Leander, TX
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-espresso-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isPaid ? (
            /* Paid Receipt Screen */
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center space-y-2 py-3">
                <div className="w-14 h-14 bg-aqua-100 text-aqua-700 rounded-full flex items-center justify-center mx-auto mb-2 shadow-soft">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-espresso-900">
                  Thank You for Your Order!
                </h3>
                <p className="text-xs text-espresso-700 font-light max-w-md mx-auto">
                  Your order <span className="font-bold text-rosegold-700">#{orderNumber}</span> has been confirmed. The studio will prepare your handcrafted cake for your celebration date!
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="p-3.5 bg-[#FAFDFC] border border-aqua-200 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-espresso-600 font-semibold">
                    Order Receipt Summary
                  </span>
                  <button
                    onClick={handleCopyReceipt}
                    className="inline-flex items-center space-x-1 text-xs text-rosegold-600 hover:text-rosegold-700 font-medium px-2 py-0.5 rounded bg-white border border-rosegold-200"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-aqua-600" />
                        <span className="text-aqua-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Receipt</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 bg-espresso-950 text-aqua-100 rounded text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {getReceiptSummary()}
                </pre>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={brandDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 border border-rosegold-300 text-rosegold-700 hover:bg-rosegold-50 rounded text-xs uppercase tracking-wider font-medium"
                >
                  <InstagramIcon className="w-4 h-4 text-rosegold-500" />
                  <span>DM Order Details</span>
                </a>
                <a
                  href={brandDetails.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 border border-aqua-300 text-aqua-800 hover:bg-aqua-50 rounded text-xs uppercase tracking-wider font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4 text-aqua-600" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handlePay} className="space-y-4">
              {/* Order Summary Strip */}
              <div className="p-3 bg-[#F0FAF9] rounded border border-aqua-200/80 text-xs flex items-center justify-between">
                <div>
                  <span className="font-semibold text-espresso-900">
                    {items.length} {items.length === 1 ? 'Cake' : 'Cakes'} Selected
                  </span>
                  <span className="text-espresso-600 font-light block">
                    Total with tax: <strong className="text-rosegold-700">${finalTotal.toFixed(2)}</strong>
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-aqua-800 font-medium bg-white px-2.5 py-1 rounded border border-aqua-200">
                  Austin &bull; Leander
                </span>
              </div>

              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 font-medium mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-xs border border-aqua-200 rounded focus:border-rosegold-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@example.com"
                    className="w-full px-3 py-2 text-xs border border-aqua-200 rounded focus:border-rosegold-500 outline-none"
                  />
                </div>
              </div>

              {/* Phone & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 font-medium mb-1">
                    Phone (for pickup/delivery alerts) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(512) 000-0000"
                    className="w-full px-3 py-2 text-xs border border-aqua-200 rounded focus:border-rosegold-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 font-medium mb-1">
                    Celebration Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-aqua-200 rounded focus:border-rosegold-500 outline-none"
                  />
                </div>
              </div>

              {/* Fulfillment Options */}
              <div className="space-y-2 pt-1 border-t border-aqua-100">
                <label className="block text-[11px] uppercase tracking-wider text-espresso-800 font-semibold">
                  Fulfillment Method:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFulfillment('pickup')}
                    className={`p-2.5 rounded text-left border text-xs cursor-pointer ${
                      fulfillment === 'pickup'
                        ? 'bg-aqua-50 border-rosegold-500 font-semibold text-rosegold-800 ring-1 ring-rosegold-400'
                        : 'border-aqua-200 text-espresso-700'
                    }`}
                  >
                    <span>Studio Pickup</span>
                    <span className="block text-[10px] text-espresso-500 font-light">Free (Austin/Leander)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFulfillment('delivery')}
                    className={`p-2.5 rounded text-left border text-xs cursor-pointer ${
                      fulfillment === 'delivery'
                        ? 'bg-aqua-50 border-rosegold-500 font-semibold text-rosegold-800 ring-1 ring-rosegold-400'
                        : 'border-aqua-200 text-espresso-700'
                    }`}
                  >
                    <span>Central Texas Delivery</span>
                    <span className="block text-[10px] text-espresso-500 font-light">+$25 Local Delivery</span>
                  </button>
                </div>
                {fulfillment === 'delivery' && (
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Delivery venue address in Austin or Leander..."
                    className="w-full mt-2 px-3 py-2 text-xs border border-aqua-200 rounded focus:border-rosegold-500 outline-none"
                  />
                )}
              </div>

              {/* Demo Payment Card Input */}
              <div className="space-y-2 pt-2 border-t border-aqua-100">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 font-semibold flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-rosegold-500" /> Payment Details
                  </label>
                  <span className="text-[10px] text-aqua-800 font-medium">Demo Mode Active</span>
                </div>
                <div className="p-3 bg-[#FAFDFC] border border-aqua-200 rounded space-y-2">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card Number"
                    className="w-full px-3 py-1.5 text-xs font-mono border border-aqua-200 rounded bg-white"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={cardExp}
                      onChange={(e) => setCardExp(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full px-3 py-1.5 text-xs font-mono border border-aqua-200 rounded bg-white"
                    />
                    <input
                      type="text"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      placeholder="CVC"
                      className="w-full px-3 py-1.5 text-xs font-mono border border-aqua-200 rounded bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Payment Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-rosegold-500 to-rosegold-600 hover:from-rosegold-600 hover:to-rosegold-700 text-white text-xs uppercase tracking-[0.2em] font-medium rounded shadow-soft hover:shadow-rosegold transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Payment (${finalTotal.toFixed(2)})...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Complete Order &bull; ${finalTotal.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-espresso-500 font-light">
                Interactive demonstration: no actual card charge is processed. Order will generate a demo receipt.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
