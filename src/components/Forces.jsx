import React from "react";

const Forces = () => {
  const forces = [
    {
      title: "Competitive Rivalry",
      description: "Medium to high competion",
      logo: "/logo/competitors.svg",
    },

    {
      title: "Threat of New Entrants",
      description: "Moderate threat",
      logo: "/logo/entrants.svg",
    },

    {
      title: "Bargaining Power of Suppliers",
      description: "Low.",
      logo: "/logo/suppliers.svg",
    },
    {
      title: "Bargaining Power of Buyers",
      description: "Medium.",
      logo: "/logo/buyers.svg",
    },
    {
      title: "Threat of Substitutes",
      description: "Low.",
      logo: "/logo/substitutes.svg",
    },
  ];
  return (
    <div className="bg-gray-50 max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl  font-semibold text-center mb-6">
        Porter's Five Forces
      </h2>
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

export default Forces;
