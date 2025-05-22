import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { k } from '../constant';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 left-0 w-full z-50  border-b-2 border-[#EAD685]">
      <div className="flex w-full h-12 ">

        {/* Left side */}
        <div className="bg-gradient-to-b from-blue-500/60 to-blue-700/60 w-1/2 px-6 py-2 flex items-center">
  <h1 className="font-bold text-xl text-[#EAD685]">Logo</h1>
</div>


        {/* Right side */}
        <div className=" bg-gradient-to-b from-blue-500 to-blue-700  w-1/2 px-6 py-2 flex items-start justify-end">
          <nav className="w-full">
            <ul className="flex font-bold flex-row items-center gap-8 justify-end text-white">
              {k.NAVLINK.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                  <li key={index} className="list-none">
                    <Link
                      to={item.path}
                      className={`group relative inline-block uppercase no-underline text-sm transition-colors duration-200 ${
                        isActive ? 'text-[#EBCE57]' : 'text-white hover:text-[#EBCE57]'
                      }`}
                    >
                      {item.navName}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-[#EAD685] transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
