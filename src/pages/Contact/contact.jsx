import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Need to Reach Us Directly?</h2>
        <p className="text-gray-600 mt-2">We’re here to help. Reach out via any of the following methods:</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 text-center">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <Phone className="text-blue-600 w-6 h-6 mb-2" />
          <h4 className="font-semibold text-gray-700">Phone</h4>
          <p className="text-sm text-gray-600">+233 24 123 4567</p>
          <p className="text-sm text-gray-600">+233 55 987 6543</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <Mail className="text-blue-600 w-6 h-6 mb-2" />
          <h4 className="font-semibold text-gray-700">Email</h4>
          <p className="text-sm text-gray-600">info@nectrural.org</p>
          <p className="text-sm text-gray-600">support@nectrural.org</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center">
          <MapPin className="text-blue-600 w-6 h-6 mb-2" />
          <h4 className="font-semibold text-gray-700">Visit Us</h4>
          <p className="text-sm text-gray-600">123 Rural Link Road</p>
          <p className="text-sm text-gray-600">Kumasi, Ghana</p>
        </div>
      </div>

      {/* WhatsApp button */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://wa.me/233241234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;
