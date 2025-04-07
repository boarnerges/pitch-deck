import React from "react";

const Partners = () => {
  const forces = [
    {
      title: "Access to emerging talent",

      logo: "./public/partner/miva.svg",
    },

    {
      title: "HR and Operations software solutions",

      logo: "./public/partner/zoho.svg",
    },

    {
      title: "Skilled graduate partnerships",

      logo: "./public/partner/wigwe.svg",
    },
    {
      title: "Upskillig and career services",

      logo: "./public/partner/stutern.svg",
    },
  ];
  return (
    <div className="bg-gray-50 max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl py-4  font-semibol mb-6">
        Other Strategic Partners
      </h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-6 lg:grid-cols-4">
        {forces.map((force, index) => (
          <div
            className="bg-white px-4 py-4 shadow-md rounded-lg mt-4 sm:mt-0"
            key={index}
          >
            <div className="py-2 h-[104px] w-[147px] ">
              <img className="" src={force.logo} alt="avatar" />
            </div>

            <h3 className="py-2 text-base ">{force.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
