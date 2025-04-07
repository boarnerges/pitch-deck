import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinancialProjections = () => {
  const tablesData = [
    {
      title: "Best Case Scenario",
      data: [
        {
          category: "Local Companies (Slots)",
          firstYear: "240,000",
          secondYear: "240,000",
        },
        {
          category: "Foreign Companies (Slots)",
          firstYear: "60,000",
          secondYear: "60,000",
        },
        {
          category: "Monthly HR Fee (Local)",
          firstYear: "₦980/slot",
          secondYear: "₦980/slot",
        },
        {
          category: "Monthly HR Fee (Foreign)",
          firstYear: "$3.9/slot",
          secondYear: "$3.9/slot",
        },
      ],
    },
    {
      title: "Medium Case Scenario",
      data: [
        {
          category: "Local Companies (Slots)",
          firstYear: "80,000",
          secondYear: "80,000",
        },
        {
          category: "Foreign Companies (Slots)",
          firstYear: "20,000",
          secondYear: "20,000",
        },
        {
          category: "Monthly HR Fee (Local)",
          firstYear: "₦980/slot",
          secondYear: "₦980/slot",
        },
        {
          category: "Monthly HR Fee (Foreign)",
          firstYear: "$3.9/slot",
          secondYear: "$3.9/slot",
        },
      ],
    },

    {
      title: "Worst Case Scenario",
      data: [
        {
          category: "Local Companies (Slots)",
          firstYear: "32,000",
          secondYear: "32,000",
        },
        {
          category: "Foreign Companies (Slots)",
          firstYear: "8,000",
          secondYear: "8,000",
        },
        {
          category: "Monthly HR Fee (Local)",
          firstYear: "₦980/slot",
          secondYear: "₦980/slot",
        },
        {
          category: "Monthly HR Fee (Foreign)",
          firstYear: "$3.9/slot",
          secondYear: "$3.9/slot",
        },
      ],
    },
  ];

  // Data for pie chart
  const pieData = [
    { name: "Local Companies", value: 70, color: "#619bf8" },
    { name: "Foreign Companies", value: 20, color: "#ff8b6a" },
    { name: "Employees", value: 10, color: "#6ad7d0" },
  ];

  // Data for bar chart
  const barData = [
    { name: "Best Case", firstYear: 2800000, secondYear: 7000000 },
    { name: "Medium Case", firstYear: 1000000, secondYear: 2300000 },
    { name: "Worst Case", firstYear: 400000, secondYear: 1000000 },
  ];
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Financial Projections
      </h1>

      <div className="grid gap-6 mb-8">
        <div className="w-full py-6">
          <div className=" sm:grid grid-cols-2 gap-6">
            {/* Pie Chart Section */}
            <div className="bg-gray-50 py-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-light text-center mb-6">
                Projection (Best Case)
              </h2>

              <div className="h-80 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      className="  text-[40%]"
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} (${(percent * 100).toFixed(0)}%)`
                      }
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-center items-center mt-4">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex gap-2 px-2 items-center">
                    <div
                      className="w-4 h-2 mr-2"
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-xs text-gray-600">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bar Chart Section */}
            <div className="bg-gray-50 py-6 mt-6 sm:mt-0 rounded-lg shadow-sm">
              <h2 className="text-xl font-light text-center mb-6">Scenarios</h2>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    className="text-xs"
                    data={barData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis
                      domain={[0, 8000000]}
                      tickFormatter={(value) => value.toLocaleString()}
                    />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Bar dataKey="firstYear" name="First Year" fill="#619bf8" />
                    <Bar
                      dataKey="secondYear"
                      name="Second Year"
                      fill="#ff8b6a"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-center items-center mt-4 space-x-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 mr-2"></div>
                  <span className="text-sm text-gray-600">First Year</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-400 mr-2"></div>
                  <span className="text-sm text-gray-600">Second Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Case Scenario Table */}
      <div className="w-full space-y-8">
        {tablesData.map((table, tableIndex) => (
          <div key={tableIndex} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{table.title}</h2>
            <div className="w-full overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">
                      First Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">
                      Second Year
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {table.data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.firstYear}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.secondYear}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Best Case Scenario
        </h2>

        <div className="bg-white rounded-sm shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">
                  First Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">
                  Second Year
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-thin text-gray-900">
                  Local Companies (Slots)
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  240,000
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  240,000
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm font-medium text-gray-900">
                  Foreign Companies (Slots)
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  60,000
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  60,000
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm font-medium text-gray-900">
                  Monthly HR Fee (Local)
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  ₦980/slot
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  ₦980/slot
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm font-medium text-gray-900">
                  Monthly HR Fee (Foreign)
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  $3.9/slot
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap text-sm text-gray-500">
                  $3.9/slot
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default FinancialProjections;
