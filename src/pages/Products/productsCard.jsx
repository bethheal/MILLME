import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, image, price, description } = product;
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/contact");
  };

  return (
    <div className="group bg-white text-black rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Product Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#107B98] mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <p className="text-base font-semibold text-gray-800 mb-4">GHS {price}</p>

        {/* Enabled Buy Button */}
        <button
          onClick={handleBuyClick}
          className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
