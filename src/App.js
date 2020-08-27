import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './header';
import Products from './ProductsContainer';
import Product from './ProductContainer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Products} />
        <Route path="/products/:id/" component={Product} />
      </Router>
    </div>
  );
}
export default App;
