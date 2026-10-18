import React from 'react';
import InnerPageLayout from '../components/layout/InnerPageLayout';

export default function TermsPage() {
  return (
    <InnerPageLayout 
      title="Terms of Use" 
      subtitle="Last updated: October 2023"
    >
      <section className="w-full py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">2. Use of License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Foodie's website for personal, non-commercial transitory viewing only.</p>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">3. Disclaimer</h2>
            <p>The materials on Foodie's website are provided on an 'as is' basis. Foodie makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">4. Limitations</h2>
            <p>In no event shall Foodie or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Foodie's website.</p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
