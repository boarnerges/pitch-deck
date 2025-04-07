import React from "react";

const Summary = () => {
  const forces = [
    {
      title: "Disruptive HR Solution",
      description: "Flexible, affordable resource-sharing.",
    },

    {
      title: "Unique Value Proposition",
      description: "Budget-friendly hiring and quality talent access.",
    },

    {
      title: "Investor Benefits",
      description: "Access to a fast-growing, scalable business.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto  py-12 px-6">
      <h2 className="text-2xl  font-semibold mb-6">Summary</h2>
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

export default Summary;
