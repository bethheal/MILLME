import React from 'react';
import { logo } from "../assets";


const Footer = () => {
  return (
    <footer className=" border-t-2 border-[#EAD685] bg-gradient-to-b from-[#107B98]/60 to-[#107B98]/90">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
              src={logo}
              alt="Millme Enterprise Logo"
              className="w-10 rounded-b-full m-6"
            />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Logo
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-[#E2D066]">
                Shortcuts
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                  <a href="/products" className="hover:underline">Products</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-[#E2D066]">
                Follow us
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/millme_ent" className="hover:underline">Instagram</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@millme_ent" className="hover:underline">Tiktok</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-[#E2D066]">
                Legal
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-white">
            © 2023 <a href="/" className="hover:underline">Home</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Icons can remain as they are, but update class to className */}
            {/* Ensure to apply the same fix to all SVG parent elements */}
            {/* If you'd like me to clean all SVG sections too, let me know */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
