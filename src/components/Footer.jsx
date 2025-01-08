import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col py-8 md:py-11 ">
      <MaxWidthWrapper className="flex flex-col items-center justify-center border-t border-gray-700">
        <div className="mt-24">
          <img className=" w-10 md:w-12" src="/IconKnc.png" alt="" />
        </div>
        <div className="text-center relative mx-auto max-w-sm flex flex-col gap-2 mt-6 md:mt-10">
          <h3 className="font-semibold text-white">Become a seller</h3>
          <p className="mt-2 text-sm text-white/70">
            If you&apos;d like to sell high-quality digital products, you can do so in minutes.{' '}
            <NavLink to="/sign-in" className="whitespace-nowrap font-medium text-white hover:text-white/90">
              Get started &rarr;
            </NavLink>
          </p>
        </div>
        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70 ">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-white/70 hover:text-gray-600">
                Terms
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-gray-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-gray-600">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
