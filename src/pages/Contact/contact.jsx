import React from "react";
import { Phone, Mail, MapPin, Instagram, Share2 } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Need to Reach Us Directly?</h2>
        <p className="text-gray-600 mt-2">We’re here to help. Reach out via any of the following methods:</p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid gap-8 md:grid-cols-3 text-center">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <Phone className="text-blue-600 w-6 h-6 mb-2" />
          <h4 className="font-semibold text-gray-700">Call</h4>
          <p className="text-sm text-gray-600">055 585 4379</p>
          <p className="text-sm text-gray-600">054 295 4110</p>
          <p className="text-sm text-gray-600">054 418 5254</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <Mail className="text-blue-600 w-6 h-6 mb-2" />
          <h4 className="font-semibold text-gray-700">Email</h4>
          <p className="text-sm text-gray-600">millmeenterprise@gmail.com</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center">
          <MapPin className="text-blue-600 w-6 h-6 mb-2" />
          <h4 className="font-semibold text-gray-700">Visit Us</h4>
          <p className="text-sm text-gray-600">Cape Coast, Ghana</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://wa.me/233555854379"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 text-center">
        <p className="text-gray-700 mb-4 font-semibold">Follow us on Social Media</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/millme_ent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="https://www.tiktok.com/@millme_ent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 transition"
          >
            <FaTiktok className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
