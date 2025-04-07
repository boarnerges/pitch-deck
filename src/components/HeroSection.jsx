import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between max-w-5xl mx-auto ">
      {/* <div className=" pt-10 sm:pt-20 ">
        <div className="flex w-full pl-[30px] md:pl-[30px] justify-between gap-2 text-[8px] lg:text-[7px] xl:text-sm ">
          <p className="bg-[#5D9CEC1A] text-[#5D9CEC] text-xs rounded-xl py-1 px-2 xl:px-1">
            Future of Work
          </p>
          <p className="bg-[#1D1D1D0D] text-[#114382E0] rounded-xl py-1 px-2">
            Raising $10K Pre-Product Idea Fund for 2.5% Equity
          </p>
        </div>
        <div className="bg-[rgba(210,215,235,0.1)] pr-[25px] flex flex-col mt-5 pb-[120px] rounded-tr-[70px]">
          <div className="pl-[30px] md:pl-[30px]">
            <p className="py-1 font-bold font-[48px]">The World 1st</p>
            <p className="pb-4 pt-2 lg:pt-1 text-[38px] leading-[48px] font-bold">
              Staff Sharing <br />
              Platform
            </p>
            <p className="font-[200] text-gray-400 mt-4 lg:mt-2">
              Presented by Daniel Oratokhai
            </p>
            <p className="font-[200] text-gray-400">
              Date: 27th November, 2024.
            </p>
            <div className="mt-6 flex  gap-2">
              <button className="bg-[#0E93E8] px-5  md:px-6 flex  gap-2 items-center rounded-xl ">
                <p className="text-white lg:text-[8px] xl:text-base">
                  Invest from $100
                </p>
                <img
                  src="/arrow.svg"
                  alt=""
                  className="h-[16px] lg:h-[8px] xl:h-[16px]"
                />
              </button>
              <button className="border border-[#0E93E8] text-[#0E93E8] px-5 py-1.5 md:px-3 lg:text-[9px] xl:text-base  rounded-xl">
                Watch Video 1
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex">
        {/* Left Content */}
        <div className="flex-1 pt-12 px-6 flex flex-col">
          {/* Top navigation */}
          <nav className="mb-4">
            <ul className="flex space-x-2 text-[9px] lg:text-[8px]">
              <li className="text-blue-400 rounded-xl px-2 py-1 bg-[#5D9CEC1A] ">
                Future of Work
              </li>
              <li className="bg-[#1D1D1D0D] text-[#114382E0] rounded-xl px-2 py-1">
                Raising $10K Pre-Product Idea Fund for 2.5% Equity
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className=" bg-[rgba(210,215,235,0.1)] pr-[25px] flex flex-col mt-5 pb-[120px] rounded-tr-[70px] flex-grow">
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              The World 1st
            </h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Staff Sharing Platform
            </h1>

            <div className="text-gray-600 mb-3">
              <p>Presented By: Daniel Oratokhai</p>
              <p>Date: 27th November, 2024.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-500 text-xs text-white px-3 py-1 rounded-xl flex items-center">
                Invest from $100
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="border border-gray-300 text-gray-600 px-6 py-1 rounded-xl">
                Watch Video 1
              </button>
            </div>
          </div>
        </div>
        <div className="hidden flex-2 lg:block max-w-3xl">
          <img src="/Heropic.svg" alt="Hero Section" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
