import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Customer" 
          highlight="Feedbacks" 
          subtitle="Don't just take our word for it. See what our happy customers have to say about their Foodie experience."
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-4 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-3 md:gap-6 items-start">
              <div className="text-brand-yellow flex mt-1 shrink-0">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} className="md:w-4 md:h-4" fill="currentColor" />)}
              </div>
              <div>
                <p className="text-gray-500 text-[10px] md:text-sm italic mb-3 md:mb-6 leading-relaxed line-clamp-4 md:line-clamp-none">
                  "The food is always hot, fresh, and packed with flavor. The delivery is incredibly fast and the customer service is top-notch. Foodie is my go-to for a great meal!"
                </p>
                <div className="flex items-center gap-2 md:gap-4">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-brand-dark text-[10px] md:text-sm">Paul K. Selden</h4>
                    <p className="text-[8px] md:text-xs text-gray-400">Organizer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
