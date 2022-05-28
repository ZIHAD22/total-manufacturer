import React from "react";
import BusinessSummary from "./BusinessSummary";
import HelpSection from "./HelpSection";
import Hero from "./Hero";
import Map from "./Map";
import Review from "./Review";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Tools />
      <BusinessSummary />
      <Map />
      <Review />
      <HelpSection />
    </div>
  );
};

export default Home;
