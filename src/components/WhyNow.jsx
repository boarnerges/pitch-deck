import React from "react";

const WhyNow = () => {
  const forces = [
    {
      title: "Global Inflation",
      description:
        "Economic pressures are driving businesses to seek flexible and cost-effective workforce solutions.",
    },

    {
      title: "Global change in Work Behavior",
      description:
        "The shift to remote and hybrid work models has accelerated the need for virtual workforce platforms.",
    },

    {
      title: "Need for Work-Life Balance",
      description:
        "Professionals increasingly prioritize flexibility and balance in their career choices.",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto  py-12 px-6 ">
        <h2 className="text-2xl  font-semibold mb-6">Why Now</h2>
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
    </div>
  );
};

export default WhyNow;
