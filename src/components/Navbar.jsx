import React, { useState, useEffect, useRef } from "react";

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
    <nav className="bg-white py-4 px-8 flex justify-between items-center relative">
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <img
          src="/logo/logo.svg"
          alt="Frontlett Virtualizing"
          className="h-[45px] sm:h-[55px] lg:h-[65px] xl:h-[75px]"
        />
      </div>
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
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Slide 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Slide 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Slide 3
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-small text-gray-700 hover:bg-gray-100"
            >
              SINC Micro Angel Network
            </a>
            <button className="bg-[#0E93E8] text-white ml-4 px-4 py-2 rounded-lg text-sm sm:text-base">
              Invest/Support
            </button>
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden sm:flex justify-items-end space-x-1 xl:space-x-8 text-[12px] lg:text-sm xl:text-base">
            <a href="#" className="font-semibold text-black ">
              Slide 1
            </a>
            <a href="#">Slide 2</a>
            <a href="#">Slide 3</a>
            <a href="#">SINC Micro Angel Network</a>
          </div>
        </div>

        {/* Right Section - Button */}
        <button className="bg-[#0E93E8] hidden sm:block text-white px-4 py-2 rounded-lg text-[12px] lg:text-sm xl:text-base">
          Invest/Support
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
