import React, { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const idx = prev.findIndex(p => p.id === product.id);
      if (idx === -1) return [...prev, { ...product, qty: 1 }];
      const copy = [...prev];
      copy[idx].qty += 1;
      return copy;
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const increaseQty = (id) => setCart(prev => prev.map(p => p.id===id?{...p, qty:p.qty+1}:p));
  const decreaseQty = (id) => setCart(prev => prev.map(p => {
    if (p.id===id) return p.qty>1?{...p, qty:p.qty-1}:p;
    return p;
  }).filter(Boolean));

  const clearCart = () => setCart([]);

  const total = cart.reduce((s,p)=> s + p.price * p.qty, 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, total
    }}>
      {children}
    </CartContext.Provider>
  );
}
