import React from "react";
import productImage1 from "../../assets/images/product.jpeg";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="relative bg-[#f5faff] py-24 px-6 text-center overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#107B98] text-sm font-semibold uppercase mb-2 tracking-widest">
          Testimonial
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          What Our Clients Say
        </h2>
      </motion.div>

      {/* Main Testimonial Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white shadow-xl rounded-xl p-8 max-w-2xl mx-auto z-10"
      >
        <p className="text-gray-700 text-base md:text-lg font-body mb-6">
          “<span className="italic text-[#107B98]">MILLME knows what they’re doing!</span> Their products actually work — no harsh smells, no stress. Just clean everything and go. I’ve got my friends hooked too. It’s giving fresh and fearless.”
        </p>

        <div className="flex flex-col items-center gap-2">
          <img
            src="/headshot.svg"
            alt="Kwame O., Cape Coast"
            className="w-14 h-14 rounded-full border-2 border-blue-300"
          />
          <h4 className="font-semibold text-gray-800 text-sm">Kwame O., Cape Coast</h4>
        </div>
      </motion.div>

      {/* Floating Client Avatars (Decorative) */}
      {[
        { left: "10", top: "1/2", translateY: "-1/2" },
        { left: "20", top: "1/4" },
        { right: "20", top: "1/4" },
        { right: "10", top: "1/2", translateY: "-1/2" },
        { left: "15%", bottom: "20%" },
        { right: "15%", bottom: "20%" },
      ].map((style, i) => (
        <img
          key={i}
          src={productImage1}
          alt="client"
          className={`w-10 h-10 rounded-full absolute z-0 ${
            style.left ? `left-${style.left}` : ""
          } ${style.right ? `right-${style.right}` : ""} ${
            style.top ? `top-${style.top}` : ""
          } ${style.bottom ? `bottom-[${style.bottom}]` : ""} ${
            style.translateY ? `transform -translate-y-1/2` : ""
          } opacity-70 shadow-md`}
        />
      ))}
    </div>
  );
};

export default Testimonial;
