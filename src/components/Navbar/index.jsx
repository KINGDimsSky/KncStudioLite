import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import IconKnc from '../../assets/IconKnc.png';
import { ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex bg-black items-center h-14">
      <MaxWidthWrapper className="flex justify-between items-center">
        <img onClick={() => (window.location.href = '/')} className="w-8 cursor-pointer" src={IconKnc} alt="KncStudio" />
        <div className="flex items-center  text-white">
          <div className="border-r">
            <NavLink className="m-9 hover:text-purple-300" to="/sign-in" end>
              Sign In
            </NavLink>
          </div>
          <div className="border-r">
            <NavLink className="m-9  hover:text-purple-300" to="/sign-up" end>
              Create Account
            </NavLink>
          </div>
          <ShoppingCart className="ml-6 cursor-pointer  hover:text-purple-300" /> <span className="ml-3 flex items-center">0</span>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
