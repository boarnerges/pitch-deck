import React from "react";

const SincHero = () => {
  return (
    <div className="bg-[#1F1E1D] relative">
      <div className=" max-w-5xl mx-auto  py-26 px-6 ">
        <div className="max-w-xl">
          <p className="text-[#1B7A7C] tracking-widest font-semibold text-xs mb-4">
            WE ARE SINC ANGEL NETWORK
          </p>
          <h1 className="text-white text-4xl sm:text-5xl leading-tight font-bold mt-2 mb-2">
            A micro angel network
            <br /> empowering African startups.
          </h1>
          <p className="text-white text-lg mb-2">
            A micro angel network, SINC Angel Network (SAN), is dedicated to
            bridging the gap for early-stage funding and mentorship in Africa.
          </p>
          <a
            href="#"
            className=" inline-block font-medium py-3 px-6 bg-white rounded hover:bg-[#0E93E8] hover:text-white transition duration-300 ease-in-out mt-2"
          >
            Join SINC →{" "}
          </a>
        </div>
        <div className="absolute top-2 left-[60%] text-xs text-white">
          <img src="./public/dot-arrow.svg" alt="dots" />
        </div>
        <div className="absolute bottom-10 left-[40%] text-xs text-white ">
          <img className="" src="./public/dot-arrow.svg" alt="dots" />
        </div>
      </div>
    </div>
  );
};

export default SincHero;
