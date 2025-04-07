import React from "react";

const Contact = () => {
  const forces = [
    {
      title: "Email",
      description: "hello@sincpartners.com",
      logo: "/logo/competitors.svg",
    },

    {
      title: "Direct Line (Phone/WhatsApp)",
      description: "+234-704-120-0171",
      logo: "/logo/entrants.svg",
    },

    {
      title: "Social Media",
      description: "@frontlett on Facebook, X, Instagram.",
      logo: "/logo/suppliers.svg",
    },
  ];
  return (
    <div className="bg-gray-50 ">
      <div className="max-w-5xl mx-auto py-6 px-6">
        <h2 className="text-2xl  font-semibold mb-6">Contact</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3  gap-6">
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
    </div>
  );
};

export default Contact;
