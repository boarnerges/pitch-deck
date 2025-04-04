import React from "react";
import Dash from "./Dash";

const MarketSize = () => {
  const markets = [
    {
      type: "Massive Opportunity",
      avatar: "../public/logo/growth.svg",

      description:
        "Over 50 million SMEs in Nigeria, with each SME likely needing up to 4 slots.",
    },
    {
      type: "Target Market",
      avatar: "../public/logo/target.svg",

      description:
        "Small to mid-sized businesses, startups, and enterprises seeking part-time talent.",
    },
    {
      type: "Scalable Growth",
      avatar: "../public/logo/Customer.svg",

      description:
        "High potential for rapid expansion across various industries and regions.",
    },
  ];

  const indexes = [
    {
      type: "50M+",

      description: "SMEs in Nigeria",
    },
    {
      type: "4",

      description: "Average slots needed per SME",
    },
    {
      type: "200M+",

      description: "Potential slots to be filled",
    },
  ];

  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Market Size</h2>
      <Dash />
      <div className="sm:flex items-center gap-6 py-6">
        <div className="bg-white sm:w-[50%] sm:h-fit rounded-xl shadow-sm py-1 px-1">
          {markets.map((market, index) => (
            <div key={index} className="bg-white py-2 flex align-center gap-2 ">
              <img
                className="h-[40px] w-[40px]"
                src={market.avatar}
                alt="avatar"
              />
              <div>
                <p className="font-normal">{market.type}</p>
                <div className="rounded-xl text-xs py-1 font-thin">
                  <p>{market.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white sm:w-[50%] rounded-xl shadow-xl mt-4 sm:mt-0 py-4 px-4">
          {indexes.map((int, index) => (
            <div key={index} className="bg-white ">
              <div>
                <p className="font-extrabold text-lg text-[#5D9CEC]">
                  {int.type}
                </p>
                <div className="rounded-xl text-sm py-3 font-thin">
                  <p>{int.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketSize;
