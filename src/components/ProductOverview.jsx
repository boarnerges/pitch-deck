import React from "react";

const ProductOverview = () => {
  const overview = [
    {
      title: "Collaborative Platform",
      description: "Flexibile time slots for affordable 2-hour slots.",
    },

    {
      title: "Resource Sharing",
      description: "Cost-sharing for high-quality talent.",
    },

    {
      title: "Management",
      description: "Scheduling, payments, and tracking handled by Frontlett.",
    },
  ];
  return (
    <div className="bg-white py-6 px-6">
      <h2 className="text-3xl py-4">Product Overview</h2>
      <div className=" sm:grid grid-cols-2 gap-4 lg:grid-cols-3">
        {overview.map((view, index) => (
          <div
            className="bg-gray-50 px-4 py-4 shadow-md rounded-lg mt-4 sm:mt-0"
            key={index}
          >
            <h3 className="py-2 text-base ">{view.title}</h3>
            <p className="py-2 text-sm font-thin">{view.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOverview;
