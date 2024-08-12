'use client';

import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-details">
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
