import React from 'react';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import AboutSection from '../components/sections/AboutSection';

export default function AboutPage() {
  return (
    <InnerPageLayout 
      title="About Us" 
      subtitle="Learn more about the passion and fresh ingredients behind Foodie."
    >
      <AboutSection />
      
      <section className="w-full bg-[#f8f9fa] py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-l-4 border-brand-red pl-6">
            <h3 className="text-2xl font-black uppercase mb-3">Our Mission</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To serve the highest quality food fast, fresh, and with a smile. We believe in using locally sourced ingredients to support our community.
            </p>
          </div>
          <div className="border-l-4 border-brand-yellow pl-6">
            <h3 className="text-2xl font-black uppercase mb-3">Our Vision</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To become the most loved fast-food brand by consistently delivering exceptional taste and unmatched customer service.
            </p>
          </div>
          <div className="border-l-4 border-brand-dark pl-6">
            <h3 className="text-2xl font-black uppercase mb-3">Our Values</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Quality, integrity, and community. We never compromise on the freshness of our food or the respect we show our guests.
            </p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
