import React from 'react';
import InnerPageLayout from '../components/layout/InnerPageLayout';

export default function PrivacyPage() {
  return (
    <InnerPageLayout 
      title="Privacy Policy" 
      subtitle="Last updated: October 2023"
    >
      <section className="w-full py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include your name, email address, phone number, and payment information.</p>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to process your orders, communicate with you about your orders, and improve our services. We may also use your information to send you promotional offers, but you can opt out at any time.</p>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">3. Sharing of Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business.</p>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">4. Security</h2>
            <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access. However, no internet transmission is completely secure.</p>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-brand-dark mb-3">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at foodie@gmail.com.</p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
