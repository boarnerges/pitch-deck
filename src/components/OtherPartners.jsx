import React from "react";

const OtherPartners = () => {
  const forces = [
    {
      title: "HR Partners",
      description: "Talent acquisition and HR compiliance",
      logo: "./public/logo/acquisition.svg",
    },

    {
      title: "Hardware Partners",
      description: "Device and software support",
      logo: "./public/logo/hardware.svg",
    },

    {
      title: "Banking & Fintech Partners",
      description: "Financial services and payroll.",
      logo: "./public/logo/fintech.svg",
    },
    {
      title: "BNPL Partners",
      description: "Payment options for employers.",
      logo: "./public/logo/percentage.svg",
    },
    {
      title: "Training & University Partners",
      description: "Access to trained resources.",
      logo: "./public/logo/university.svg",
    },
  ];
  return (
    <div className="bg-gray-50 max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl mb-6">Other Strategic Partners</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:grid-cols-3">
        {forces.map((force, index) => (
          <div
            className="bg-white px-4 py-4 shadow-md rounded-lg mt-4 sm:mt-0"
            key={index}
          >
            <div className="py-2 flex items-center justify-center h-[48px] w-[48px] bg-[#5D9CEC1A] rounded-full  ">
              <img className="" src={force.logo} alt="avatar" />
            </div>

            <h3 className="py-2 text-base ">{force.title}</h3>
            <p className="py-2 text-sm font-thin">{force.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherPartners;
