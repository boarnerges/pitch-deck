import React from "react";
import Dash from "./Dash";

const Technology = () => {
  const technology = [
    {
      type: "Predictive Analytics Dashboard",
      avatar: "/logo/analytics.svg",

      description:
        "Data-driven insights to optimize resource allocation and performance tracking.",
    },

    {
      type: "Blockchain-Based Transparency System",
      avatar: "/logo/blockchain.svg",
      description:
        "Secure, transparent record-keeping for all transactions and agreements.",
    },

    {
      type: "AI-Enhanced Resource Allocation Engine",
      avatar: "/logo/ai.svg",

      description:
        "Smart matching of resources to companies based on skills, availability, and preferences.",
    },

    {
      type: "Universal Slot Management System (USMS)",
      avatar: "/logo/slot.svg",

      description:
        "Comprehensive platform for managing time slots, scheduling, and resource allocation.",
    },
  ];
  return (
    <div className=" bg-[#333333] text-[#FFFFFF]">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl  font-bold text-center mb-6">
          Proposed Technology
        </h2>
        <Dash />
        <p className="font-thin text-sm text-center mt-6 mb-6">
          Proprietary technology powering our innovative platform
        </p>

        <div className="sm:grid grid-cols-2 gap-4">
          {technology.map((tech, index) => (
            <div
              key={index}
              className=" bg-gray-600 py-2 px-2 lg:py-4 lg:px-4 mt-2 sm:mt-0 rounded-lg  flex align-center gap-2 "
            >
              <img
                className="h-[48px] w-[48px]"
                src={tech.avatar}
                alt="avatar"
              />
              <div>
                <p className="font-normal text-base">{tech.type}</p>
                <div className="rounded-xl text-xs py-1 font-thin">
                  <p>{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
