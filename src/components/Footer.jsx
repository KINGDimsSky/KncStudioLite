import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import IconKnc from '../../public/IconKnc.png';  // From feature branch
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex flex-col h-[29rem] bg-black">
      <MaxWidthWrapper className="flex flex-col items-center justify-center border-t border-gray-700">
        <div className="mt-24">
          <img className="w-12" src={IconKnc} alt="" />  {/* Updated with IconKnc from feature branch */}
        </div>
        <div className="titleFooter">
          <h2 className="text-white mt-11">Become a Seller</h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-300 mt-4 tracking-tight font-extralight w-[29rem] text-center">
            If you'd like to sell high-quality digital products, you can do so
          </p>
          <div className="flex gap-1 ">
            <p className="text-gray-300 tracking-tight font-extralight">
              in minutes. <span className="font-bold text-white">Get Started</span>
            </p>
            <ArrowRight className="text-white w-4" />
          </div>
        </div>
        <div className="flex justify-between w-full mt-36">
          <p className="text-gray-300 font-extralight tracking-tight">© 2025 All Rights Reserved</p>
          <div className="flex text-sm gap-8 text-gray-300 font-extralight tracking-tight">
            <a href="">Terms</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
