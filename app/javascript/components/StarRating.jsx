import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ value, onClick }) => {
  const [hoverValue, setHoverValue] = useState(null);

  const handleStarClick = (newValue) => {
    onClick(newValue);
  };

  const handleStarHover = (newValue) => {
    setHoverValue(newValue);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`star ${
              (hoverValue || value) >= ratingValue ? "text-yellow-500" : "text-gray-400"
            }`}
            size={15}
            onClick={() => handleStarClick(ratingValue)}
            onMouseEnter={() => handleStarHover(ratingValue)}
            onMouseLeave={() => handleStarHover(null)}
          />
        );
      })}
      <span className="ml-2 normal-nums">{value}</span>
    </div>
  );
};

export default StarRating;
