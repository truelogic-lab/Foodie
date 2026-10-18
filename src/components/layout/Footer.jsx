import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#f8f9fa] pt-16 pb-8 px-4 md:px-8 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
        
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logoImg} alt="Foodie Logo" className="h-10 object-contain" />
            <span className="text-brand-red font-black text-3xl italic tracking-tighter">Foodie</span>
          </div>
          <p className="text-gray-500 text-xs mb-6 max-w-xs leading-relaxed">
            Serving happiness on a plate. Join us for an unforgettable culinary journey featuring the freshest ingredients and boldest flavors in town.
          </p>
          <h4 className="font-bold text-sm mb-1">Book A Table</h4>
          <p className="text-brand-red font-black mb-4">+254 116 726 222</p>
          <h4 className="font-bold text-sm mb-1">Opening Hours</h4>
          <p className="text-brand-red font-black">08:00 AM - 12:00 PM</p>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[10px] md:text-xs text-gray-500">
            <li><Link to="/about" onClick={scrollToTop} className="hover:text-brand-red transition-colors">About Us</Link></li>
            <li><Link to="/menu" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Menu</Link></li>
            <li><Link to="/testimonial" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Testimonial</Link></li>
            <li><Link to="/blog" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Blog</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark text-sm mb-4">Our Menu</h4>
          <ul className="space-y-2 text-[10px] md:text-xs text-gray-500">
            <li><Link to="/menu" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Burgers</Link></li>
            <li><Link to="/menu" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Desserts</Link></li>
            <li><Link to="/menu" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Pizza</Link></li>
            <li><Link to="/menu" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Pasta</Link></li>
            <li><Link to="/menu" onClick={scrollToTop} className="hover:text-brand-red transition-colors">Cold Drinks</Link></li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-bold text-brand-dark text-sm mb-4">Get In Touch</h4>
          <ul className="space-y-4 text-[10px] md:text-xs text-gray-500">
            <li className="flex gap-2 items-start">
              <MapPin size={14} className="text-brand-red shrink-0 mt-0.5" />
              <span>Eldoret, Kenya<br/>Near Rupa Mall</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={14} className="text-brand-red shrink-0" />
              <span>+254 116 726 222</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={14} className="text-brand-red shrink-0" />
              <span>foodie@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-auto flex bg-white rounded-full border border-gray-200 p-1 pl-4 items-center">
          <input type="email" placeholder="Enter Email Address" className="bg-transparent text-[10px] md:text-xs outline-none w-full md:w-64" />
          <button className="bg-[#1a1a1a] text-white text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">Subscribe</button>
        </div>
        
        <div className="flex gap-4 text-[10px] md:text-xs text-gray-500">
          <Link to="/privacy" onClick={scrollToTop} className="hover:text-brand-dark transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link to="/terms" onClick={scrollToTop} className="hover:text-brand-dark transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center mt-6 text-[10px] text-gray-400">
        Copyright 2023 Foodie. All Rights Reserved.
      </div>
    </footer>
  );
}
