import React from "react";
import Dash from "./Dash";

const CompanyOptions = [
  {
    type: "Limited hiring power due to budget constraints",

    description: "Budget-aligned hiring through affordable time slots.",
  },
  {
    type: "Incomplete teams due to high costs of full-time staff",

    description: "complete team access within budget limitations",
  },
  {
    type: "Reliance on freelancers who may lack long-term commitment",

    description: "Opportunity to hire long-term talent over freelancers",
  },
  {
    type: "Inability to access top talent within financial reach",

    description: "Access to skilled talent without budget contraints",
  },
];

const ResourcesOptions = [
  {
    type: "Limited job opportunities",

    description: "Increased job engagement.",
  },
  {
    type: "Low compensation due to limited job availability",

    description: "Competitive compensation through multiple engagements.",
  },
  {
    type: "Lack of flexibility and adaptable work arrangements",

    description: "Flexible work structure.",
  },
  {
    type: "Minimal benefits such as health and life insurance",

    description: "Enhanced benefits, regardless of company size.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <div className=" py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Problem & Solution
      </h2>
      <Dash />
      <div className=" lg:grid grid-cols-2 mt-12  gap-7">
        <div className=" mb-6 p-5 bg-[#5D9CEC1A] shadow-md rounded-xl">
          <h3 className="text-[#0E93E8] text-xl font-normal">For Company</h3>
          {CompanyOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white flex gap-4 mt-6 shadow-sm rounded-xl p-6"
            >
              <p className="h-[48px] bg-[#5D9CEC1A] w-[48px] rounded-full"></p>
              <div>
                <p>{option.type}</p>
                <div className="bg-[#5D9CEC1A] text-[#0E93E8] rounded-xl px-3 py-3 font-thin">
                  <p>{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" p-5 bg-orange-100 shadow-md rounded-xl">
          <h3 className="text-orange-500 text-xl font-normal">For Resources</h3>
          {CompanyOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white flex gap-4 shadow-sm mt-6 rounded-xl p-6"
            >
              <img
                className="h-[40px] w-[40px]"
                src="./public/logo/customer.svg"
                alt="avatar"
              />
              <div>
                <p className="text-base font-extralight">{option.type}</p>
                <div className="bg-orange-50 text-orange-500 rounded-xl px-3 py-3 font-thin">
                  <p>{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
