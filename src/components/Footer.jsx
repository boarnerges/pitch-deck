import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const slides = ["/", "/slide-two", "/slide-three"]; // Slide order

const Footer = () => {
  const location = useLocation();
  const currentIndex = slides.indexOf(location.pathname);

  const prevSlide = currentIndex > 0 ? slides[currentIndex - 1] : null;
  const nextSlide =
    currentIndex < slides.length - 1 ? slides[currentIndex + 1] : null;

  return (
    <div className="bg-[#333333] border-t-1 border-gray-500 py-12">
      {/* Slide Navigation */}
      <div className="flex text-white text-sm font-thin text-base justify-center gap-4">
        {slides.map((slide, index) => (
          <NavLink
            key={index}
            to={slide}
            className={({ isActive }) =>
              isActive ? "text-[#0E93E8] font-semibold" : "text-white"
            }
          >
            Slide {index + 1}
          </NavLink>
        ))}
      </div>

      {/* Previous & Next Slide Buttons */}
      <div className="py-4 flex justify-center gap-4">
        {prevSlide && (
          <NavLink
            to={prevSlide}
            className="py-2 px-4 border border-[#0E93E8] rounded-xl text-[#0E93E8] bg-white font-thin text-center"
          >
            Previous Slide
          </NavLink>
        )}
        {nextSlide && (
          <NavLink
            to={nextSlide}
            className="py-2 px-4 bg-[#0E93E8] rounded-xl text-white font-thin text-center"
          >
            Next Slide
          </NavLink>
        )}
      </div>

      <div className="border-gray-600 border-t-1  max-w-5xl mx-auto py-3"></div>

      {/* Footer Copyright */}
      <p className="text-white font-thin text-xs text-center">
        © 2025 Frontlett Virtualizing. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
