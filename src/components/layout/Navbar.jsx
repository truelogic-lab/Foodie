import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Phone, ChevronRight } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      scrollToTop();
    }
  };

  return (
    <header className="w-full px-4 md:px-8 py-4 bg-white flex justify-between items-center shadow-sm sticky top-0 z-50">
      <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-2">
        <img src={logoImg} alt="Foodie Logo" className="h-10 md:h-12 object-contain" />
        <span className="text-brand-red font-black text-3xl italic tracking-tighter">Foodie</span>
      </Link>
      
      <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm">
        <Link to="/" onClick={() => handleNavClick('/')} className="text-brand-red hover:text-brand-red/80 flex items-center gap-1">Home <ChevronRight size={14} className="rotate-90" /></Link>
        <Link to="/menu" onClick={() => handleNavClick('/menu')} className="hover:text-brand-red transition-colors">Menu</Link>
        <Link to="/order" onClick={() => handleNavClick('/order')} className="hover:text-brand-red transition-colors">Order Food</Link>
        <Link to="/blog" onClick={() => handleNavClick('/blog')} className="hover:text-brand-red transition-colors">Blog</Link>
        <Link to="/about" onClick={() => handleNavClick('/about')} className="hover:text-brand-red transition-colors">About</Link>
      </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden md:flex items-center gap-2 text-brand-red font-bold text-sm">
          <Phone size={16} /> +254 116 726 222
        </div>
        
        <Link to="/cart" onClick={scrollToTop} className="relative p-2 hover:text-brand-red transition-colors">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/order" onClick={() => handleNavClick('/order')} className="bg-brand-red text-white px-4 md:px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
          Order Online
        </Link>
      </div>
    </header>
  );
}
