import React from "react";
import Rating from "./Rating";

const ProductDetail = ({ product, reviews }) => {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.star, 0) / reviews.length;

  return (
    <div className="p-24 h-screen bg-indigo-200">
      <div className="flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
        </div>
        <div className="flex items-center mb-4">
          <p className="text-gray-700">
            <Rating value={averageRating.toFixed(1)} />
          </p>
        </div>
        <p>
          <button className="px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">
            Add Review
          </button>
        </p>
        <div className="border-b border-blue-700 my-2"></div>
      </div>

      <div>
        <h3 className="mt-4 text-mid font-semibold">Reviews:</h3>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-300 rounded-md p-2 mt-1 flex justify-between items-center"
          >
            <p className="mr-2">{review.text}</p>
            <Rating value={review.star} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
