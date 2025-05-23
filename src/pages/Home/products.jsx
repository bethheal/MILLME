import React from "react";
import productImage1 from "../../assets/images/product.jpeg";
import Testimonial from "../Products/testimonial";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productsCard";

const products = [
  { image: productImage1, name: "Solar Lamp" },
  { image: productImage1, name: "Water Pump" },
  { image: productImage1, name: "Rice Harvester" },
  { image: productImage1, name: "Chalkboard" },
  { image: productImage1, name: "Tablet" },
  { image: productImage1, name: "Wheelbarrow" },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Products Section */}
      <div className="mt-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="border-t border-b border-[#EAD685] px-2">
            Products
          </span>
        </h2>

        <div className="bg-gradient-to-b from-blue-500 to-blue-700 py-12 px-4 sm:px-6 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
            {/* Left Content */}
            <div className="md:w-1/3">
              <p className="uppercase text-sm font-medium">Our Products</p>
              <h3 className="text-2xl sm:text-3xl font-bold my-4">Products You Can Buy</h3>
              <p className="text-sm mb-6 leading-relaxed">
                Discover items needed to clean schools and communities. Support
                by donating again and again.
              </p>

              <button
                onClick={() => navigate("/products")}
                className="relative cursor-pointer rounded-full h-[40px] w-40 overflow-hidden border border-[#F6E116] bg-white px-3 text-[#F6E116] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#F6E116] before:transition-all before:duration-500 hover:text-white hover:shadow-[#F6E116] hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">View All →</span>
              </button>
            </div>

            {/* Right Content (Grid of Products) */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <Testimonial />
    </>
  );
};

export default Products;
