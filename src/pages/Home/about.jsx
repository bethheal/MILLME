import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Images and Experience */}
      <div className="relative font-body w-full md:w-1/2 flex justify-center">
        <div className="relative z-10">
          <img
            src="/images/cleaner1.jpg"
            alt="Cleaning service"
            className="w-64 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute left-20 top-24 z-0">
          <img
            src="/images/cleaner2.jpg"
            alt="Cleaning in action"
            className="w-64 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Experience Box */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-blue-900">20+</h2>
          <p className="text-sm text-gray-500">Years Experience</p>
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 mt-10 font-body md:mt-0">
        <p className="text-sm font-semibold font-heading text-blue-600 mb-2">ABOUT US</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Best Cleaning Services Provider Since 2001
        </h2>
        <p className="text-gray-600 mb-6">
          Est ante in nibh mauris cursus mattis molestie. Tellus rutrum tellus pellentesque eu tincidunt.
        </p>

        <ul className="space-y-3 mb-6 font-body">
          {[
            "Loaded with Professional and Honest Cleaners",
            "Provide the Finest Cleaning Supplies",
            "100% Satisfaction Cleaning Service",
            "We are bonded and insured",
          ].map((text, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-yellow-400 mt-1 mr-2" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>

        <button onClick={() => navigate("/about")} className="font-body cursor-pointer bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition font-semibold">
          More About Us
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
