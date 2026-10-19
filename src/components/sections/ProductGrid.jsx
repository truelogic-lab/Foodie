import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';
import { products, categories } from '../../data/menuData';
import Reveal from '../ui/Reveal';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All Food');
  
  const filteredProducts = activeCategory === 'All Food' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Reveal direction="down">
        <SectionHeader 
          title="Our Popular" 
          highlight="Foodie Menu" 
          subtitle="Handpicked crowd favorites made with the freshest ingredients. Find your next obsession and order it in seconds."
        />
      </Reveal>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold transition-colors ${activeCategory === cat ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {filteredProducts.map((product, index) => (
          /* Use the direction 'zoom' to make cards pop in without vertical scale jumping */
          <Reveal key={product.id} direction="zoom" delay={index * 50}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
          View All Products
        </button>
      </div>
    </section>
  );
}
