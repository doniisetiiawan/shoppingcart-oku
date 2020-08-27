import React from 'react';
import ProductItem from './productItem';

function ProductList({ products, onAddClick }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddClick={onAddClick}
        />
      ))}
    </div>
  );
}

export default ProductList;
