import React from 'react';
import Header from './header';
import './App.css';
import ProductList from './containers/productListContainer';
import ShoppingCart from './containers/shoppingCartContainer';
import ProductSearch from './containers/ProductSearchContainer';

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
