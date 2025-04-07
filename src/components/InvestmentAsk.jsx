import React from "react";

const InvestmentAsk = () => {
  const forces = [
    {
      title: "Family & Friends Round",
      description: "Ask: $10,000 (N17,500,000) for 2500k ($875m).",
    },

    {
      title: "Next Financial Round",
      description: "Deal 3: $100,000 (N175,000,000) for 101m ($175m).",
    },

    {
      title: "Return on Investment",
      description:
        "5x return on Deal 1.  2x (200%) roll for those that invested in Deal 1.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto  py-12 px-6">
      <h2 className="text-2xl  font-semibold mb-6">Investment Ask</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-6 ">
        {forces.map((force, index) => (
          <div
            className="bg-white px-4 py-4 h-[fit] shadow-md rounded-lg"
            key={index}
          >
            <h3 className="py-2 text-base ">{force.title}</h3>
            <p className=" text-xs font-thin">{force.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentAsk;
