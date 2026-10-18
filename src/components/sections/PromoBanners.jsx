import React from 'react';
import pastaImg from '../../assets/images/pasta.png';
import burgerImg from '../../assets/images/burger.png';
import comboImg from '../../assets/images/combo.png';

export default function PromoBanners() {
  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        
        <div className="bg-brand-red rounded-2xl p-4 md:p-6 text-white flex justify-between items-center relative overflow-hidden group h-32 md:h-40">
          <div className="z-10 relative">
            <h3 className="text-lg md:text-2xl font-black mb-1">Pasta</h3>
            <p className="text-[10px] md:text-xs opacity-80 mb-1 md:mb-2 hidden sm:block">Get a 20% Discount<br/>On First Order</p>
            <p className="font-black text-sm md:text-xl">$10.90</p>
          </div>
          <img src={pastaImg} alt="Pasta" className="absolute -right-6 -bottom-6 md:-right-4 md:-bottom-4 w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white/20 group-hover:scale-110 transition-transform" />
        </div>
        
        <div className="bg-[#1a1a1a] rounded-2xl p-4 md:p-6 text-white flex justify-between items-center relative overflow-hidden group h-32 md:h-40">
          <div className="z-10 relative">
            <h3 className="text-lg md:text-2xl font-black mb-1">Burger</h3>
            <p className="text-[10px] md:text-xs opacity-80 mb-1 md:mb-2 hidden sm:block">Get a 20% Discount<br/>On First Order</p>
            <p className="font-black text-sm md:text-xl">$12.90</p>
          </div>
          <img src={burgerImg} alt="Burger" className="absolute -right-6 -bottom-6 md:-right-4 md:-bottom-4 w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white/10 group-hover:scale-110 transition-transform" />
        </div>

        <div className="col-span-2 md:col-span-1 bg-brand-yellow rounded-2xl p-4 md:p-6 text-brand-dark flex justify-between items-center relative overflow-hidden group h-32 md:h-40">
          <div className="z-10 relative">
            <h3 className="text-lg md:text-2xl font-black mb-1">Combo</h3>
            <p className="text-[10px] md:text-xs font-medium mb-1 md:mb-2">Get a 20% Discount<br/>On First Order</p>
            <p className="font-black text-sm md:text-xl">$19.90</p>
          </div>
          <img src={comboImg} alt="Combo" className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-black/10 group-hover:scale-110 transition-transform" />
        </div>
        
      </div>
    </section>
  );
}
