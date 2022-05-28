import React from "react";

const PortfolioBanner = () => {
  return (
    <div
      className="hero min-h-screen rounded-xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/30w2PBh/hand-drawn-web-developers-23-2148819604.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-2xl">
            I am zihad.Full-stack javascript web developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
