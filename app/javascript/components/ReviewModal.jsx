import React, { useState } from "react";
import StarRating from "./StarRating";

const ReviewModal = ({ productId, onClose, updateReviews }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/products/${productId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          star: rating,
          text: reviewText,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add review");
      }

      const newReview = await response.json();
      updateReviews(newReview);
      onClose();
    } catch (error) {
      console.error("Error Submitting review:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-yellow-100 p-6 rounded-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add Review</h2>
        <div className="mb-4">
          <p className="mb-2">What's your rating?</p>
          <StarRating value={rating} onClick={handleRatingChange} />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Start typing..."
            className="w-full h-24 border border-gray-300 rounded p-2"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
