import React from "react";
import Dash from "./Dash";

const Business = () => {
  const model = [
    {
      title: "Key Activities ",
      des: [
        "Platform development and maintenance",
        "Resource vetting and quality control",
        "Customer relationship management",
      ],
    },

    {
      title: "Key Resources ",
      des: [
        "Proprietary platform technology",
        "Talent network and database",
        "Industry partnerships",
      ],
    },

    {
      title: "Cost Structure ",
      des: [
        "Platform development",
        "Marketing and acquisition",
        "Operations and support",
      ],
    },
  ];
  const technology = [
    {
      type: "Customer Segment",
      avatar: "../public/logo/customer.svg",

      description:
        "SMEs, resources (employees, consultants, influencers), affiliates.",
    },

    {
      type: "Value Propositions",
      avatar: "../public/logo/value.svg",

      description:
        "Budget-friendly hiring for companies, flexible work for resources.",
    },

    {
      type: "Channels",
      avatar: "../public/logo/channel.svg",

      description: "Digital marketing, affiliate program, invite-only model.",
    },

    {
      type: "Revenue Streams",
      avatar: "../public/logo/revenue.svg",

      description: "HR fee, platform fees, commissions, interest on deposits.",
    },
  ];
  return (
    <div className=" bg-gray-50 max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl  font-semibold text-center mb-6">
        Business Model Canvas
      </h2>
      <Dash />
      <p className="font-thin text-base text-center mt-6 mb-6">
        Our comprehensive approach to creating value
      </p>

      <div className="sm:grid grid-cols-2 gap-4">
        {technology.map((tech, index) => (
          <div
            key={index}
            className="bg-white shadow-sm py-2 px-2 lg:py-4 lg:px-4 mt-2 sm:mt-0 rounded-lg flex gap-2 "
          >
            <img className="h-[48px] w-[48px]" src={tech.avatar} alt="avatar" />
            <div>
              <p className="font-normal text-base pb-4">{tech.type}</p>
              <div className="rounded-xl text-xs py-1 font-thin">
                <p>{tech.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg mt-7 sm:flex justify-between gap-2 py-4 px-4 shadow-md">
        {model.map((mdel, index) => (
          <div key={index} className="py-3">
            <h3>{mdel.title}</h3>
            <div className="py-2">
              {mdel.des.map((mdl, index) => (
                <div key={index} className="flex items-center gap-4  pt-2 ">
                  <img
                    src="./public/dot.svg"
                    className="h-[8px] w-[8px]"
                    alt=""
                  />
                  <p className="font-thin text-xs ">{mdl}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
