import React from 'react';
import Header from './header';
import './App.css';
import ProductList from './containers/productListContainer';
import ShoppingCart from './containers/shoppingCartContainer';

function App({ products }) {
  return (
    <div>
      <Header />
      <div className="content">
        <ProductList products={products} />
        <ShoppingCart />
      </div>
    </div>
  );
}
export default App;
