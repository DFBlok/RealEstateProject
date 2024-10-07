import React from "react";
import Hero from "./Hero/Hero";
import ApartmentType from "./Apartment/ApartmentType";
import PropertyType from "./Properties/PropertyType";
import CityProperties from "./CityProperties/CityProperties";
import BuildingFeature from "./BuildingFeature/BuildingFeature";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartmentType />
      <PropertyType />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
    </div>
  );
};

export default Home;
