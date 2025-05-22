import React, { useEffect, useState } from "react";
import "../../App.css";
// import { heroImg } from "../../assets";
import AboutUsSection from "./about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Products from "./products";

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300); // Show after about section enters view
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex  justify-between items-center max-w-7xl">
        <div className="bg-[#7AA7FC] h-[70vh] w-[25vw] relative">
          <div className="absolute mt-10 left-42 w-[18rem] z-20">
            <h1 className="text-5xl pb-10 text-text-color font-heebo font-semibold">
              Millie Dey Millie Products
            </h1>
            <p className="font-mulish pb-2 font-extralight text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              doloremque, dolor unde, !
            </p>

            <button onClick={() => navigate("/products")} className="relative cursor-pointer rounded-full h-[40px] w-40 overflow-hidden border border-[#F6E116] bg-white px-3 text-[#F6E116] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#F6E116] before:transition-all before:duration-500 hover:text-white hover:shadow-[#F6E116] hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">Our Products</span>
            </button>
          </div>
        </div>

  
</div>



      {/* About Section */}
      <AboutUsSection />
      <Products />

      {/* Arrow Up Button */}
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
