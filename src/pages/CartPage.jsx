import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { cart, updateQty, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCheckout = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Small delay to let the scroll start before navigating
    setTimeout(() => {
      navigate('/order');
    }, 100);
  };

  if (cart.length === 0) {
    return (
      <InnerPageLayout title="Your Cart" subtitle="Your shopping cart is currently empty.">
        <div className="w-full max-w-2xl mx-auto text-center py-20 px-4">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight mb-6">Nothing Here Yet</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any delicious food to your cart.</p>
          <Link to="/menu" className="bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
            Browse Menu
          </Link>
        </div>
      </InnerPageLayout>
    );
  }

  return (
    <InnerPageLayout title="Your Cart" subtitle="Review your items before proceeding to checkout.">
      <div className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Cart Items */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-xl font-black text-brand-dark uppercase tracking-tight mb-6 pb-2 border-b border-gray-200">
            Items ({cart.length})
          </h2>
          
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">{item.name}</h3>
                    <p className="text-brand-red font-black text-sm mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg bg-white">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-2 hover:bg-gray-50 text-gray-500 transition-colors"><Minus size={14} /></button>
                    <span className="px-4 font-bold text-sm">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-2 hover:bg-gray-50 text-gray-500 transition-colors"><Plus size={14} /></button>
                  </div>
                  
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-brand-red transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <button onClick={handleClearCart} className="text-xs font-bold text-gray-400 hover:text-brand-red uppercase tracking-widest transition-colors">
              Clear Cart
            </button>
            <Link to="/menu" className="text-xs font-bold text-brand-red hover:text-red-700 uppercase tracking-widest transition-colors flex items-center gap-1">
              Add More <Plus size={14} />
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-2/5">
          <div className="sticky top-28 pt-4 lg:pt-0">
            <h3 className="text-xl font-black text-brand-dark uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">
              Summary
            </h3>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span>$2.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-6 mb-8">
              <span className="font-black text-brand-dark uppercase tracking-wider">Total</span>
              <span className="font-black text-brand-red text-2xl">${(cartTotal + 2).toFixed(2)}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-brand-red text-white font-black text-sm py-4 rounded-xl uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
            >
              Checkout <ArrowRight size={18} />
            </button>
            
            <div className="mt-8 text-xs text-gray-500 flex items-center gap-2 justify-center font-bold uppercase tracking-wider">
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
