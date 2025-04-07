import React from "react";

const UseOfFund = () => {
  const forces = [
    {
      title: "MVP Development",
      description: "30% ($3k) (N5.25m)",
    },

    {
      title: "Operations",
      description: "30% ($3k) (N5.25m)",
    },

    {
      title: "Sales & Marketing",
      description: "20% ($2k) (N3.5m)",
    },
    {
      title: "Regulatory Compliance",
      description: "20% ($2k) (N3.5m)",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto  py-12 px-6 ">
        <h2 className="text-2xl  font-semibold mb-6">Use of Funds</h2>
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
    </div>
  );
};

export default UseOfFund;
