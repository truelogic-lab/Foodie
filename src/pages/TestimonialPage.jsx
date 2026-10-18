import React from 'react';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import Testimonials from '../components/sections/Testimonials';

export default function TestimonialPage() {
  return (
    <InnerPageLayout 
      title="Testimonials" 
      subtitle="Don't just take our word for it. See what our customers have to say."
    >
      <Testimonials />
      <section className="w-full py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase mb-6">Had a great experience?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm">We'd love to hear from you. Leave us a review on Google or drop us a line.</p>
          <a href="/contact" className="inline-block bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </InnerPageLayout>
  );
}
