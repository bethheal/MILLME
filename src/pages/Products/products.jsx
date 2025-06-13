import React from "react";
import productImage1 from "../../assets/images/product.jpeg";
import ProductCard from "./productsCard";
import Testimonial from "./testimonial";
import { motion } from "framer-motion";

// Sample static products
const sampleProducts = [
  {
    name: "Brown Rice",
    image: productImage1,
    price: 30,
    description: "Nutritious brown rice for healthy meals.",
  },
  {
    name: "Corn Grits",
    image: productImage1,
    price: 18,
    description: "Locally processed yellow corn grits.",
  },
  {
    name: "Millet Mix",
    image: productImage1,
    price: 25,
    description: "Organic millet blend rich in fiber.",
  },
];

const Products = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative mx-6 md:mx-20 h-[50vh] bg-cover bg-center flex items-center justify-center rounded-xl shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${productImage1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6 max-w-4xl text-white"
        >
          <h2 className="text-5xl font-bold mb-4">WHY BUY FROM US</h2>
          <p className="text-lg leading-relaxed font-light">
            At Millie Dey Millie Products, we bring you the finest grains, cereals,
            and processed foods. Empower families with healthy food choices while
            preserving local agricultural heritage.
          </p>
        </motion.div>
      </div>

      {/* Product Grid Section */}
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold my-4">Products You Can Buy</h2>
            <p className="text-sm max-w-xl">
              Discover essential items for schools and communities. Support this
              initiative by donating or purchasing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sampleProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Testimonial />
      </motion.div>
    </>
  );
};

export default Products;
