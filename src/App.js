import React, { useEffect, useState } from 'react';
import Header from './header';
import ProductList from './productList';
import ShoppingCart from './shoppingCart';
import './App.css';

function App({ products, shoppingCartStore }) {
  const [cart, setCart] = useState({ list: [] });

  function reload() {
    const cart = shoppingCartStore.get();
    setCart(cart);
  }

  function subscribeToStore() {
    shoppingCartStore.onChange(reload);

    return function cleanup() {
      shoppingCartStore.offChange();
    };
  }

  useEffect(subscribeToStore, []);

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList
          products={products}
          onAddClick={shoppingCartStore.addToCart}
        />

        <ShoppingCart
          cart={cart}
          onRemoveClick={shoppingCartStore.removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
