import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronRight } from 'lucide-react';

export default function InnerPageLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <TopBar />
      <Navbar />
      
      <div className="bg-[#f8f9fa] border-b border-gray-200 py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">
          <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-brand-dark">{title}</span>
        </div>
      </div>

      <main className="flex-grow w-full">
        <div className="bg-brand-dark text-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">{title}</h1>
            {subtitle && <p className="text-gray-300 max-w-2xl text-sm md:text-base">{subtitle}</p>}
          </div>
        </div>
        
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
