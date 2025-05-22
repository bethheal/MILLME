import React from "react";
import productImage1 from "../../assets/images/product.jpeg";
import ProductCard from "./productsCard";
import Testimonial from "./testimonial"; 
import { useNavigate } from "react-router-dom";

const products = [
  { image: productImage1, name: "Solar Lamp", price: 120 },
  { image: productImage1, name: "Water Pump", price: 300 },
  { image: productImage1, name: "Rice Harvester", price: 950 },
  { image: productImage1, name: "Chalkboard", price: 60 },
  { image: productImage1, name: "Tablet", price: 210 },
  { image: productImage1, name: "Wheelbarrow", price: 85 },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${productImage1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-4xl text-white">
          <h2 className="text-5xl font-bold mb-6">WHY BUY FROM US</h2>
          <p className="text-lg leading-relaxed font-light">
            At Millie Dey Millie Products, we bring you the finest grains, cereals,
            and processed foods. Empower families with healthy food choices while
            preserving local agricultural heritage.
          </p>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl font-bold my-4">Products You Can Buy</h2>
            <p className="text-sm max-w-xl">
              Discover essential items for schools and communities. Support this
              initiative by donating or purchasing.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonial />
    </>
  );
};

export default Products;
