import React from "react";
import BusinessSummary from "./BusinessSummary";
import Hero from "./Hero";
import Review from "./Review";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Tools />
      <BusinessSummary />
      <Review />
    </div>
  );
};

export default Home;
