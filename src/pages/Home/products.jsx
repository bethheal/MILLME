import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonial from "../Products/testimonial";
import { products } from "../../assets"; // make sure this is a general showcase image or grid fallback

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* PRODUCTS SECTION */}
      <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <p className="text-sm font-semibold uppercase text-[#107B98] mb-2 tracking-wider">
              Our Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Products You Can Trust and Love
            </h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              From refreshing shower gels to powerful cleaning agents, explore the full range of safe, effective, and FDA-approved products crafted with care by MILLME ENTERPRISE.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition"
            >
              View All Products →
            </motion.button>
          </motion.div>

          {/* RIGHT: Image or Product Display */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={products}
              alt="Millme Product Showcase"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <Testimonial />
    </>
  );
};

export default Products;
