import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, scrambleText, stagger } from 'animejs';
import chefImg from '../../assets/images/chef.png';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    animate('.hero-title-top', {
      innerHTML: scrambleText({ override: ' ', duration: 1500, cursor: '░▒▓█', from: 'left' }),
      opacity: [0, 1], duration: 1500, ease: 'linear',
    });
    animate('.hero-title-bottom', {
      innerHTML: scrambleText({ override: ' ', duration: 1500, cursor: '░▒▓█', from: 'left' }),
      opacity: [0, 1], duration: 1500, ease: 'linear',
    });
    animate('.hero-subtitle', {
      innerHTML: scrambleText({ override: ' ', duration: 1200, cursor: '░▒▓', from: 'center' }),
      opacity: [0, 1], duration: 1200, delay: 300, ease: 'linear',
    });
    animate('.hero-btn', {
      opacity: [0, 1], translateY: [20, 0], duration: 800, delay: stagger(100, { start: 800 }), ease: 'out(3)',
    });
    animate('.hero-img', {
      opacity: [0, 1], scale: [0.9, 1], duration: 1200, delay: 500, ease: 'out(3)',
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full bg-[#fdfdfd] py-16 md:py-24 px-4 md:px-8 overflow-hidden flex flex-col md:flex-row items-center justify-between"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="w-full md:w-1/2 z-10 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-7xl font-black text-brand-dark leading-tight mb-6">
          <span className="hero-title-top block opacity-0">Welcome To</span>
          <span className="hero-title-bottom block text-brand-red opacity-0">Our Foodie</span>
        </h1>
        
        <p className="hero-subtitle text-gray-600 text-sm md:text-base mb-8 max-w-md leading-relaxed opacity-0">
          Experience the ultimate taste sensation. We serve freshly prepared, mouth-watering meals crafted with love and the finest ingredients, delivered fast to your door.
        </p>
        
        <div className="flex gap-4">
          <Link to="/menu" className="hero-btn bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/30 opacity-0">
            Menu
          </Link>
          <Link to="/contact" className="hero-btn border-2 border-gray-200 text-brand-dark px-8 py-3 rounded-full font-bold text-sm hover:border-brand-red hover:text-brand-red transition-colors opacity-0">
            Book a Table
          </Link>
        </div>
      </div>

      {/* Image Container with SVG Curved Text */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 relative">
        <div className="hero-img relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center opacity-0">
          
          {/* The Chef Image */}
          <img 
            src={chefImg} 
            alt="Foodie Chef" 
            className="w-[80%] h-[80%] object-contain drop-shadow-2xl relative z-10"
          />

          {/* SVG Rotating Text Ring */}
          <svg 
            viewBox="0 0 400 400" 
            className="absolute inset-0 w-full h-full z-0 pointer-events-none animate-[spin_25s_linear_infinite]"
          >
            <defs>
              <path 
                id="text-circle" 
                d="M 200, 200 m -170, 0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0" 
              />
            </defs>
            <text className="fill-brand-dark font-black text-[26px] uppercase tracking-[0.3em]">
              <textPath href="#text-circle" startOffset="0%">
                Foodie • Foodie • Foodie • Foodie •
              </textPath>
            </text>
          </svg>

          {/* Decorative background circle */}
          <div className="absolute inset-4 bg-brand-yellow/10 rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
}
