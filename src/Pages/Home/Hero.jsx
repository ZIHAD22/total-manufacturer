import React from "react";

const Hero = () => {
  return (
    <div
      class="hero min-h-screen bg-opacity-75 lg:rounded-lg"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/different-construction-accessories_185193-17575.jpg?w=900")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="hero-content flex-col text-left text-neutral-content bg-opacity-5">
        <div class="max-w-2xl text-black">
          <span className="text-accent mb-5 block font-bold text-xl">
            THE ULTIMATE GOAL
          </span>
          <h1 class="mb-5 text-5xl font-bold text-white">
            We are manufacturing products with world class quality.
          </h1>
          <button class="btn btn-accent text-black my-5">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
