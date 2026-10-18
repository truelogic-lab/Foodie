import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('foodie-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('foodie-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    
    // Trigger notification
    setNotification(`Added ${product.name} to cart!`);
    setTimeout(() => setNotification(null), 2000);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, newQty) => {
    if (newQty < 1) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount, notification }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
