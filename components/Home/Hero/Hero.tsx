import SearchBox from "@/components/Helper/SearchBox";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative  bg-cover bg-center hero-section">
      {/* Black overlay */}
      <div className="absolute bg-black opacity-70 inset-0"></div>
      {/* content */}
      <div className="flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10">
        <h1 className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium">
          The best way to
        </h1>
        <h1 className="text-center font-semibold text-3xl sm:text-5xl text-white mt-4">
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-center text-sm sm:text-gray-200">
          We&apos;ve more than 745,000 apartments, place and plot.
        </p>
        <div className="mt-12 w-full">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
