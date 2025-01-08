import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, removeItem } = useCart();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (isOpen) {
      setCurrentPath(location.pathname);
    }
  }, [isOpen, location.pathname]);

  useEffect(() => {
    if (isOpen && location.pathname !== currentPath) {
      onClose();
    }
  }, [location.pathname, isOpen, currentPath, onClose]);

  if (!isOpen) return null;

  const handleCheckout = () => {
    navigate('/cart');
  };

  return (
    <div className="fixed top-0 right-0 w-full md:w-2/5 bg-black text-white h-full shadow-lg p-4 z-50">
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl hover:text-red-500 transition-colors">
        &times;
      </button>

      <h2 className="text-lg md:text-xl mb-4">Cart ({cartItems.length})</h2>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <div className="flex justify-between items-center">
                <div>
                  <img src={item.image} alt={item.logo} className="w-12 h-12 md:w-20 md:h-20 object-cover rounded" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="font-bold text-white">{item.title}</p>
                  <p className="text-sm text-white/70">{item.category}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => removeItem(index)} className="text-red-600 hover:text-red-400 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-white/70 text-sm">Shipping: Free</p>
                <p className="text-white/70 text-sm">Transaction Fee: $1.00</p>
                <p className="font-bold mt-2">Total: ${(item.price + 1.0).toFixed(2)}</p>
                <button onClick={handleCheckout} className="bg-violet-600 py-2 px-4 w-full rounded mt-4 hover:bg-violet-500">
                  Continue to Checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img src="/grapy-olshop.png" alt="Empty Cart" className="w-40 h-40 object-contain" />
          <p className="text-white/70 mt-4">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
