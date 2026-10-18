import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Reveal({ children, delay = 0, className = "" }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref} 
      className={`reveal-base ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
