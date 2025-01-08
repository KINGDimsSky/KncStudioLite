import React from "react";

const CardDetail = ({title, desc}) => {
  return (
    <div className="flex flex-col bg-gray-200 px-4 py-4 rounded-lg md:w-52 w-32">
      <h2 className="font-semibold text-sm md:text-3xl">{title}</h2>
      <h2 className="font-light text-xs md:text-sm mt-2">{desc}</h2>
    </div>
  );
};

export default CardDetail;
