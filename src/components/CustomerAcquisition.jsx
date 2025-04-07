import React from "react";

const CustomerAcquisition = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          Customer Acquisition Strategy
        </h1>

        <section className="mb-6">
          <h2 className="text-lg py-2 font-medium">Affiliate Model</h2>
          <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
            <p className="font-thin text-xs">
              Incentives for affiliates: Cash bonuses, lifetime commissions.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg py-2 font-medium">
            Cost of Acquisition (CAC)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-light">Per Resource</h3>
              <p className=" pt-2 font-thin text-xs">N3,500 per resource.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-light">Per Company</h3>
              <p className=" pt-2 font-thin text-xs">N19,000 per company.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg py-2 font-medium">
            Customer Lifetime Value (LTV)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-light">Per Resource</h3>
              <p className="pt-2 font-thin text-xs">N154,500 per resource.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-light">Per Local Company</h3>
              <p className=" pt-2 font-thin text-xs">
                N1,540,800 per local company.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-light">Per Foreign Company</h3>
              <p className=" pt-2 font-thin text-xs">
                $4,744 per foreign company.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerAcquisition;
