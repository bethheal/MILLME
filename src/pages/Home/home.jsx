import React, { useEffect, useState } from "react";
import "../../App.css";
import AboutUsSection from "./about";
import Products from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageWrapper from "../../components/PageWrapper"; // 🟡 Add this import

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
    <PageWrapper>
      {/* Hero Section */}
      <section className="w-full mx-20 min-h-[70vh] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 lg:px-20 py-10">
        {/* Left Text Block */}
        <div className="max-w-lg  text-center md:text-left">
          <h1 className="text-3xl font-heading sm:text-4xl lg:text-5xl text-text-color font-heebo font-semibold mb-6">
            Millie Dey Millie Products
          </h1>
          <p className="text-base font-body sm:text-lg text-black font-mulish font-light mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloremque, dolor unde, !
          </p>
          <button
            onClick={() => navigate("/products")}
            className="relative font-body cursor-pointer rounded-xl h-[3rem] w-[10.4rem] overflow-hidden border border-yellow-400 bg-white px-3 text-yellow-400 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-400 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-400 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10 flex gap-4">
              Our Products <ChevronRight />
            </span>
          </button>
        </div>
      </section>

      {/* About & Products Sections */}
      <AboutUsSection />
      <Products />

      {/* Scroll-to-Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-yellow-400 text-white rounded-xl shadow-lg hover:bg-[#FEE08A] transition"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </PageWrapper>
  );
};

export default Home;
