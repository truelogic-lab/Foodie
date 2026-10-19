import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import burgerImg from '../../assets/images/burger.png';
import pastaImg from '../../assets/images/pasta.png';
import friesImg from '../../assets/images/fries.png';
import sandwichImg from '../../assets/images/sandwich.png';
import drinksImg from '../../assets/images/drinks.png';
import pizzaImg from '../../assets/images/pizza.png';
import comboImg from '../../assets/images/combo.png';

export default function Gallery() {
  const { addToCart } = useCart();

  const galleryItems = [
    { id: 1, name: 'Spicy Burger', price: 10.90, image: burgerImg, category: 'Burger' },
    { id: 2, name: 'Pasta', price: 10.90, image: pastaImg, category: 'Pasta' },
    { id: 3, name: 'French Fry', price: 10.90, image: friesImg, category: 'French Fry' },
    { id: 4, name: 'Sandwich', price: 10.90, image: sandwichImg, category: 'Sandwich' },
    { id: 5, name: 'Cold Drinks', price: 10.90, image: drinksImg, category: 'Cold Drinks' },
    { id: 6, name: 'Pepperoni Pizza', price: 15.90, image: pizzaImg, category: 'Pizza' },
    { id: 7, name: 'Combo 1', price: 10.90, image: comboImg, category: 'Combo' },
  ];

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase">
          Foods <span className="text-brand-red">Gallery</span>
        </h2>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-8 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
         {galleryItems.map((item) => (
           <div 
             key={item.id} 
             className="snap-center shrink-0 w-[65vw] sm:w-[40vw] md:w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group"
           >
             <div 
               className="w-full aspect-square overflow-hidden relative flex items-center justify-center p-4"
               style={{ background: 'radial-gradient(circle at center, #FCE4E6 0%, #E31837 100%)' }}
             >
               <span className="absolute inset-0 flex items-center justify-center text-[80px] font-black text-white/30 uppercase tracking-tighter rotate-[-15deg] pointer-events-none select-none">
                 Foodie
               </span>

               {/* The Food Image with 3D Spin */}
               <img 
                 src={item.image} 
                 alt={item.name} 
                 loading="lazy"
                 className="w-full h-full object-contain drop-shadow-2xl relative z-10 spin-3d" 
               />
               
               <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest text-brand-dark shadow-sm z-20">
                 {item.category}
               </div>
             </div>

             <div className="p-4 flex items-center justify-between border-t border-gray-50">
               <div>
                 <h3 className="font-bold text-brand-dark text-sm leading-tight">{item.name}</h3>
                 <p className="font-black text-brand-red text-sm mt-0.5">${item.price.toFixed(2)}</p>
               </div>
               <button 
                 onClick={() => addToCart(item)}
                 className="bg-brand-red hover:bg-red-700 text-white p-2 rounded-full transition-colors shadow-md shadow-red-500/20"
                 aria-label={`Add ${item.name} to cart`}
               >
                 <ShoppingCart size={16} />
               </button>
             </div>
           </div>
         ))}
      </div>
    </section>
  );
}
