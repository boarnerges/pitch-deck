import React from "react";
import Dash from "./Dash";

const UserPersonas = () => {
  const personas = [
    {
      name: "Ibrahim",
      title: "Legal Officer",

      challenges:
        "Needs to get employed plus having a minimum salary expectation but most companies do not see having a legal officer in-house as essential based on budget constraints.",
      value:
        "Based on the Virtualizing model, Ibrahim can get hired by multiple companies as they can afford a piece of his salary expectations.",
      avatar: "./public/avatar/ibrahim.svg",
    },
    {
      name: "Lucy",
      title: "Fintech Startup Founder",

      challenges:
        "Needs diverse talent but has budget constraints, limiting her hiring options.",
      value:
        "Allows the company to hire top talent that can get the job done by taking slots of 2hrs based on what the budget can take.",
      avatar: "./public/avatar/lucy.svg",
    },
  ];
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">User Personas</h2>
      <Dash />
      <p className="font-thin text-xl text-[#333333B2] text-center mt-6 mb-6">
        Meet our diverse customer base and learn how Frontlett Virtualizing
        solves their <br /> unique challenges
      </p>

      <div className=" sm:flex gap-1  ">
        {personas.map((person, index) => (
          <div
            key={index}
            className="px-6 py-6 rounded-lg shadow-md sm:w-[50%] mt-4 mb-4 bg-white"
          >
            <div className="flex gap-2">
              <img
                className="h-[64px] w-[64px]"
                src={person.avatar}
                alt="avatar"
              />
              <div>
                <p className="text-xl ">{person.name}</p>
                <p className="py-1 text-base font-thin text-[#0E93E8]">
                  {person.title}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 mb-3 rounded-lg shadow-md py-3 mt-4 px-4">
              <div className="w-[90%]">
                <h3 className="text-xl font-light py-2">Challenges:</h3>
                <p className="font-thin text-base">{person.challenges}</p>
              </div>
            </div>
            <div className="bg-[#5D9CEC1A] shadow-md rounded-lg py-4 px-4 ">
              <div className="w-[90%]">
                <h3 className="text-[#0E93E8] py-2 font-light text-xl">
                  Frontlett Value:
                </h3>
                <p className="font-thin text-base">{person.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPersonas;
