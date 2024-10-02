import React from "react";
import Hero from "./Hero/Hero";
import ApartmentType from "./Apartment/ApartmentType";
import PropertyType from "./Properties/PropertyType";
import CityProperties from "./CityProperties/CityProperties";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartmentType />
      <PropertyType />
      <CityProperties />
    </div>
  );
};

export default Home;
