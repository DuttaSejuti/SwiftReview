import React from "react";
import Rating from "./Rating";

const ProductDetail = ({ product, reviews }) => {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.star, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-indigo-200 flex justify-center items-center">
      <div className="p-8 bg-yellow-100 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <p className="text-gray-700 mr-2"></p>
            <Rating value={averageRating.toFixed(1)} />
          </div>
        </div>
        <button className="px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">
          Add Review
        </button>
        <div className="border-b border-blue-700 my-2"></div>

        <div>
          <h3 className="mt-4 text-mid font-semibold">Reviews:</h3>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-300 rounded-md p-2 mt-1 flex justify-between items-center"
            >
              <div className="flex items-center">
                <p className="mr-2">{review.text}</p>
                <Rating value={review.star} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
