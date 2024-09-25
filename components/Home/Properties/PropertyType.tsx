import SectionHeading from "@/components/Helper/SectionHeading";
import { properties } from "@/data/data";
import React from "react";
import { DiVim } from "react-icons/di";
import PropertyCard from "./PropertyCard";
import { propagateServerField } from "next/dist/server/lib/render-server";

const Property = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Discovery Properties" />
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          {properties.map((property) => {
            return (
              <div key={property.id}>
                <PropertyCard property={property} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Property;
