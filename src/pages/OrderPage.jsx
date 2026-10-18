import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import { MapPin, Clock, CheckCircle2, Search, MapPinned, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { kenyanLocations } from '../data/kenyanLocations';
import Reveal from '../components/ui/Reveal';

export default function OrderPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [locationMode, setLocationMode] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredLocations = searchQuery 
    ? kenyanLocations.filter(loc => loc.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6)
    : [];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const deliveryFee = 2.00;
  const finalTotal = cartTotal + (cart.length > 0 ? deliveryFee : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedLocation) return; 
    setSubmitted(true);
    clearCart();
    
    // Smooth scroll to top so they see the success message instantly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (cart.length === 0 && !submitted) {
    return (
      <InnerPageLayout title="Checkout" subtitle="Your cart is empty.">
        <div className="w-full max-w-2xl mx-auto text-center py-20 px-4">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight mb-6">Add Items First</h2>
          <p className="text-gray-500 mb-8">You need to add food to your cart before you can checkout.</p>
          <Link to="/menu" className="bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
            Go to Menu
          </Link>
        </div>
      </InnerPageLayout>
    );
  }

  return (
    <InnerPageLayout 
      title="Checkout" 
      subtitle="Get your favorite meals delivered hot and fresh to your doorstep."
    >
      <div className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
        
        {submitted ? (
          <Reveal>
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tight mb-4">
                Order Received!
              </h2>
              <p className="text-gray-500 mb-8">
                Thank you! Our kitchen is preparing your food. We will contact you shortly to confirm delivery to <strong className="text-brand-dark">{selectedLocation}</strong>.
              </p>
              <Link to="/" className="bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
                Back to Home
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Side: Form */}
            <div className="w-full lg:w-3/5">
              
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Section 1: Contact Info */}
                <Reveal delay={0}>
                  <div>
                    <h2 className="text-xl font-black text-brand-dark uppercase tracking-tight mb-6 pb-2 border-b border-gray-200">
                      1. Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                        <input type="text" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                        <input type="tel" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white" placeholder="+254 700 000 000" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                      <input type="email" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white" placeholder="john@example.com" />
                    </div>
                  </div>
                </Reveal>

                {/* Section 2: Delivery Location */}
                <Reveal delay={100}>
                  <div className="relative z-20" ref={dropdownRef}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 pb-2 border-b border-gray-200 gap-4">
                      <h2 className="text-xl font-black text-brand-dark uppercase tracking-tight">
                        2. Delivery Location
                      </h2>
                      <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
                        <button 
                          type="button"
                          onClick={() => setLocationMode('search')}
                          className={`transition-colors ${locationMode === 'search' ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-gray-400 hover:text-gray-600 pb-1 border-b-2 border-transparent'}`}
                        >
                          Search
                        </button>
                        <button 
                          type="button"
                          onClick={() => setLocationMode('select')}
                          className={`transition-colors ${locationMode === 'select' ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-gray-400 hover:text-gray-600 pb-1 border-b-2 border-transparent'}`}
                        >
                          Select
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {locationMode === 'search' && (
                        <div className="relative">
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Type Town / Estate</label>
                          <div className="relative">
                            <input 
                              type="text"
                              value={searchQuery}
                              onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setIsDropdownOpen(true);
                                setSelectedLocation('');
                              }}
                              onFocus={() => setIsDropdownOpen(true)}
                              className="w-full border-2 border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white"
                              placeholder="e.g. Eldoret, Nairobi..."
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
                          </div>

                          {isDropdownOpen && searchQuery && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden z-50">
                              {filteredLocations.length > 0 ? (
                                filteredLocations.map((loc) => (
                                  <button
                                    key={loc}
                                    type="button"
                                    onClick={() => {
                                      setSelectedLocation(loc);
                                      setSearchQuery(loc);
                                      setIsDropdownOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 transition-colors border-b border-gray-50 last:border-0"
                                  >
                                    <MapPinned size={16} className="text-brand-red" />
                                    <span className="text-sm font-medium text-gray-700">{loc}</span>
                                  </button>
                                ))
                              ) : (
                                <div className="px-4 py-3 text-sm text-gray-500">No locations found.</div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {locationMode === 'select' && (
                        <div className="relative">
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Select Town / Estate</label>
                          <div className="relative">
                            <select 
                              value={selectedLocation}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                              className="w-full border-2 border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white appearance-none cursor-pointer"
                            >
                              <option value="">-- Choose Location --</option>
                              {kenyanLocations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Confirmed Location</label>
                        <div className={`w-full border-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${selectedLocation ? 'border-brand-red bg-red-50 text-brand-dark' : 'border-gray-200 bg-gray-50 text-gray-400'}`}>
                          {selectedLocation || "No location selected yet"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">House / Building / Landmark (Optional)</label>
                      <input type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white" placeholder="e.g. Near Rupa Mall" />
                    </div>
                    
                    <input type="text" required value={selectedLocation} className="opacity-0 h-0 w-0 absolute pointer-events-none" readOnly />
                  </div>
                </Reveal>

                {/* Section 3: Payment */}
                <Reveal delay={200}>
                  <div>
                    <h2 className="text-xl font-black text-brand-dark uppercase tracking-tight mb-6 pb-2 border-b border-gray-200">
                      3. Payment Method
                    </h2>
                    <div className="flex flex-col gap-3">
                      <label className="flex items-center gap-3 p-4 border-2 border-brand-red bg-red-50 rounded-xl cursor-pointer">
                        <input type="radio" name="payment" className="w-5 h-5 accent-brand-red" defaultChecked />
                        <span className="font-bold text-brand-dark text-sm">Cash on Delivery</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                        <input type="radio" name="payment" className="w-5 h-5 accent-brand-red" />
                        <span className="font-bold text-brand-dark text-sm">M-Pesa</span>
                      </label>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={300}>
                  <div>
                    <button type="submit" className="w-full bg-brand-red text-white font-black text-sm py-4 rounded-xl uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
                      Complete Order (${finalTotal.toFixed(2)})
                    </button>
                  </div>
                </Reveal>

              </form>
            </div>

            {/* Right Side: Order Summary */}
            <div className="w-full lg:w-2/5">
              <Reveal delay={150}>
                <div className="sticky top-28 pt-4 lg:pt-0">
                  <h3 className="text-xl font-black text-brand-dark uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">
                    Order Summary
                  </h3>

                  <div className="space-y-6 mb-10">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
                        <div className="flex items-center gap-4">
                          <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
                          <div>
                            <p className="font-bold text-brand-dark text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                          </div>
                        </div>
                        <p className="font-black text-brand-dark">${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-200 pt-6 mb-8">
                    <span className="font-black text-brand-dark uppercase tracking-wider">Total</span>
                    <span className="font-black text-brand-red text-2xl">${finalTotal.toFixed(2)}</span>
                  </div>

                  <div className="space-y-3 text-xs font-bold uppercase tracking-wider text-gray-400 mt-12">
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-brand-red" /> Delivering countrywide in Kenya
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-brand-red" /> Delivery in 30-45 mins
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>
            
          </div>
        )}
      </div>
    </InnerPageLayout>
  );
}
