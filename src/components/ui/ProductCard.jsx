import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow relative group overflow-hidden">
      <button className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-brand-red transition-colors z-20">
        <Heart size={16} className="md:w-[18px] md:h-[18px]" />
      </button>
      
      <div 
        className="w-full aspect-square mb-3 md:mb-4 rounded-xl overflow-hidden p-3 flex items-center justify-center relative"
        style={{ background: 'radial-gradient(circle at center, #FCE4E6 0%, #E31837 100%)' }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-[60px] md:text-[80px] font-black text-white/30 uppercase tracking-tighter rotate-[-15deg] pointer-events-none select-none">
          Foodie
        </span>

        {/* Added style backfaceVisibility to fix glitches */}
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-2xl relative z-10 spin-3d"
          style={{ backfaceVisibility: 'hidden' }}
        />
      </div>

      <div className="flex text-brand-yellow mb-1 md:mb-2 z-10">
        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="md:w-3 md:h-3" fill="currentColor" />)}
      </div>
      
      <h3 className="font-bold text-brand-dark text-sm md:text-lg mb-1 text-center leading-tight z-10">{product.name}</h3>
      <p className="text-[10px] md:text-xs text-gray-400 text-center mb-2 md:mb-3 hidden sm:block z-10">Get a 20% Discount</p>
      <p className="font-black text-brand-red text-sm md:text-lg mb-3 md:mb-4 z-10">${product.price.toFixed(2)}</p>
      
      <button 
        onClick={() => addToCart(product)}
        className="w-full border-2 border-gray-100 rounded-full py-1.5 md:py-2 flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold hover:border-brand-red hover:text-brand-red transition-colors z-10"
      >
        <ShoppingCart size={12} className="md:w-[14px] md:h-[14px]" /> Add
      </button>
    </div>
  );
}
