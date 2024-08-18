// CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const CartContext = createContext();

// Create a Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  const getCartItems = () => cart;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use the Cart Context
export const useCart = () => useContext(CartContext);
