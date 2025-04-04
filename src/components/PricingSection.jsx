import React from "react";
import Dash from "./Dash";

const pricingOptions = [
  {
    type: "Employees",
    price: "₦40,000/mth to ₦60m/mth",
    tag: "for 160hrs per month of work.",
    description:
      "Join our platform to maximize your earning potential while maintaining worklife balance.",
    color: "bg-blue-100",
    logo: "../public/logo/phone.svg",
  },
  {
    type: "Consultants/Advisors",
    price: "₦800,000/mth to ₦40m/mth",
    tag: "for 80hrs per month of work.",
    description:
      "Join our platform to maximize your earning potential while maintaining worklife balance.",
    color: "bg-purple-100",
    logo: "../public/logo/phone.svg",
  },
  {
    type: "Digital Influencers",
    price: "₦1m/mth to ₦100m/mth",
    tag: "for 10 posts per month.",
    description:
      "Join our platform to maximize your earning potential while maintaining worklife balance.",
    color: "bg-green-100",
    logo: "../public/logo/phone.svg",
  },
];

const Pricing = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">
        Who Are Resources & What Do They Earn
      </h2>
      <Dash />
      <p className="font-thin text-xl text-center mt-6 mb-6">
        Our platform supports various resource types with competitive
        compensation
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md text-center"
          >
            <div className={`pb-[16px] flex items-center justify-center `}>
              <div
                className={`rounded-full h-[48px] w-[48px] bg-black ${option.color} flex items-center justify-center`}
              >
                <img
                  src={option.logo}
                  alt="phone"
                  className="h-[32px] w-[32px] "
                />
              </div>
            </div>
            <h3 className="text-xl font-normal py-2 text-gray-800">
              {option.type}
            </h3>
            <div className="bg-[#5D9CEC1A]  rounded-2xl py-[8px]">
              <p className="text-[#0E93E8] px-2 text-xl font-bold mt-2">
                {option.price}
              </p>
              <p className="text-gray-600 mt-2 font-thin text-sm ">
                {option.tag}
              </p>
            </div>
            <div className="bg-gray-100 mt-4 w-full h-[1px]"></div>
            <p className=" font-thin text-base py-2 ">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
