import React from 'react';
import burgerImg from '../../assets/images/burger.png';
import pastaImg from '../../assets/images/pasta.png';
import friesImg from '../../assets/images/fries.png';
import sandwichImg from '../../assets/images/sandwich.png';
import drinksImg from '../../assets/images/drinks.png';
import pizzaImg from '../../assets/images/pizza.png';

export default function Gallery() {
  const galleryImages = [burgerImg, pastaImg, friesImg, sandwichImg, drinksImg, pizzaImg];

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase">
          Foods <span className="text-brand-red">Gallery</span>
        </h2>
      </div>
      
      {/* Mobile: Horizontal Scroll (75vw width) | Desktop: Grid */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-6 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
         {galleryImages.map((img, index) => (
           <div 
             key={index} 
             className="snap-center shrink-0 w-[75vw] sm:w-[45vw] md:w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-sm border border-gray-100"
           >
             <img 
               src={img} 
               alt={`Gallery ${index + 1}`} 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
             />
           </div>
         ))}
      </div>
    </section>
  );
}
