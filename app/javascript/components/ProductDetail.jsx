import React from 'react';

const ProductDetail = ({ product, reviews }) => {
  const averageRating = reviews.reduce((sum, review) => sum + review.star, 0) / reviews.length;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Average Rating: {averageRating.toFixed(1)}</p>

      <p>Reviews:</p>
      <ul>
        {reviews && reviews.map(review => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Star Rating: {review.star}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
