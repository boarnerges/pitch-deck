import React, { useState, useEffect, useRef } from "react";
import { Link, Links, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for menu container

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-50 sticky top-0 z-1000 ">
      <div className="max-w-5xl mx-auto py-4 px-6 flex justify-between items-center relative">
        {/* Left Section - Logo */}
        <Link className="flex items-center">
          <img
            src="/logo/logo.svg"
            alt="Frontlett Virtualizing"
            className="h-[45px] sm:h-[55px] lg:h-[65px] xl:h-[75px]"
          />
        </Link>
        <div className="flex items-center gap-6">
          {/* Center Section - Navigation */}
          <div className="flex items-center sm:justify-items-end space-x-6">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden m-0 text-black font-semibold focus:outline-none"
            >
              ☰
            </button>

            {/* Dropdown Menu (Mobile) */}
            <div
              ref={menuRef}
              className={`absolute right-0 top-16 pb-5 text-sm bg-white shadow-lg rounded-lg w-52 lg:hidden transition-all ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Slide 1
              </a>
              <a
                href="/slide-two"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Slide 2
              </a>
              <a
                href="/slide-three"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Slide 3
              </a>
              <a
                href="/sinc"
                className="block px-4 py-2 text-small text-gray-700 hover:bg-gray-100"
              >
                SINC Micro Angel Network
              </a>
              <button className="bg-[#0E93E8] text-white ml-4 px-4 py-2 rounded-lg text-sm sm:text-base">
                Invest/Support
              </button>
            </div>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden sm:flex justify-items-end space-x-3 text-[10px]  xl:text-[12px] lg:text-sm xl:text-base">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-[#0E93E8]" : " text-black"
                }
              >
                Slide 1
              </NavLink>
              <NavLink
                to="/slide-two"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-[#0E93E8]" : "text-black"
                }
              >
                Slide 2
              </NavLink>
              <NavLink
                to="/slide-three"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-[#0E93E8]" : "text-black"
                }
              >
                Slide 3
              </NavLink>
              <NavLink to="/sinc" className="text-black">
                SINC Micro Angel Network
              </NavLink>
            </div>
          </div>

          {/* Right Section - Button */}

          <NavLink className="bg-[#0E93E8] hidden sm:block text-white px-4 py-2 rounded-lg text-[12px] lg:text-sm xl:text-base">
            Invest/Support
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
