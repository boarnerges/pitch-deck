import React from "react";
import SincHero from "../components/SincHero";
import SincBar from "../components/sincbar";
import AboutSection from "../components/AboutSection";
import MissionVisionSection from "../components/MissionVisionSection";
import MembershipCommitment from "../components/MembershipCommitment";
import ContactJoinComponent from "../components/ContactJoinComponent";

const Sinc = () => {
  return (
    <div>
      <SincHero />
      <SincBar />
      <AboutSection />
      <MissionVisionSection />
      <MembershipCommitment />
      <ContactJoinComponent />
    </div>
  );
};

export default Sinc;
