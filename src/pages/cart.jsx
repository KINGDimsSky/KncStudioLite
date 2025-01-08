import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cartItems, removeItem, totalAmount } = useCart();

  const transactionFee = 1.0;

  return (
    <div className="min-h-screen flex flex-col px-4 md:px-24 pt-20 bg-black text-white">
      <header className="shadow-md p-4 md:p-6">
        <h1 className="text-lg md:text-2xl font-semibold">Shopping Cart</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 p-4 border-y border-white/70">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 rounded-lg ">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-sm md:text-base">{item.title}</h3>
                        <p className="text-white/70 text-sm">Category: {item.category}</p>
                        <p className="text-white/70 text-sm">${item.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm md:text-base">${item.price}</p>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 text-sm hover:underline mt-2">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 p-6  rounded-lg shadow-lg">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-white/70">Subtotal</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white/70">Flat Transaction Fee</p>
                  <p>${transactionFee.toFixed(2)}</p>
                </div>
              </div>
              <hr className="my-6 border-white/20" />
              <div className="flex justify-between text-lg font-semibold">
                <p>Order Total</p>
                <p>${(totalAmount + transactionFee).toFixed(2)}</p>
              </div>
              <button onClick={() => alert('Proceed to Checkout')} className="w-full bg-violet-600 text-white py-3 rounded-md mt-6 hover:bg-purple-700">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p>Your cart is empty!</p>
            <a href="/products" className="text-blue-500 hover:underline mt-2 block">
              Continue Shopping
            </a>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
