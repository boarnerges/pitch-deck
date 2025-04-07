import React from "react";

const Terms = () => {
  const forces = [
    {
      title: "Minimum Investment",
      description: "$100 (N175,000)",
    },

    {
      title: "Maximum Investment",
      description: "$10,000 (N17,500,000)",
    },

    {
      title: "Lead Investor",
      description: "Min. $1,000 (N1,750,000)",
    },

    {
      title: "DIIM Option",
      description: "Pick an amount to invest and remit over 3 months",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto  py-12 px-6">
      <h2 className="text-2xl  font-semibold mb-6">Terms</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-6 ">
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

export default Terms;
