import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Copy, Check, ChefHat } from 'lucide-react';
import chefImg from '../../assets/images/chef.png';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("+254 116 726 222").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-3 md:p-6 animate-in slide-in-from-bottom-full duration-500 ease-out">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:gap-6 relative">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 bg-white border border-gray-200 text-gray-500 hover:text-brand-red hover:border-brand-red rounded-full p-1.5 shadow-md transition-colors z-20"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Icon */}
        <div className="hidden md:flex shrink-0 w-16 h-16 bg-brand-red/10 rounded-full items-center justify-center overflow-hidden border-2 border-brand-red/20">
          <img src={chefImg} alt="Warren" className="w-full h-full object-cover scale-110 object-top" />
        </div>

        {/* Text Content */}
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight leading-tight mb-1">
            Need a Website <span className="text-brand-red">Like This?</span>
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">
            I build high-converting, modern websites for businesses. Let's take your brand online.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto shrink-0">
          {/* Copy Number Button */}
          <button 
            onClick={handleCopy}
            className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-colors group"
          >
            <span className="text-sm font-bold text-brand-dark">+254 116 726 222</span>
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} className="text-gray-400 group-hover:text-brand-dark" />
            )}
          </button>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/254116726222?text=Hi%20Warren,%20I%20need%20a%20website%20like%20Foodie." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/30 uppercase tracking-wider whitespace-nowrap"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
