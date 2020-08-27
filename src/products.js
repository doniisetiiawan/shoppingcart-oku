import React, { useEffect } from 'react';
import ProductSearch from './products/containers/ProductSearchContainer';
import ProductList from './products/containers/productListContainer';
import ShoppingCart from './shopping-cart/containers/shoppingCartContainer';

function Products({ onLoad }) {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="content">
      <div>
        <ProductSearch />
        <ProductList />
      </div>
      <ShoppingCart />
    </div>
  );
}

export default Products;
