import React, { Component } from 'react';
import './App.css';
import Catalogue from './components/Catalogue';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1> The Wine Store</h1>
        </header>
        < Catalogue />
        < ProductList />
        < Cart />

      </div>
    );
  }
}

export default App;
