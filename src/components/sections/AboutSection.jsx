import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { animate, utils } from 'animejs';

export default function AboutSection() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to trigger animation when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && textRef.current) {
      // Reset text to empty before typing
      textRef.current.innerHTML = '';
      
      // Typewriter animation
      animate(textRef.current, {
        innerHTML: {
          from: '',
          to: 'Developed by warren',
        },
        duration: 2000,
        ease: 'linear',
        cursor: '█',
      });
    }
  }, [isVisible]);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-0 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-0 md:gap-16">
        
        {/* Video Container with Overlay Text */}
        <div 
          ref={containerRef}
          className="w-full md:w-1/2 h-[500px] md:h-[600px] relative overflow-hidden flex flex-col items-center justify-center"
        >
          
          {/* The Video (Opacity lowered slightly) */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/about-video.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none select-none">
            {/* The Invisible-Style Red Text */}
            <h2 className="text-[100px] md:text-[160px] font-black text-brand-red uppercase tracking-tighter opacity-40 mix-blend-multiply leading-none mb-4">
              Foodie
            </h2>
            
            {/* The Typewriter Text */}
            <p 
              ref={textRef}
              className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase drop-shadow-lg"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Developed by warren
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 px-4 md:px-0 mt-10 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase">
            About <span className="text-brand-red">Foodie</span>
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-lg">
            Discover delicious meals, explore exciting flavors, and find your next favorite dish. Fresh ingredients, great taste, and unforgettable food experiences await you.
          </p>
          
          <p className="text-gray-500 text-xs md:text-sm mb-8 leading-relaxed max-w-lg">
            We are dedicated to serving you the best. From our kitchen to your table, every meal is prepared with passion and the highest quality standards.
          </p>

          <ul className="space-y-4 mb-10">
            {['Delicious & Healthy Foods', 'Best Price & Offers', 'Made By Fresh Ingredients'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-semibold text-sm md:text-base">
                <span className="w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center font-bold shrink-0">
                  <Check size={14} />
                </span> {item}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4">
            <button className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/30">
              Order Now
            </button>
            <button className="border-2 border-gray-200 text-brand-dark px-8 py-3 rounded-full font-bold text-sm hover:border-brand-red hover:text-brand-red transition-colors">
              Read More
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
