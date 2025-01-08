import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const cartCount = cartItems.length;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return <CartContext.Provider value={{ addItem, removeItem, cartItems, cartCount, totalAmount }}>{children}</CartContext.Provider>;
};
