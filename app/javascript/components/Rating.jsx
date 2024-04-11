import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }) => {
  const renderStars = () => {
    const stars = [];
    const wholeStars = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;
    const restStars = hasHalfStar ? 5 - wholeStars - 1 : 5 - wholeStars;

    for (let i = 0; i < wholeStars; i++) {
      stars.push(<FaStar key={i} className="star text-yellow-500" size={15} />);
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key="half-star"
          className="star text-yellow-500"
          size={15}
        />
      );
    }

    for (let i = 0; i < restStars; i++) {
      stars.push(
        <FaStar
          key={`gray-star-${i}`}
          className="star text-gray-400"
          size={15}
        />
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      <span className="ml-2 normal-nums">{value}</span>
    </div>
  );
};

export default Rating;
