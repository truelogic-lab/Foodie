import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function Reveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = "" 
}) {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    let initialProps = { opacity: 0 };
    
    switch (direction) {
      case 'up':
        initialProps.y = 60;
        break;
      case 'down':
        initialProps.y = -60;
        break;
      case 'left':
        initialProps.x = -80;
        break;
      case 'right':
        initialProps.x = 80;
        break;
      default:
        break;
    }

    // Set initial styles via inline styles to avoid glitches
    if (initialProps.x) el.current.style.transform = `translateX(${initialProps.x}px)`;
    if (initialProps.y) el.current.style.transform = `translateY(${initialProps.y}px)`;
    el.current.style.opacity = '0';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el.current, {
            x: 0,
            y: 0,
            opacity: [0, 1],
            duration: 900,
            delay: delay,
            ease: 'out(3)',
          });
          observer.unobserve(el.current);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el.current);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
