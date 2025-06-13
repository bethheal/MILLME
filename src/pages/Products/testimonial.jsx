import React from "react";
import productImage1 from "../../assets/images/product.jpeg";



const Testimonial = () => {
  return (
    <div className="font-heading bg-[#f5faff] py-20 text-center relative">
      {/* Headings */}
      <p className="text-blue-600 text-sm font-semibold uppercase">Testimonial</p>
      <h2 className="text-3xl font-bold mb-6">Client Feedback</h2>

      {/* Quote */}
      <p className="font-body max-w-xl mx-auto text-gray-600 text-sm md:text-base px-4">
        “I had been searching for a new IT role for months with no luck. Trident changed everything.
        Their team not only found me a role that perfectly matched my skill set but also negotiated
        a fantastic compensation package on my behalf. They truly go above and beyond for their clients.”
      </p>

      {/* Centered profile */}
      <div className="mt-6">
        <img src={productImage1} alt="Michael R" className="w-14 h-14 mx-auto rounded-full border-2 border-blue-200" />
        <h4 className="mt-2 font-semibold text-gray-800">Michael R</h4>
        <p className="text-xs text-gray-500">IT Specialist</p>
      </div>

      {/* Floating avatars */}
      <img src={productImage1} alt="client" className="w-10 h-10 rounded-full absolute left-10 top-1/2 transform -translate-y-1/2" />
      <img src={productImage1} alt="client" className="w-10 h-10 rounded-full absolute left-20 top-[25%]" />
      <img src={productImage1} alt="client" className="w-10 h-10 rounded-full absolute right-20 top-[25%]" />
      <img src={productImage1} alt="client" className="w-10 h-10 rounded-full absolute right-10 top-1/2 transform -translate-y-1/2" />
      <img src={productImage1} alt="client" className="w-10 h-10 rounded-full absolute left-[15%] bottom-[20%]" />
      <img src={productImage1} alt="client" className="w-10 h-10 rounded-full absolute right-[15%] bottom-[20%]" />
    </div>
  );
};

export default Testimonial;
