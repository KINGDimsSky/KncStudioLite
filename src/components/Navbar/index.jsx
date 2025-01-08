import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { ShoppingCart, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import CartDrawer from '../CartDrawer';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex bg-black items-center py-4">
      <MaxWidthWrapper className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <img onClick={() => (window.location.href = '/')} className="w-10 md:w-12 cursor-pointer" src="/IconKnc.png" alt="KncStudio" />
          <NavLink to="/" className="text-white font-bold text-2xl hidden md:block">
            KNCStudio
          </NavLink>
        </div>

        <div className="items-center text-white hidden md:flex">
          <div className="flex gap-9">
            <NavLink to="/about-us" className="group relative">
              <p className="text-white hover:text-violet-600 transition-colors">About Us</p>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to="/products" className="group relative">
              <p className="text-white hover:text-violet-600 transition-colors">Products</p>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </div>
          <div className="border-r border-white/40">
            <NavLink className="m-9  hover:text-violet-600 transition-colors" to="/auth/sign-up" end>
              Create Account
            </NavLink>
          </div>
          <div className="border-r border-white/40">
            <NavLink className="m-9 bg-violet-600 py-2 px-4 hover:bg-violet-500 rounded-sm transition-colors" to="/auth/sign-in" end>
              Sign In
            </NavLink>
          </div>
          <div className="flex gap-2 cursor-pointer" onClick={() => setCartOpen(true)}>
            <ShoppingCart className="ml-6 hover:text-violet-600 transition-colors" />
            <span className="bg-violet-600 text-white rounded-full text-xs px-2 py-1">{cartCount}</span>
          </div>
        </div>

        <div className="flex items-center md:hidden gap-4">
          <ShoppingCart onClick={() => setCartOpen(true)} className="text-white hover:text-violet-600 transition-colors cursor-pointer" />
          <span className="bg-violet-600 text-white rounded-full text-xs px-2 py-1">{cartCount}</span>
          <Menu onClick={() => setMenuOpen(!isMenuOpen)} className="text-white hover:text-violet-600 transition-colors cursor-pointer " />
        </div>
      </MaxWidthWrapper>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 z-40 shadow-md md:hidden">
          <NavLink to="/about-us" className="hover:text-violet-600 transition-colors" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/products" className="hover:text-violet-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/auth/sign-up" className="hover:text-violet-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Create Account
          </NavLink>
          <NavLink to="/auth/sign-in" className="bg-violet-600 py-2 px-4 hover:bg-violet-500 rounded-sm transition-colors" onClick={() => setMenuOpen(false)}>
            Sign In
          </NavLink>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Navbar;
