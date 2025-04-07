import React from "react";
import Dash from "./Dash";

const Team = () => {
  const teamMembers = [
    {
      name: "Daniel Oratokhai",
      role: "CEO",
      image: "/images/placeholder.svg",
      social: { linkedin: "#", x: "#", facebook: "#", instagram: "#" },
    },
    {
      name: "David Ker",
      role: "Multimedia Head",
      image: "//images/placeholder.svg",
      social: { linkedin: "#", x: "#", facebook: "#", instagram: "#" },
    },
    {
      name: "Victor Adams",
      role: "CMO",
      image: "/images/placeholder.svg",
      social: { linkedin: "#", x: "#", facebook: "#", instagram: "#" },
    },
    {
      name: "David Efetobor",
      role: "Technical Lead",
      image: "/images/placeholder.svg",
      social: { linkedin: "#", x: "#", facebook: "#", instagram: "#" },
    },
  ];

  const advisors = [
    {
      name: "David Omoiqui",
      role: "Business Strategy",
      image: "/images/advicer.svg",
      social: { linkedin: "#", x: "#", facebook: "#", instagram: "#" },
    },
    {
      name: "Bar Akin Sanda",
      role: "Legal & Regulatory",
      image: "/images/advicer.svg",
      social: { linkedin: "#", x: "#", facebook: "#", instagram: "#" },
    },
  ];

  const TeamCard = ({ name, role, image, social }) => {
    return (
      <div className="bg-white shadow-xs rounded-sm p-4 text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
        <h3 className="text-2xl font-normal mt-3">{name}</h3>
        <p className="text-xl font-thin text-blue-300">{role}</p>
        <div className="flex justify-center space-x-3 mt-3 text-gray-500">
          <a href={social.linkedin} className="hover:text-blue-700">
            <img src="/socials/linkedin.svg" alt="linkedin" />
          </a>
          <a href={social.x} className="hover:text-blue-700">
            <img src="/socials/twitter.svg" alt="twitter" />
          </a>
          <a href={social.facebook} className="hover:text-blue-700">
            <img src="/socials/facebook.svg" alt="" />
          </a>
          <a href={social.instagram} className="hover:text-blue-700">
            <img src="/socials/instagram.svg" alt="" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className=" max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl  font-semibold text-center mb-6">Team</h2>
        <Dash />
        <p className="font-thin text-base text-center mt-6 mb-6">
          The experts behind Frontlett Virtualizing
        </p>

        <div className="w-full max-w-6xl mx-auto p-6">
          {/* Key Team Members */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Key Team Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-fit mx-auto lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>

          {/* Advisors */}
          <h2 className="text-2xl font-bold text-center mt-10 mb-6">
            Advisors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto w-fit gap-6">
            {advisors.map((advisor, index) => (
              <TeamCard key={index} {...advisor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
