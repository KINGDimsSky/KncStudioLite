import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ id, image, title, description, price }) => {
  return (
    <div className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <NavLink to={`/products/${id}`}>
        <img src={image} alt={title} className="h-40 sm:h-48 md:h-64 w-full object-cover rounded-md" />
      </NavLink>
      <div className="flex flex-col gap-3 py-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white truncate">{title}</h2>
        <p className="text-sm md:text-base text-white/60 line-clamp-2">{description}</p>
        <div className="text-sm text-white/60 md:text-base">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Card;
