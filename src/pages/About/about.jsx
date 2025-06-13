import React, { useEffect, useState } from "react";
import productImage1 from "../../assets/images/product.jpeg";
import { faArrowUp, faLeaf, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageWrapper from "../../components/PageWrapper"; // ✅ Animation wrapper

const About = () => {
  const [showArrow, setShowArrow] = useState(false);

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
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${productImage1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <div className="relative z-20 text-center px-6 max-w-3xl text-white">
          <h2 className="text-5xl font-bold mb-4 leading-tight">About Us</h2>
          <p className="text-lg font-light">
            Millie Dey Millie Products is more than a name – it's a heritage of love, health, and locally grown goodness.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-extrabold mb-4">Our Mission & Values</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We exist to nourish families and empower local farmers through passion, integrity, and sustainability.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: faLeaf, title: "Fresh & Natural", desc: "Locally sourced ingredients with no additives." },
            { icon: faHeart, title: "Made with Love", desc: "Crafted with care and community in mind." },
            { icon: faUsers, title: "Community Driven", desc: "We grow together, one grain at a time." },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-yellow-50 rounded-xl text-center shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={item.icon} className="text-yellow-600 text-4xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-extrabold">The Brains Behind It All</h3>
          <p className="text-lg font-light mt-2 text-gray-600">Meet the dedicated team that brings the vision to life.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-72 text-center hover:scale-105 transition-transform">
            {/* Optional CEO Image */}
            {/* <img
              src={ceoImage}
              alt="CEO"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-400"
            /> */}
            <h4 className="text-xl font-bold">Mrs. Millie Dey</h4>
            <p className="text-sm text-gray-500">Founder & CEO</p>
            <p className="mt-2 text-sm font-light text-gray-600">
              A visionary woman blending tradition and innovation to bring wholesome food to your table.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h3 className="text-4xl font-extrabold mb-4">Why Choose Us?</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Grown & processed with love</li>
            <li>Family-run with deep roots</li>
            <li>Trusted by local communities</li>
            <li>Innovation rooted in culture</li>
          </ul>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Eco-conscious packaging</li>
            <li>Affordable & nutritious</li>
            <li>Dedicated customer service</li>
            <li>Passionate, experienced team</li>
          </ul>
        </div>
      </section>

      {/* Scroll-to-Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-yellow-400 text-white rounded-full shadow-lg hover:bg-yellow-500 transition"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </PageWrapper>
  );
};

export default About;
