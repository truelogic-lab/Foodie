import React from 'react';

export default function DeliveryInfo() {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 uppercase leading-tight">
            Choose Your<br/>Favourite Food
          </h2>
          <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
            Browse our mouth-watering menu and pick exactly what you're craving. From juicy burgers to fresh pasta, we've got something for everyone.
          </p>
        </div>
        
        <div className="w-48 shrink-0">
           <img src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png" alt="Delivery" className="w-full drop-shadow-xl" />
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 uppercase leading-tight">
            Order Online<br/>and Get Fast<br/>Delivery
          </h2>
          <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
            Hot, fresh, and right to your door. Place your order online and track it as we rush your favorite meals straight to you.
          </p>
        </div>
      </div>
    </section>
  );
}
