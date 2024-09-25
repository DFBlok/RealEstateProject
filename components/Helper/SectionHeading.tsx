import React from "react";

type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

export default SectionHeading;
