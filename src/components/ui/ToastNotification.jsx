import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ToastNotification() {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[10000] animate-in slide-in-from-top-4 fade-in duration-300">
      <div className="bg-white border border-gray-100 shadow-xl rounded-full py-3 px-6 flex items-center gap-3">
        <CheckCircle2 className="text-green-500" size={20} />
        <span className="font-bold text-sm text-brand-dark tracking-wide">{notification}</span>
      </div>
    </div>
  );
}
