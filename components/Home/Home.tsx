import React from "react";
import Hero from "./Hero/Hero";
import ApartmentType from "./Apartment/ApartmentType";
import PropertyType from "./Properties/PropertyType";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartmentType />
      <PropertyType />
    </div>
  );
};

export default Home;
