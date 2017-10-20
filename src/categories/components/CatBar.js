import React, {Component} from 'react';

import "../styles/spinner.css"

import AllCategories from './CatBar/AllCategories.js';

import Color from './CatBar/Color.js';
import ItemType from './CatBar/ItemType.js';
import OrderingOptions from './CatBar/OrderingOptions.js';
import Price from './CatBar/Price.js';
import ShipTo from './CatBar/ShipTo.js';
import ShopLocation from './CatBar/ShopLocation.js';

export default class CatBar extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="catBarCard card no-gutter align-self-start">
        <div className="catBar">
          <AllCategories/>
          <ShopLocation/>
          <ItemType/>
          <Price handleOptionChange={this.props.handleOptionChange} selectedOption={this.props.selectedOption} listings={this.props.listings}/>
          <Color/>
          <OrderingOptions/>
          <ShipTo/>
        </div>
      </div>
    )
  }
}
