import React from "react";
import Dash from "./Dash";

const ProductService = () => {
  const products = [
    {
      logo: "./public/logo/sharing.svg",
      service: "Staff Sharing & Resource Sharing",
      description:
        "Flexible, time-slot hiring for employees, consultants, and influencers.",
    },

    {
      logo: "./public/logo/hr.svg",
      service: "HR Consultancy",
      description: "Expert HR support for your business needs.",
    },

    {
      logo: "./public/logo/training.svg",
      service: "Training Services",
      description: "Professional development and upskilling opportunities.",
    },

    {
      logo: "./public/logo/device.svg",
      service: "Device Acquisition Services",
      description: "Access to hardware/software for job readiness.",
    },

    {
      logo: "./public/logo/loan.svg",
      service: "Loan Services",
      description: "Financial support for resources.",
    },
  ];
  return (
    <div className="py-7 px-6 bg-gray-50">
      <h3 className="text-center py-4 text-3xl font-bold">
        Product & Services
      </h3>
      <Dash />
      <p className="text-center font-thin text-base py-4">
        Comprehensive solutions for both companies and resources
      </p>

      <div className=" sm:grid grid-cols-2 gap-4 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg py-4 mt-2 sm:mt-0 "
          >
            <div className="flex align-center justify-center">
              <div className="py-2 flex items-center justify-center h-[48px] w-[48px] bg-[#5D9CEC1A] rounded-full  ">
                <img className="" src={product.logo} alt="avatar" />
              </div>
            </div>
            <h3 className="py-2 text-center">{product.service}</h3>
            <p className="py-2 text-center text-sm font-thin">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductService;
