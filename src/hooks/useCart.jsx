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
    setCartItems((prevItems) => {
      const newCart = [...prevItems, product];
      return newCart;
    });
  };

  const cartCount = cartItems.length;

  return <CartContext.Provider value={{ addItem, cartCount }}>{children}</CartContext.Provider>;
};
