import React from 'react';
import './App.css';
import Header from './header';
import ProductItem from './productItem';

const product = {
  id: 1,
  name: 'mango',
};

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ProductItem product={product} />
      </div>
    </div>
  );
}

export default App;
