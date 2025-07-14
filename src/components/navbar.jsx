import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { k } from "../constant";
import { Menu, X } from "lucide-react"; // Optional: icon library like lucide-react
import { logo } from "../assets";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 left-0 w-full z-50 border-b-2 border-[#EAD685] bg-gradient-to-b from-[#107B98]/60 to-[#107B98]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">

            <img
              src={logo}
              alt="Millme Enterprise Logo"
              className="w-10 rounded-b-full m-6"
            />

           <span className="text-white font-bold"> Millme</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-bold text-sm">
            {k.NAVLINK.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`group relative uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[#EBCE57]"
                      : "text-white hover:text-[#EBCE57]"
                  }`}
                >
                  {item.navName}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#EAD685] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700/80 px-4 pb-4">
          <ul className="space-y-4 text-white font-bold text-sm">
            {k.NAVLINK.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block uppercase transition-colors duration-200 ${
                      isActive ? "text-[#EBCE57]" : "hover:text-[#EBCE57]"
                    }`}
                  >
                    {item.navName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
