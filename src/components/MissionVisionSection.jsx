import React from "react";
import { Globe, Users, Target } from "lucide-react"; // Optional if you use Lucide icons

const MissionVisionSection = () => {
  return (
    <section className="bg-gray-50 ">
      <div
        className=" px-6 py-12 max-w-5xl mx-auto
    text-gray-800"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-semibold mb-2">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Mission and Vision
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We're dedicated to transforming Africa's entrepreneurial landscape
            through strategic investments and mentorship.
          </p>
        </div>

        {/* Mission/Vision/Values Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow-sm ">
            <div className="text-blue-500 mb-4">
              <Target size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mission Statement</h3>
            <p className="text-gray-700 text-sm">
              Empower impactful African startups by leveraging a community of
              engaged micro-investors committed to positive change and growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-xl shadow-sm ">
            <div className="text-blue-500 mb-4">
              <Globe size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Vision Statement</h3>
            <p className="text-gray-700 text-sm">
              Create an accessible environment where startups gain funding,
              mentorship, and strategic connections, transforming Africa’s
              entrepreneurial landscape.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white p-6 rounded-xl shadow-sm ">
            <div className="text-blue-500 mb-4">
              <Users size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Core Values</h3>
            <p className="text-gray-700 text-sm">
              We prioritize inclusivity, integrity, innovation, and impact in
              all our investment decisions and mentorship relationships.
            </p>
          </div>
        </div>

        {/* Core Objectives Section */}
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm ">
          <h3 className="text-xl text-center font-semibold text-blue-500 mb-6">
            Core Objectives
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Objective 1 */}
            <div>
              <h4 className="font-normal mb-2">
                Promoting Inclusive Investment
              </h4>
              <p className="text-gray-700 text-sm">
                SAN offers family and friends a platform to support African
                startups, making early-stage investing more accessible to a
                broader community.
              </p>
            </div>
            {/* Objective 2 */}
            <div>
              <h4 className="font-normal mb-2">
                Building a Supportive Ecosystem
              </h4>
              <p className="text-gray-700 text-sm">
                SAN provides strategic guidance beyond funding, nurturing
                startups in tech, healthcare, and sustainable development
                sectors.
              </p>
            </div>
            {/* Objective 3 */}
            <div>
              <h4 className="font-normal mb-2">Catalyzing Local Innovation</h4>
              <p className="text-gray-700 text-sm">
                SAN helps local startups access global markets, supporting
                African entrepreneurs in scaling their innovations for wider
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
