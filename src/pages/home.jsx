import React from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { NavLink } from 'react-router-dom';
import { products } from '../lib/data';
import Card from '../components/Card';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';
import { ToastContainer } from 'react-toastify';

const perks = [
  {
    name: 'Instant Delievery',
    Icon: ArrowDownToLine,
    description: 'Get your assets delivered to your email in seconds and donwload them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description: 'Every assets on our platform is verified by our teams to ensure our highest quality standards. Not happy? We offer a 30-day refund guaranteed.',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

const Home = () => {
  const topProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-black">
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Your Marketplace for high quality <span className="text-violet-600">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-white/70">Welcome to KncStudio. Every asset on our platform is verified by our team to ensure our highest quality standards.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
            <NavLink to="/products" className="bg-violet-600 text-white p-3 rounded-md hover:bg-violet-500 transition-colors">
              Browse Trending
            </NavLink>
            <a href="#service" className="text-white hover:underline transition-all">
              Our quality promise &rarr;
            </a>
          </div>
        </div>

        <div className="flex justify-between mt-12 items-center ">
          <h1 className="text-white font-bold text-2xl md:text-4xl">Brand new</h1>
          <NavLink to="/products">
            <p className="text-violet-600 text-sm md:text-base hover:underline transition-all">See all collections &rarr;</p>
          </NavLink>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 ">
          {topProducts.map((product) => (
            <Card id={product.id} key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} />
          ))}
        </div>
        <div className="border-b border-gray-700 mt-20" />
      </MaxWidthWrapper>

      <section id="service" className="bg-black py-20 ">
        <MaxWidthWrapper classname="">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center" key={perk.name}>
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-violet-300 text-violet-700">{<perk.Icon className="w-1/3 h-1/3" />}</div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-white">{perk.name}</h3>
                  <p className="mt-3 text-sm text-white/70">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Home;
