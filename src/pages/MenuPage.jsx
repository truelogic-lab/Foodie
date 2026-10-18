import React from 'react';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import ProductGrid from '../components/sections/ProductGrid';
import CategoryBar from '../components/sections/CategoryBar';

export default function MenuPage() {
  return (
    <InnerPageLayout 
      title="Our Menu" 
      subtitle="Explore our full range of burgers, pastas, combos, and refreshing drinks."
    >
      <div className="relative w-full bg-[#fdfdfd]">
        {/* Content Wrapper */}
        <div className="relative z-10">
          <CategoryBar />
          <ProductGrid />
        </div>
      </div>
    </InnerPageLayout>
  );
}
