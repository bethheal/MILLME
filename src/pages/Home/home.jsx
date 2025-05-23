import React, { useEffect, useState } from "react";
import "../../App.css";
import AboutUsSection from "./about";
import Products from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#7AA7FC] min-h-[70vh] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 lg:px-20 py-10">
        {/* Left Text Block */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-text-color font-heebo font-semibold mb-6">
            Millie Dey Millie Products
          </h1>
          <p className="text-base sm:text-lg text-black font-mulish font-light mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloremque, dolor unde, !
          </p>
          <button
            onClick={() => navigate("/products")}
            className="relative cursor-pointer rounded-full h-[40px] w-40 overflow-hidden border border-[#F6E116] bg-white px-3 text-[#F6E116] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#F6E116] before:transition-all before:duration-500 hover:text-white hover:shadow-[#F6E116] hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">Our Products</span>
          </button>
        </div>

        {/* (Optional) Image or Illustration Block */}
        {/* <div className="mt-8 md:mt-0 w-full md:w-1/2">
          <img src={heroImg} alt="Hero" className="w-full object-contain" />
        </div> */}
      </section>

      {/* About & Products Sections */}
      <AboutUsSection />
      <Products />

      {/* Scroll-to-Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#F6E116] text-white rounded-full shadow-lg hover:bg-[#FEE08A] transition"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default Home;
