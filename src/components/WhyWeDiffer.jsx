import React from "react";

const WhyWeDiffer = () => {
  const forces = [
    {
      title: "Budget-Based Hiring",
      description: "Companies can hire based on budget.",
    },

    {
      title: "Comiitted Teams",
      description: "Hire non-essential staff with company vision alignment",
    },

    {
      title: "Ideal Salary",
      description: "Resources earn close to their desired pay.",
    },
    {
      title: "Complete Teams",
      description: "Assemble a full team affordably.",
    },
    {
      title: "Resource Engagement",
      description: "Multiple hiring options improve job security.",
    },
  ];
  return (
    <div className="bg-gray-50 max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl  font-semibold mb-6">Why We Differ</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-6 ">
        {forces.map((force, index) => (
          <div
            className="bg-white px-4 py-4 h-[fit] shadow-md rounded-lg mt-4 sm:mt-0"
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

export default WhyWeDiffer;
