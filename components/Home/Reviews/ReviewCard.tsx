import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="bg-white rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20" />
    </div>
  );
};

export default ReviewCard;
