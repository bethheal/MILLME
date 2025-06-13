import React from "react";

const ProductCard = ({ product }) => {
    const { name, image, price, description } = product;

  return (
    <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-800 mt-2 mb-3">GHS {product.price}</p>

        <button
          disabled
          className="w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
        >
          Buy Now (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
