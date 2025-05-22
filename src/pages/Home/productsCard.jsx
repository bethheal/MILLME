import React from "react";

const ProductCard = ({ image, name}) => {
  return (
    <div className="bg-white border-2 border-yellow-400 p-4 rounded-none w-full max-w-[200px] shadow-md hover:shadow-lg transition relative">
      <img src={image} alt={name} className="w-12 h-12 mx-auto mb-2" />
      <h3 className="font-semibold text-sm text-gray-800">{name}</h3>
     
      <a href="/products" className="text-[#F6E116] text-xs underline hover:text-[#EAD685] flex items-center justify-center gap-1 mt-2">
        <span>&larr;</span> View Product
      </a>
    </div>
  );
};

export default ProductCard;