import React from "react";
import Dash from "./Dash";

const Landscape = () => {
  const advantages = [
    {
      title: "Cost-effective",
      description:
        "Companies only pay for the exact time slots they need, making premium talent accessible at a fraction of traditional costs.",
    },

    {
      title: "Flexible",
      description:
        "Resources work in 2-hour slots for up to 4 companies, maximizing their earning potential while maintaining work-life balance.",
    },
    {
      title: "Scalable",
      description:
        "Companies can easily scale their team up or down based on changing business needs without long-term commitmen.",
    },
    {
      title: "Commited-focused",
      description:
        "Unlike freelance platforms, our model fosters long-term relationships between companies and resources.",
    },
  ];
  const competitors = [
    {
      title: "Direct Competitors ",
      logo: "/logo/Customer.svg",

      item: [
        {
          title: "Freelance platforms",
          description: "Lack structured engagement and long-term commitment",
        },
        {
          title: "Recruitment agencies ",
          description: "Higher costs and limited flexibility in hiring options",
        },
      ],
    },
    {
      title: "Indirect Competitors ",
      logo: "/logo/strengths.svg",

      item: [
        {
          title: "In-house hiring",
          description: "High costs and limited access to diverse talent",
        },
        {
          title: "Outsourcing companies ",
          description: "Less control and quality assurance challenges",
        },
      ],
    },
  ];
  return (
    <div className=" bg-gray-50 max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl  font-semibold text-center mb-6">
        Competitive Landscape
      </h2>
      <Dash />
      <p className="font-thin text-base text-center mt-6 mb-6">
        How we stand out in the market
      </p>

      <div className="sm:grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm ">
          {competitors.map((competitor, index) => (
            <div className="mt-4 bg-white" key={index}>
              <div className="flex items-center gap-2">
                <img
                  className="h-[48px] w-[48px]"
                  src={competitor.logo}
                  alt="logo"
                />
                <h3 className="font-medium">{competitor.title}</h3>
              </div>
              <div className="flex items-center gap-4 pt-2 ">
                <p className="h-[8px] rounded-full w-[8px]"></p>
                <div className="">
                  {competitor.item.map((compet, index) => (
                    <div key={index} className="flex items-start gap-4 pt-2 ">
                      <p className="h-[8px] bg-[#5D9CEC] rounded-full w-[8px]"></p>
                      <div>
                        <p className="">{compet.title}</p>
                        <p className="font-thin text-xs">
                          {compet.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 mt-4 sm:mt-0 rounded-xl shadow-sm bg-white">
          <div className="flex py-3 items-center gap-2">
            <img
              className="h-[48px] w-[48px]"
              src="/logo/strengths.svg"
              alt="logo"
            />
            <h3 className="font-medium">Frontlett's Advantage</h3>
          </div>

          {advantages.map((advantage, index) => (
            <div className="rounded-lg  bg-[#5D9CEC1A] mb-4 p-4" key={index}>
              <h3 className="text-[#0E93E8] py-2">{advantage.title}</h3>
              <p className="font-thin text-xs">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landscape;
