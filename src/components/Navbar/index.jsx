import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex bg-black items-center py-4">
      <MaxWidthWrapper className="flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <div className="flex gap-4 items-center ">
            <img onClick={() => (window.location.href = '/')} className=" w-10 md:w-12 cursor-pointer" src="/IconKnc.png" alt="KncStudio" />
            <h3 className="text-white font-bold text-2xl">KNCStudio</h3>
          </div>
        </div>

        <div className="flex items-center  text-white">
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
            <NavLink className="m-9  hover:text-violet-600 transition-colors" to="/sign-up" end>
              Create Account
            </NavLink>
          </div>
          <div className="border-r border-white/40">
            <NavLink className="m-9 bg-violet-600 py-2 px-4 hover:bg-violet-500  rounded-sm transition-colors" to="/sign-in" end>
              Sign In
            </NavLink>
          </div>
          <ShoppingCart className="ml-6 cursor-pointer  hover:text-violet-600 transition-colors" /> <span className="ml-3 flex items-center">0</span>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
