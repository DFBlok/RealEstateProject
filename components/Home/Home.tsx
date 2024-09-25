import React from "react";
import Hero from "./Hero/Hero";
import ApartmentType from "./Apartment/ApartmentType";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartmentType />
    </div>
  );
};

export default Home;
