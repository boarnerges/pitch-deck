import React from "react";

const ExitStrategy = () => {
  const forces = [
    {
      title: "Buyout by founders",
      description: "Option for founders to buy back shares at a premium.",
    },

    {
      title: "Exit at next investment round",
      description:
        "Opportunity to exit during subsequent funding rounds with attractive returns.",
    },

    {
      title: "Acquisition by larger workforce platforms",
      description:
        "Strategic acquisition by established players in the workforce management space.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto  py-12 px-6">
      <h2 className="text-2xl  font-semibold mb-6">Exit Strategy</h2>
      <p className="text-md font-semibold">Potential Exits</p>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-6 ">
        {forces.map((force, index) => (
          <div
            className="bg-white px-4 py-4 h-[fit] shadow-md rounded-lg"
            key={index}
          >
            <h3 className="py-2 text-base ">{force.title}</h3>
            <p className=" text-xs font-thin">{force.description}</p>
          </div>
        ))}
      </div>

      <section className="py-12">
        <h2 className="text-lg  font-medium">Long-Term Vision</h2>
        <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
          <p className="font-thin text-xs">
            Scaling across African markets with global potential, creating a
            comprehensive virtual workforce solution that becomes an industry
            standard.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExitStrategy;
