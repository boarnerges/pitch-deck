import React from "react";
import RevenueInvestment from "../components/RevenueInvestment";
import RevenueModelDashboard from "../components/RevenueModelDashboard";
import MarketStrategy from "../components/MarketStrategy";
import CustomerAcquisition from "../components/CustomerAcquisition";
import FinancialProjections from "../components/FinancialProjections";
import UseOfFund from "../components/UseOfFund";
import FinancialProjection from "../components/FinancialProjection";
import Terms from "../components/Terms";
import WhyNow from "../components/WhyNow";
import ExitStrategy from "../components/ExitStrategy";

const SlideTwo = () => {
  return (
    <div>
      <RevenueInvestment />
      <RevenueModelDashboard />
      <MarketStrategy />
      <CustomerAcquisition />
      <FinancialProjections />
      <UseOfFund />
      <FinancialProjection />
      <Terms />
      <WhyNow />
      <ExitStrategy />
    </div>
  );
};

export default SlideTwo;
