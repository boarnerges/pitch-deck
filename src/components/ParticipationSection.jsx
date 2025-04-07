const participationWays = [
  {
    id: 1,
    title: "As An Angel Investor",
    description:
      "Join the SINC Angels Network and invest as low as $100 (₦175,000) into Frontlett and get a return of 2-5x within a 12-month period.",
  },
  {
    id: 2,
    title: "As An Advisor/Mentor",
    description: "Help guide us along this journey as a mentor/advisor.",
  },
  {
    id: 3,
    title: "As A Co-Founder",
    description:
      "Experienced HR professionals can cofound this business for a 20-40% stake.",
  },
  {
    id: 4,
    title: "As An EIR",
    description:
      "Offer your time as an Entrepreneur-In-Residence while learning key entrepreneurial skills.",
  },
  {
    id: 5,
    title: "As A Service Incubator",
    description:
      "Help build the platform and share 7.5% equity or 750,000 shares worth $32,500.",
  },
  {
    id: 6,
    title: "As A Service Accelerator",
    description:
      "Brand Ambassadors with influence can earn 5% equity or 500,000 shares.",
  },
  {
    id: 7,
    title: "As An HR Partner",
    description:
      "HR Partners can be account managers for companies on the platform for a 30% income share.",
  },
  {
    id: 8,
    title: "As An Influencer",
    description:
      "Influencers with 10,000+ followers can collaborate with Frontlett.",
  },
  {
    id: 9,
    title: "As An Affiliate",
    description:
      "Earn 10% lifetime income from everyone you bring to the platform.",
  },
  {
    id: 10,
    title: "As A Grantee",
    description: "Grant this business as an individual or company.",
  },
];

const ParticipationCard = ({ id, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 ">
      <div className="w-8 h-8 mb-3 flex items-center justify-center bg-[#33C3F0] text-white font-thin rounded-full">
        {id}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const ParticipationSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-normal mb-6">10 Ways to Participate</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {participationWays.map((way) => (
          <ParticipationCard key={way.id} {...way} />
        ))}
      </div>
    </div>
  );
};

export default ParticipationSection;
