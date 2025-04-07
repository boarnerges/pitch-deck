import React from "react";
import { Check } from "lucide-react";

const membershipPoints = [
  "Membership in SAN is invite-only, maintaining the network’s exclusive nature.",
  "Prospective members are vetted by SINC Partners to ensure alignment with SAN’s values and investment goals.",
  "Annual membership renewal depends on fulfilling the $10 fee and minimum investment criteria.",
  "Members gain access to carefully selected early-stage African startups with high growth potential.",
  "Each investment opportunity is presented with comprehensive information for informed decision-making.",
];

export default function MembershipCommitment() {
  return (
    <section className="bg-white py-12 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
          Join Us
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          Membership Eligibility & Commitment
        </h2>
        <p className="text-gray-600 max-w-2xl text-sm mx-auto mt-2">
          Become part of our exclusive network of micro-investors making a
          difference in Africa’s
          <br /> startup ecosystem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Membership Details
          </h3>
          <ul className="space-y-4">
            {membershipPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="text-blue-600 mt-1 w-5 h-5" />
                <span className="text-gray-700 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Financial Structure
          </h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium py-2 text-gray-900">Membership Fee</p>
              <p className="py-2">
                Annual fee of $10 to maintain network membership
              </p>
            </div>
            <div>
              <p className="font-medium py-2 text-gray-900">
                Investment Minimum
              </p>
              <p className="py-2">$100 minimum investment per deal</p>
            </div>
            <div>
              <p className="font-medium py-2 text-gray-900">
                Engagement Requirement
              </p>
              <p className="py-2">
                At least one investment annually to maintain active membership
              </p>
            </div>
          </div>
          <p className="mt-6 py-4 text-center rounded-lg w-full bg-blue-600 hover:bg-blue-700 text-white">
            Request Membership
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 md:p-10 rounded-2xl text-center md:text-left">
        <h3 className="text-xl text-center  font-semibold text-blue-500 mb-6">
          Community Engagement and Value-Added Support
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
          <div>
            <p className="font-medium text-gray-900 mb-2">
              Mentorship & Knowledge Sharing
            </p>
            <p>
              In addition to funding, SAN emphasizes mentorship,
              knowledge-sharing, and guidance to foster startups’ long-term
              success. Members are encouraged to participate directly with
              startups, attending check-ins and events to share insights.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-2">
              What Makes SAN Unique?
            </p>
            <p>
              SAN combines early access with a unique exit strategy, empowering
              family and friends to invest in high-growth opportunities while
              managing risk. The focus on impact-driven investments aligns SAN
              with sectors that drive societal and economic value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
