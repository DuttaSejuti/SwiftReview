import React from 'react';

const ProductDetail = ({ product, reviews }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Reviews:</p>
      <ul>
        {console.log(product)}
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
