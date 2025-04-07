import React from "react";
import Dash from "./Dash";

const Traction = () => {
  const milestone = [
    {
      type: "70% UI/UX design done",
      avatar: "/logo/design-done.svg",

      description: "User interface and experience design nearing completion.",
    },

    {
      type: "Phase 1 development started",
      avatar: "/logo/development.svg",

      description: "Core platform functionality under active development.",
    },

    {
      type: "Initial customer acquisition in progress",
      avatar: "/logo/acquisition.svg",

      description: "Early adopters being onboarded to the platform.",
    },
  ];
  return (
    <div>
      <div className=" bg-gray-50 max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl  font-semibold text-center mb-6">Traction</h2>
        <Dash />
        <p className="font-thin text-base text-center mt-6 mb-6">
          Our progress and milestones
        </p>
        <div className="sm:grid grid-cols-2 items-center gap-6">
          <div className="bg-white h-fit p-4 shadow-sm rounded-xl">
            <h3 className="py-2">Milestones</h3>
            {milestone.map((market, index) => (
              <div key={index} className="py-2 flex align-center gap-2 ">
                <img
                  className="h-[30px] w-[30px]"
                  src={market.avatar}
                  alt="avatar"
                />
                <div>
                  <p className="font-normal">{market.type}</p>
                  <div className="rounded-xl text-xs py-1 font-thin">
                    <p>{market.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg mt-4 sm:mt-0">
            <h3 className="py-2">Regulatory Readiness</h3>
            <div className="  py-4 flex align-center gap-2 ">
              <img
                className="h-[40px] w-[40px]"
                src="/logo/compliance.svg"
                alt="avatar"
              />
              <div>
                <p className="font-normal">
                  Compliance with local and global HR regulations
                </p>
                <div className="rounded-xl text-xs py-1 font-thin">
                  <p>
                    Ensuring all operations meet regulatory requirements across
                    multiple jurisdictions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#5D9CEC1A] rounded-lg shadow-lg p-4">
              <h3 className="py-2 text-[#0E93E8]">Next Steps</h3>
              <div className="flex items-center gap-4  pt-2 ">
                <img src="/dot.svg" className="h-[8px] w-[8px]" alt="" />
                <p className="font-thin text-xs ">
                  Complete platform development
                </p>
              </div>
              <div className="flex items-center gap-4  pt-2 ">
                <img src="/dot.svg" className="h-[8px] w-[8px]" alt="" />
                <p className="font-thin text-xs ">Launch beta testing phase</p>
              </div>

              <div className="flex items-center gap-4  pt-2 ">
                <img src="/dot.svg" className="h-[8px] w-[8px]" alt="" />
                <p className="font-thin text-xs ">
                  Secure strategic partnerships
                </p>
              </div>
              <div className="flex items-center gap-4  pt-2 ">
                <img src="/dot.svg" className="h-[8px] w-[8px]" alt="" />
                <p className="font-thin text-xs ">
                  Scale operations nationally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traction;
