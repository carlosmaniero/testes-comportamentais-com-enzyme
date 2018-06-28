import React, { Component } from 'react';
import { SpecieList } from './species/SpecieList';
import { Cart } from './cart/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>  
          <Cart />
          <SpecieList />
      </div>
    );
  }
}

export default App;
