import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Copy, Check } from 'lucide-react';
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full relative animate-in zoom-in-95 duration-300 mt-10">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors bg-gray-50 hover:bg-gray-100 rounded-full p-2 z-20"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-6 pt-12 text-center">
          
          {/* Floating Chef Avatar */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl overflow-hidden z-10">
            <img 
              src={chefImg} 
              alt="Chef" 
              className="w-full h-full object-cover scale-110 object-top" 
            />
          </div>
          
          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight leading-tight mb-3 mt-4">
            Need a Website <br />
            <span className="text-brand-red">Like This?</span>
          </h2>
          
          <p className="text-gray-500 text-xs mb-6 px-2 leading-relaxed">
            I build high-converting, modern websites for businesses. Let's take your brand online.
          </p>

          {/* Copyable Phone Number */}
          <button 
            onClick={handleCopy}
            className="w-full bg-[#f8f9fa] hover:bg-gray-100 border border-gray-200 rounded-xl p-4 mb-6 transition-colors group flex flex-col items-center justify-center cursor-pointer"
          >
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
              {copied ? (
                <><Check size={12} className="text-green-500" /> <span className="text-green-500">Copied!</span></>
              ) : (
                <><Copy size={12} /> <span>Click to copy</span></>
              )}
            </p>
            <p className="text-lg font-black text-brand-dark tracking-wider group-hover:text-brand-red transition-colors">
              +254 116 726 222
            </p>
          </button>

          <a 
            href="https://wa.me/254116726222?text=Hi%20Warren,%20I%20need%20a%20website%20like%20Foodie." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/30 uppercase tracking-widest"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-5 text-[10px] text-gray-400 hover:text-brand-dark underline transition-colors font-medium"
          >
            No thanks, just browsing
          </button>
        </div>
      </div>
    </div>
  );
}
