import React from 'react';
import Header from './header';
import './App.css';
import ProductList from './products/containers/productListContainer';
import ShoppingCart from './shopping-cart/containers/shoppingCartContainer';
import ProductSearch from './products/containers/ProductSearchContainer';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <ProductSearch />
          <ProductList />
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
}
export default App;
