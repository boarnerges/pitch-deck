import React from "react";

const FinancialProjection = () => {
  const forces = [
    {
      title: "Best Case Scenario",
      description: "N19.7778 billion ($11.3016 million) in 24 months.",
    },

    {
      title: "Medium Case Scenario",
      description: "N6.5926 billion ($3.7672 million) in 24 months.",
    },

    {
      title: "Worst Case Scenario",
      description: "N2.63704 billion ($1.50688 million) in 24 months.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto  py-12 px-6">
      <h2 className="text-2xl  font-semibold mb-6">Financial Projections</h2>
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

export default FinancialProjection;
