import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection";
import "./index.css";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import UserPersonas from "./components/UserPersonas";
import ProductService from "./components/ProductService";
import ProductOverview from "./components/ProductOverview";
import MarketSize from "./components/MarketSize";
import Technology from "./components/Technology";
import Business from "./components/Business";
import Swot from "./components/Swot";
import Forces from "./components/Forces";
import Traction from "./components/Traction";
import Landscape from "./components/landscape";
import WhyWeDiffer from "./components/WhyWeDiffer";
import Partners from "./components/Partners";
import OtherPartners from "./components/OtherPartners";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <ProblemSolutionSection />
      <UserPersonas />
      <ProductService />
      <ProductOverview />
      <MarketSize />
      <Technology />
      <Business />
      <Swot />
      <Forces />
      <Traction />
      <Landscape />
      <WhyWeDiffer />
      <Partners />
      <OtherPartners />
      <Footer />
    </div>
  );
}

export default App;
