import React from 'react';
import Header from './header';
import ProductList from './productList';

function App({ products }) {
  function addToCart(product) {
    console.log(product);
  }

  return (
    <div>
      <Header />
      <div>
        <ProductList
          products={products}
          onAddClick={addToCart}
        />
      </div>
    </div>
  );
}

export default App;
