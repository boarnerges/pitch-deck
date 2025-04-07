import React from "react";
import Dash from "./Dash";

const MarketStrategy = () => {
  const strategies = [
    {
      title: "Invite-Only Model ",
      tag: "First year, invite-only for exclusivity",
      logo: "/logo/invite.svg",
      description:
        "Creating a sense of exclusivity and premium value with a controlled rollout to select clients and resources.",
    },
    {
      title: "Strategic Partnerships ",
      tag: "Universities, HR consultants, training providers",
      logo: "/logo/partnership.svg",
      description:
        "Collaborating with educational institutions, HR professionals, and training organizations to expand our reach.",
    },
    {
      title: "Digital Marketing ",
      tag: "Social media, targeted campaigns",
      logo: "/logo/marketing.svg",
      description:
        "Implementing strategic digital marketing initiatives to reach our target audience efficiently.",
    },
    {
      title: "Community Building ",
      tag: "Engaged network of users and partners",
      logo: "/logo/community.svg",
      description:
        "Fostering a vibrant community of companies and resources to drive organic growth and referrals.",
    },
  ];
  return (
    <div className=" bg-gray-50  py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl  font-semibold text-center mb-6">
          Go-To-Market Strategy
        </h2>
        <Dash />
        <p className="font-thin text-base text-center mt-6 mb-6">
          Our approach to market penetration and growth
        </p>

        <div className="sm:grid grid-cols-2 gap-4">
          {strategies.map((strategy, index) => (
            <div
              className="bg-white mt-4 sm:mt-0 p-4 rounded-lg shadow-sm"
              key={index}
            >
              <div className="flex py-2 gap-4">
                <img
                  className="h-[48px] w-[48px]"
                  src={strategy.logo}
                  alt="lol"
                />
                <div>
                  <h3>{strategy.title}</h3>
                  <p className="text-xs font-light text-[#5D9CEC] ">
                    {strategy.tag}
                  </p>
                </div>
              </div>
              <p className="text-sm font-thin">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketStrategy;
