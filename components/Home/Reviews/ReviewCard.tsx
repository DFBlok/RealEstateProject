import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="bg-white rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20" />
      <div className="mt-6 items-center flex">
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
      </div>
    </div>
  );
};

export default ReviewCard;
