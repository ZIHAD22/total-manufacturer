import React from "react";
import About from "./About";
import PortfolioBanner from "./PortfolioBanner";

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="text-5xl my-5 text-center font-bold">My Portfolio</h1>
      <PortfolioBanner />
      <About />
    </div>
  );
};

export default Portfolio;
