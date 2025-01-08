import React from "react";

const CardDetail = ({title, desc}) => {
  return (
    <div className="flex flex-col bg-gray-200 px-4 py-4 rounded-lg w-52">
      <h2 className="font-semibold text-3xl">{title}</h2>
      <h2 className="font-light text-sm mt-2">{desc}</h2>
    </div>
  );
};

export default CardDetail;
