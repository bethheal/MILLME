import React, { useEffect, useState } from "react";
import products from "../../assets/images/experience.jpg";
import { faArrowUp, faLeaf, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageWrapper from "../../components/PageWrapper";
import { motion } from "framer-motion";

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
        style={{ backgroundImage: `url(${products})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <div className="relative z-20 text-center px-6 max-w-3xl text-white">
          <h2 className="text-5xl font-bold mb-4 leading-tight">About Us</h2>
          <p className="text-lg font-bold">
            MILLME ENTERPRISE is more than a name  it's a commitment to clean living, care, and community upliftment.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl text-[#5AA4B8] font-bold mb-4">Welcome to MILLME ENTERPRISE</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted source for safe, effective, and affordable home and personal care products. At MILLME ENTERPRISE, we believe that cleanliness is more than a habit — it’s a way of caring for your health, your space, and your loved ones.
          </p>
          <p className="text-lg text-gray-600">
            That’s why we produce FDA-approved, high-quality products  from gentle, skin-friendly shower gels to powerful floor and laundry solutions — all designed to leave your space sparkling, fresh, and confidently clean.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3 className="text-3xl text-[#5AA4B8] font-bold mb-4">Our Mission & Core Values</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We aim to become a leading and trusted Ghanaian brand in home and personal care — producing skin-friendly, effective, and affordable products while creating employment and promoting hygiene in homes and institutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: faLeaf,
              title: "Safe & Trusted",
              desc: "All our products are FDA-approved and designed with your health in mind.",
            },
            {
              icon: faHeart,
              title: "Made with Care",
              desc: "We pour love into every formula — to nourish your space and support your lifestyle.",
            },
            {
              icon: faUsers,
              title: "Community Focused",
              desc: "Creating jobs and supporting local growth is at the heart of what we do.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-[#EBCE57] rounded-xl text-center shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={item.icon} className="text-yellow-600 text-4xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#5AA4B8] mb-4">Our Vision</h3>
          <p className="text-lg text-gray-600">
            MILLME ENTERPRISE aspires to be the household standard in clean living across Ghana and beyond  delivering products that not only cleanse deeply but also care for people, generate employment opportunities, and drive lasting positive impacts.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#EBCE57] text-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h3 className="text-3xl text-[#5AA4B8] font-bold mb-4">Why Choose Us?</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <motion.ul
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3 text-lg text-gray-700 list-disc list-inside"
          >
            <li>FDA-approved and safe for all</li>
            <li>Affordable without compromising quality</li>
            <li>Committed to job creation in Ghana</li>
            <li>Trusted by households </li>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3 text-lg text-gray-700 list-disc list-inside"
          >
            <li>Respect</li>
            <li>Accountability</li>
            <li>Locally produced with pride</li>
            <li>Backed with passion, impact, and integrity</li>
          </motion.ul>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h3 className="text-3xl text-[#5AA4B8] font-bold mb-4">Meet Our Founder</h3>
          <p className="text-lg font-light mt-2 text-gray-600">The visionary mind behind MILLME ENTERPRISE.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          <div className="bg-gray-100 rounded-2xl shadow-xl p-6 w-[60vw] text-center hover:scale-105 transition-transform">
            <h4 className="text-xl font-bold">Mrs. Millie Dey</h4>
            <p className="text-sm text-gray-500">Founder & CEO</p>
            <p className="mt-2 text-sm font-light text-gray-600">
              A trailblazing Ghanaian woman blending tradition, care, and innovation to provide quality products and uplift her community.
            </p>
          </div>
        </motion.div>
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
