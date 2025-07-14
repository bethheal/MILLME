// Home.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { bannerImg, logo } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AboutUsSection from "./about";
import Products from "./products";
import PageWrapper from "../../components/PageWrapper";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-[#F7F9FC] via-white to-[#F9F9F9] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 relative overflow-hidden">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl z-10 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold text-[#107B98] leading-tight mb-6">
            Clean Living, <br />
            <span className="text-yellow-400">Trusted Care</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            Discover safe, effective, and affordable care products designed to refresh your home and body—crafted by Ghanaians for Ghanaians.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition"
          >
            Explore Products <ChevronRight className="inline-block ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[500px] relative"
        >
          <img
            src={logo}
            alt="Millme Logo"
            className="rounded-full shadow-xl w-72 mx-auto md:mx-0"
          />
          <div className="absolute inset-0 bg-black/10 rounded-full" />
        </motion.div>
      </section>

      {/* About and Product Sections */}
      <AboutUsSection />
      <Products />

      {/* Scroll-to-top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showArrow ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-yellow-400 text-white rounded-full shadow-lg hover:bg-yellow-500 transition"
      >
        <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
      </motion.button>
    </PageWrapper>
  );
};

export default Home;
