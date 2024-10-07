import React from "react";

type Props = {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const BuildingFeatureCard = ({ building }: Props) => {
  return <div>BuildingFeatureCard</div>;
};

export default BuildingFeatureCard;
