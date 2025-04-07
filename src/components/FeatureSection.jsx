import React from "react";
import Dash from "./Dash";

const features = [
  {
    title: "Staff Sharing Model",
    description:
      "Companies share resources and split costs, making  premium talent accessible to businesses of all sizes.",
    tag: "Flexible Hiring",
  },
  {
    title: "2-Hour Slot System",
    description:
      "Resources work in efficient 2-hour slots for up to 4 different companies, maximizing productivity and compensation.",
    tag: "Time Optimization",
  },
  {
    title: "Cost Efficiency",
    description:
      "Take only the time slots you need while accessing top-tier talent.",
    tag: "Budget Friendly",
  },
];

const Features = () => {
  return (
    <div className="  max-w-5xl mx-auto   py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frontlett Virtualiting
      </h2>
      <Dash />

      <div className="lg:flex items-center justify-between mt-6">
        <div className="font-thin p-[10px] lg:p-[25px] lg:w-[50%] shadow-md rounded-lg bg-white">
          <p>
            Frontlett Virtualting is a staff share and resource share model that
            allows companies to share a staff with other companies while they
            split the cost of hiring the employee or resource. The model allows
            employees and resources to work for as much as 4 companies in slot
            times of 2hrs.
          </p>
          <div className="bg-[#0E93E8] h-[4px] w-[48px] mt-[16px] mb-[16px]"></div>
          <p>
            The objective of the model is to allow companies to be able to hire
            the right people they need irrespective of the cost, as they will
            need to take a slot portion they can afford as well as an
            opportunity to hire a full team needed for the company to succeed.
          </p>
        </div>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:w-[45%] mt-6 lg:mt-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 mt-4 sm:mt-0 rounded-lg shadow-sm  "
            >
              <p className="bg-[#5D9CEC1A] text-[#0E93E8] w-fit rounded-lg px-3">
                {feature.tag}
              </p>
              <h3 className=" text-xl font-bold py-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm lg:w-[80%] font-thin">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
