"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
type Props = {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const BuildingFeatureCard = ({ building }: Props) => {
  return (
    <Tilt className="rounded-lg shadow-md p-4 bg-white">
      <div className="w-16 h-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full">
        <Image
          src={building.image}
          alt={building.title}
          width={40}
          height={40}
        />
      </div>
    </Tilt>
  );
};

export default BuildingFeatureCard;
