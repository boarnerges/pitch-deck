import React from "react";

const RevenueInvestment = () => {
  return (
    <div className=" py-10 flex flex-col items-center justify-center gap-4">
      <p className="text-[#33C3F0]  bg-[#66F6FF] w-fit rounded-xl px-3 py-1 text-xs font-lightbold">
        Frontlett Virtualiting
      </p>
      <h1 className="text-3xl sm:text-5xl lg font-bold">
        Revenue And Investment
      </h1>
      <p className="font-light">
        Join us in revolutionizing thee future of work
      </p>
      <div className="py-2 flex  gap-2">
        <button className="bg-[#0E93E8] px-5  md:px-6 flex  gap-2 items-center rounded-xl ">
          <p className="text-white text-xs sm:text-base">Invest from $100</p>
          <img src="/arrow.svg" alt="" className="h-[16px] " />
        </button>
        <button className="border border-[#0E93E8] text-[#0E93E8] px-5 py-1.5 md:px-3 text-xs sm:text-base  rounded-xl">
          Watch Video 2
        </button>
      </div>
    </div>
  );
};

export default RevenueInvestment;
