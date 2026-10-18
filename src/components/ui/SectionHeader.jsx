import React from 'react';

export default function SectionHeader({ title, highlight, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 uppercase">
        {title} <span className="text-brand-red">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
