import React from "react";
import TeamContact from "../components/TeamContact";
import Team from "../components/Team";
import ParticipationSection from "../components/ParticipationSection";
import InvestmentAsk from "../components/InvestmentAsk";
import Summary from "../components/Summary";
import Contact from "../components/Contact";

const SlideThree = () => {
  return (
    <div>
      <TeamContact />
      <Team />
      <ParticipationSection />
      <InvestmentAsk />
      <Summary />
      <Contact />
    </div>
  );
};

export default SlideThree;
