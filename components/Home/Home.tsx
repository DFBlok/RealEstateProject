import React from "react";
import Hero from "./Hero/Hero";
import ApartmentType from "./Apartment/ApartmentType";
import PropertyType from "./Properties/PropertyType";
import CityProperties from "./CityProperties/CityProperties";
import BuildingFeature from "./BuildingFeature/BuildingFeature";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartmentType />
      <PropertyType />
      <CityProperties />
      <BuildingFeature />
    </div>
  );
};

export default Home;
