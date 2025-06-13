import React, { useEffect } from "react";
import Testimonial from "../Products/testimonial";
import { useNavigate } from "react-router-dom";



const Products = () => {
  const navigate = useNavigate();




  return (
    <>
      {/* Products Section */}
      <div className="mt-12  mx-20">
        <h2 className=" font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        
        </h2>

        <div className="bg-gradient-to-b from-blue-500 to-blue-700 py-12 px-4 sm:px-6 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
            {/* Left Content */}
            <div className="md:w-1/3 font-body">
              <p className=" font-heading uppercase text-sm font-medium">Our Products</p>
              <h3 className="text-2xl sm:text-3xl font-bold my-4">Products You Can Buy</h3>
              <p className="text-sm mb-6 leading-relaxed">
                Discover items needed to clean schools and communities. Support
                by donating again and again.
              </p>

              <button
                onClick={() => navigate("/products")}
                className="relative cursor-pointer rounded-xl h-[40px] w-40 overflow-hidden border border-yellow-400 bg-white px-3 text-yellow-400 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-400 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-400 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">View Products →</span>
              </button>
            </div>

            {/* Right Content (Grid of Products) */}
           
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <Testimonial />
    </>
  );
};

export default Products;
