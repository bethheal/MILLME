import React from "react";
import { aboutImg } from "../../assets";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
    const navigate = useNavigate();
  
  return (
    <div className="relative mt-10 mb-8">
        <h2 className="text-3xl md:text-4xl items-center font-bold mb-5">
          <span className="border-t border-b border-[#EAD685] px-2">
            About{" "}
          </span>
        </h2>
      {/* 3 Floating Cards */}
      <div className="absolute -top-24 w-full flex justify-end z-20 px-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative bg-gradient-to-b from-blue-500 to-blue-700  border-2 border-[#EAD685] shadow-lg w-[15vw] h-[30vh] max-w-sm p-6"
          >
            {/* Arrow pointing to the left */}
            <div className="absolute left-[-12px] top-6 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[12px] border-t-transparent border-b-transparent border-r-[#EAD685]"></div>

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
      <div
        className="bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] shadow-md flex items-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-25 z-0"></div>

        {/* Content */}
        <div className="relative z-10 p-8 max-w-xl text-white">
          
          <p className="mb-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloremque, dolor unde. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque doloremque, dolor unde.
          </p>
          <button onClick={()=>navigate("/about")} className="relative cursor-pointer rounded-full h-[40px] w-40 overflow-hidden border border-[#F6E116] bg-white px-3 text-[#F6E116] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#F6E116] before:transition-all before:duration-500 hover:text-white hover:shadow-[#F6E116] hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">Read More</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
