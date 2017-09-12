import React, { Component } from 'react';

import '../styles/App.css';


import AllCategories from './CatBar/AllCategories.js';
import Color from './CatBar/Color.js';
import ItemType from './CatBar/ItemType.js';
import OrderingOptions from './CatBar/OrderingOptions.js';
import Price from './CatBar/Price.js';
import ShipTo from './CatBar/ShipTo.js';
import ShopLocation from './CatBar/ShopLocation.js';
import CatBody from './CatBody.js';
import CatBar from './CatBar.js';
import PageCounter from '../components/PageCounter.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid app-container">
          <div className="category-header">
            <h2 className="allCatTitle">All categories</h2>
          </div>
          <CatBar />
        </div>
      </div>
    );
  }
}

export default App;
