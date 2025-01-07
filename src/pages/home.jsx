import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Your Marketplace for high quality <span className="text-violet-600">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-white/70">Welcome to KncStudio. Every asset on our platform is verified by our team to ensure our highest quality standards.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center ">
            <NavLink to="/products" className="bg-violet-600 text-white p-3 rounded-md hover:bg-violet-500 transition-colors">
              Browse Trending
            </NavLink>
            <a href="#" className="text-white hover:underline transition-all">
              Our quality promise &rarr;
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Home;
