import React from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';

function ProductItem({ product, onAddClick }) {
  return (
    <div className="product-list-item">
      <Link to={`/products/${product.id}/`}>
        {product.name}
      </Link>
      <div>
        <button
          type="button"
          onClick={() => onAddClick(product)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
