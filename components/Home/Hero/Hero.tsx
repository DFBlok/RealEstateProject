import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative  bg-cover bg-center hero-section">
      {/* Black overlay */}
      <div className="absolute bg-black opacity-70 inset-0"></div>
    </div>
  );
};

export default Hero;
