import { FaCheckCircle } from "react-icons/fa";
import { flyer, products } from "../../assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F7F9FC] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* LEFT: Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2 flex justify-center items-center"
      >
        {/* Back Image */}
        <div className="absolute -left-10 top-16 z-0">
          <img
            src={flyer}
            alt="Cleaning Action"
            className="w-60 h-72 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Front Image */}
        <div className="relative z-10">
          <img
            src={products}
            alt="Product Showcase"
            className="w-64 h-72 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Floating Experience Box */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-xl z-20 text-center">
          <h2 className="text-3xl font-bold text-[#107B98]">20+</h2>
          <p className="text-sm text-gray-700">Years of Experience</p>
        </div>
      </motion.div>

      {/* RIGHT: Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 font-body"
      >
        <p className="text-sm font-semibold text-[#107B98] uppercase mb-2 tracking-wider">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          Ghana’s Trusted Cleaning & Personal Care Brand Since 2001
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-base">
          <span className="font-semibold text-[#107B98]">MILLME ENTERPRISE</span> is a proudly Ghanaian brand committed to health, hygiene, and local empowerment. We manufacture top-quality liquid soap, shower gel, fabric softener, floor cleaner, bleach, and washing powder — all{" "}
          <span className="font-semibold">FDA-approved</span> for safety and excellence.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 mb-8">
          {[
            "Proudly Ghanaian-owned and operated",
            "Wide range of essential hygiene products",
            "All products are FDA-approved and safe",
            "Committed to job creation and community care",
          ].map((text, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-yellow-400 mt-1 mr-2" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/about")}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition"
        >
          Learn More About Us
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
