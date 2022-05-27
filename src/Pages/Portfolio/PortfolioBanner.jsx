import React from "react";

const PortfolioBanner = () => {
  return (
    <div
      class="hero min-h-screen rounded-xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/30w2PBh/hand-drawn-web-developers-23-2148819604.webp)",
      }}
    >
      <div class="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5 text-2xl">
            I am zihad.Full-stack javascript web developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
