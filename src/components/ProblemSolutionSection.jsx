import React from "react";
import Dash from "./Dash";
import { AlertTriangle, Check, User } from "lucide-react";

const companyChallenges = [
  {
    issue: "Limited hiring power due to budget constraints.",
    solution: "Budget-aligned hiring through affordable time slots.",
  },
  {
    issue: "Incomplete teams due to high costs of full-time staff.",
    solution: "Complete team access within budget limitations.",
  },
  {
    issue: "Reliance on freelancers who may lack long-term commitment.",
    solution: "Opportunity to hire long-term talent over freelancers.",
  },
  {
    issue: "Inability to access top talent within financial reach.",
    solution: "Access to skilled talent without budget constraints.",
  },
];

const ResourcesOptions = [
  {
    type: "Limited job opportunities",

    description: "Increased job engagement.",
  },
  {
    type: "Low compensation due to limited job availability",

    description: "Competitive compensation through multiple engagements.",
  },
  {
    type: "Lack of flexibility and adaptable work arrangements",

    description: "Flexible work structure.",
  },
  {
    type: "Minimal benefits such as health and life insurance",

    description: "Enhanced benefits, regardless of company size.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Problem & Solution
      </h2>
      <Dash />
      <div className=" lg:grid grid-cols-2 mt-12  gap-7">
        <div className=" mb-6 p-5 bg-[#5D9CEC1A] shadow-md rounded-xl">
          <h3 className="text-[#0E93E8] text-2xl font-semibold mb-6">
            For Company
          </h3>
          <div className="space-y-6">
            {companyChallenges.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow-sm flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-medium text-gray-900 text-sm">
                    {item.issue}
                  </p>
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <p className="flex items-start text-sm text-blue-500">
                      <Check className="w-4 h-4 mt-1 mr-2" /> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" p-5 bg-orange-100 shadow-md rounded-xl">
          <h3 className="text-orange-500 text-xl font-normal">For Resources</h3>
          {ResourcesOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white flex gap-4 shadow-sm mt-6 rounded-xl p-6"
            >
              <User className="h-10 rounded-full px-2 bg-orange-100 text-orange-500 w-10" />
              <div>
                <p className="text-base font-extralight">{option.type}</p>
                <div className="bg-orange-50 flex items-start text-orange-500 rounded-xl px-3 py-3 font-thin">
                  <Check className="w-4 h-4 mt-1 mr-2" />
                  <p>{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
