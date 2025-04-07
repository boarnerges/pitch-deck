import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import Dash from "./Dash";

const RevenueModelDashboard = () => {
  // Chart data for the revenue model
  const revenueData = [
    { name: "HR Fee (7.5%)", value: 45, color: "#60A5FA" }, // blue-400
    { name: "Platform Fees", value: 25, color: "#FB923C" }, // orange-400
    { name: "Commissions", value: 15, color: "#2DD4BF" }, // teal-400
    { name: "Interest", value: 15, color: "#C084FC" }, // purple-400
  ];

  return (
    <div className="bg-[#333333] min-h-screen p-8 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold py-3">Revenue Model</h1>
          <Dash />
          <p className="text-gray-300 font-thin py-3">
            Multiple revenue streams for sustainable growth
          </p>
        </div>

        {/* Main Chart */}
        <div className="bg-[#444444] rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-center mb-8">Revenue Model</h2>

          {/* Donut Chart using Recharts */}
          <div className="h-74 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={90}
                  paddingAngle={0}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  labelLine={false}
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lower Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gap-6">
            {/* HR Fee */}
            <div className="bg-[#444444] h-fit rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#5D9CEC33] flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">HR Fee</h3>
              </div>
              <p className="text-gray-300 mb-4">7.5% of the salary per slot</p>
              <div className="bg-[#666666] text-gray-300 rounded-lg p-4 text-sm">
                Applied to each transaction between companies and resources,
                providing a consistent revenue stream.
              </div>
            </div>

            {/* Additional Revenue */}
            <div className="bg-[#444444] rounded-xl mt-6 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#5D9CEC33] flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">
                  Additional Revenue Sources
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Interest from deposits
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Insurance commissions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Product commissions
                </li>
              </ul>
            </div>
          </div>

          <div>
            {/* Platform Fees */}
            <div className="bg-[#444444] rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#5D9CEC33] flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Platform Fees</h3>
              </div>
              <p className="text-gray-300 mb-4">For Companies:</p>
              <div className="bg-[#666666] rounded-lg p-4 text-gray-300 text-sm mb-4">
                Starting at ¥30,000/yr for local companies and $50/yr for
                foreign companies
              </div>
              <p className="text-gray-300 mb-4">For Resources:</p>
              <div className="bg-[#666666] rounded-lg p-4 text-gray-300 text-sm">
                Starting at ¥5,000/yr for resources
              </div>
            </div>

            {/* Projected Sales */}
            <div className="bg-[#444444] mt-6 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#5D9CEC33] flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Projected Sales</h3>
              </div>
              <div className="bg-[#666666] rounded-lg p-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-4xl font-bold text-[#5D9CEC] ">
                    300,000
                  </span>
                  <span className="text-gray-300 text-sm">
                    Target slots in 24 months
                  </span>
                </div>
                <div className="w-full bg-gray-400 rounded-full h-2 mb-1">
                  <div
                    className="bg-[#5D9CEC] h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-300">
                  35% progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueModelDashboard;
