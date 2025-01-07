import React, { useState } from 'react';
import { products } from '../lib/data';
import Card from '../components/Card';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory);

  return (
    <MaxWidthWrapper className="flex flex-col bg-black">
      <div className="flex gap-4 mt-12">
        <button className={`text-xl pr-4 border-r border-white/70 transition-colors ${activeCategory === 'All' ? 'text-white' : 'text-white/70'}`} onClick={() => setActiveCategory('All')}>
          All
        </button>
        <button className={`text-xl pr-4 border-r border-white/70 transition-colors ${activeCategory === 'UI' ? 'text-white' : 'text-white/70'}`} onClick={() => setActiveCategory('UI')}>
          UI
        </button>
        <button className={`text-xl pr-4 transition-colors ${activeCategory === 'Icons' ? 'text-white' : 'text-white/70'}`} onClick={() => setActiveCategory('Icons')}>
          Icons
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {filteredProducts.map((product) => (
          <Card id={product.id} key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Products;
