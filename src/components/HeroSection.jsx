import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between ">
      <div className=" pt-10 sm:pt-20 ">
        <div className="flex w-full pl-[30px] md:pl-[30px] justify-between gap-2 text-[8px] lg:text-[7px] xl:text-sm ">
          <p className="bg-[#5D9CEC1A] text-[#5D9CEC] rounded-xl py-1 px-2 xl:px-1">
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
                  src="../public/arrow.svg"
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
      </div>
      <img
        src="../public/Heropic.svg"
        alt="Hero Section"
        className="hidden lg:block w-[70%]"
      />
    </div>
  );
};

export default HeroSection;
