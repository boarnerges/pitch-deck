import React from "react";
import Dash from "./Dash";

const Swot = () => {
  const swot = [
    {
      title: "Strengths ",
      logo: "/logo/strengths.svg",
      color: "bg-blue-400",
      border: "border-blue-400",

      des: [
        "Innovative models",
        "Cost-effective for SMEs",
        "Diverse revenue streams",
      ],
    },

    {
      title: "Weaknesses ",
      logo: "/logo/weaknesses.svg",
      color: "bg-orange-400",
      border: "border-orange-400",
      des: [
        "High customer acqiusition cost",
        "Affiliate reliance",
        "Resource vetting needs",
      ],
    },

    {
      title: "Opportunities ",
      logo: "/logo/opportunities.svg",
      color: "bg-green-400",
      border: "border-green-400",
      des: [
        "Growing demand for flexible work",
        "Expansion potential",
        "Partnership opportunities",
      ],
    },

    {
      title: "Threats ",
      logo: "/logo/threats.svg",
      color: "bg-red-400",
      border: "border-red-400",
      des: [
        "Markets competition",
        "Economic instability",
        "Regulatory challenges",
      ],
    },
  ];
  return (
    <div className=" bg-gray-50 max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl  font-semibold text-center mb-6">
        SWOT Analysis
      </h2>
      <Dash />
      <p className="font-thin text-base text-center mt-6 mb-6">
        Strategic evaluation of our business model
      </p>
      <div className="sm:grid grid-cols-2 gap-4">
        {swot.map((item, index) => (
          <div
            key={index}
            className={`py-3 px-3 mt-4 sm:mt-0 border shadow:lg rounded-lg border-t-4 border-solid ${item.border}`}
          >
            <div className="flex items-center">
              <img
                className="h-[56px] w-[56px] p-2"
                src={item.logo}
                alt="avatar"
              />
              <h3>{item.title}</h3>
            </div>

            <div className="py-2">
              {item.des.map((mdl, index) => (
                <div key={index} className="flex items-center gap-4 pt-2 ">
                  <p
                    className={`h-[8px] rounded-full w-[8px] ${item.color}`}
                  ></p>
                  <p className="font-thin text-xs">{mdl}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swot;
