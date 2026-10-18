import React from 'react';
import { Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="bg-[#f8f9fa] text-xs py-2 px-4 md:px-8 flex justify-between items-center text-gray-600 border-b border-gray-200">
      <div className="hidden md:flex items-center gap-2">
        <Clock size={14} /> Mon - Sun: 8:00am - 12:00pm
      </div>
      <div className="flex gap-4 font-semibold items-center">
        <Link to="/contact" className="hover:text-brand-red transition-colors flex items-center gap-1">
          <Phone size={12} /> Support
        </Link>
        <span className="text-gray-300">|</span>
        <Link to="/menu" className="hover:text-brand-red transition-colors">
          Order Online
        </Link>
      </div>
    </div>
  );
}
