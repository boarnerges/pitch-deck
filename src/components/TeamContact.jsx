import React from "react";
import { Link } from "react-router-dom";

const TeamContact = () => {
  return (
    <div className="bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto ">
        <p className="text-[#33C3F0]  bg-[#66F6FF] w-fit rounded-xl px-3 py-1 text-xs font-lightbold">
          Frontlett Virtualiting
        </p>
        <h1 className="text-3xl py-4 sm:text-5xl lg font-bold">
          Team & Contact
        </h1>
        <p className="font-thin text-lg py-4">Join the future of work today.</p>
        <div className="py-2 flex  gap-2">
          <Link className="bg-[#0E93E8] px-5  md:px-6 flex  gap-2 items-center rounded-xl ">
            <p className="text-white text-xs sm:text-base">Invest from $100</p>
            <img src="/arrow.svg" alt="" className="h-[16px] " />
          </Link>
          <Link className="border border-[#0E93E8] text-[#0E93E8] px-5 py-1.5 md:px-3 text-xs sm:text-base  rounded-xl">
            Watch Video 3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamContact;
