import React from 'react';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <InnerPageLayout 
      title="Contact Us" 
      subtitle="Have a question, feedback, or want to book a large table? Get in touch."
    >
      <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black uppercase mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-red transition-colors bg-transparent" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-red transition-colors bg-transparent" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                <textarea rows="4" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-red transition-colors bg-transparent" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-[#f8f9fa] p-8 md:p-12 border-l-4 border-brand-red">
            <h3 className="text-2xl font-black uppercase mb-8">Contact Information</h3>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <MapPin className="text-brand-red shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Location</h4>
                  <p className="text-gray-500 text-sm">Eldoret, Kenya<br/>Near Rupa Mall</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="text-brand-red shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Phone</h4>
                  <p className="text-gray-500 text-sm">+254 116 726 222</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Mail className="text-brand-red shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">foodie@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Clock className="text-brand-red shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Opening Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Sun: 8:00am - 12:00pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
