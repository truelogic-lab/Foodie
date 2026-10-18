import React from 'react';
import burgerImg from '../../assets/images/burger.png';
import pastaImg from '../../assets/images/pasta.png';
import friesImg from '../../assets/images/fries.png';
import drinksImg from '../../assets/images/drinks.png';
import sandwichImg from '../../assets/images/sandwich.png';
import comboImg from '../../assets/images/combo.png';
import pizzaImg from '../../assets/images/pizza.png';

const categoryImages = {
  'Burger': burgerImg,
  'French Fry': friesImg,
  'Pizza': pizzaImg,
  'Pasta': pastaImg,
  'Sandwich': sandwichImg, 
  'Cold Drinks': drinksImg,
  'Combo': comboImg
};

export default function CategoryBar() {
  return (
    <section className="w-full bg-transparent py-6 px-4 md:px-8 border-y border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
        {Object.keys(categoryImages).map((cat) => (
          <div key={cat} className="flex flex-col items-center cursor-pointer group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform overflow-hidden p-1">
              <img src={categoryImages[cat]} alt={cat} className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="font-bold text-xs">{cat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
