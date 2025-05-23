import React from "react";
import { aboutImg } from "../../assets";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mt-10 mb-8 px-4">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="border-t border-b border-[#EAD685] px-2">About</span>
      </h2>

      {/* Floating Cards Horizontally, shifted right */}
      <div className="relative z-30 flex justify-center gap-6 -mb-16 ml-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative bg-gradient-to-b from-blue-500 to-blue-700 border-2 border-[#EAD685] shadow-lg w-[85%] sm:w-[30%] max-w-xs p-6 rounded-md"
          >
            {/* Arrow Left for large screens */}
            <div className="hidden md:block absolute left-[-12px] top-6 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[12px] border-t-transparent border-b-transparent border-r-[#EAD685]"></div>

            <h3 className="text-lg font-semibold mb-2 text-[#EAD685]">
              Card Title {item}
            </h3>
            <p className="text-sm text-white">
              Brief description about what this card is for. You can modify it
              as needed.
            </p>
          </div>
        ))}
      </div>

      {/* Background Image Section */}
     <div className="relative z-10 py-4 sm:p-8 text-white flex justify-start">
  <div className="max-w-md text-left">
    <p className="mb-6 text-sm sm:text-base md:text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
      doloremque, dolor unde. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Neque doloremque, dolor unde.
    </p>
    <button
      onClick={() => navigate("/about")}
      className="relative cursor-pointer rounded-full h-[40px] w-40 overflow-hidden border border-[#F6E116] bg-white px-3 text-[#F6E116] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#F6E116] before:transition-all before:duration-500 hover:text-white hover:shadow-[#F6E116] hover:before:left-0 hover:before:w-full"
    >
      <span className="relative z-10">Read More</span>
    </button>
  </div>
</div>

    </div>
  );
};

export default AboutUsSection;
