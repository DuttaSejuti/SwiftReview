import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductDetail from '../components/ProductDetail';

document.addEventListener('DOMContentLoaded', () => {
    const productData = JSON.parse(document.getElementById('product-data').getAttribute('data-product'));
    const reviewData = JSON.parse(document.getElementById('product-data').getAttribute('data-review'));
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<ProductDetail product={productData} reviews ={reviewData} />)
});
