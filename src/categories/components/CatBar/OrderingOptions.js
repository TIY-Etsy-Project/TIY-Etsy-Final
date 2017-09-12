import React, { Component } from 'react';

class OrderingOptions extends React.Component {




  render() {
    return (
      <div className="orderingOptionsColumn">
        <form>
          <label className="order-title">Ordering options</label>
          <div className="colorListItem ordering-container">
            <input type="checkbox" name="colorCheckBox"/>
            <label htmlFor="colorCheckBox" className="colorLabels">
              <a className="colorListItem" href=""><span></span>&#160;&#160;&#160;&#160;&#160;Accepts Etsy Gift Cards</a>
            </label>
            <input type="checkbox" name="colorCheckBox"/>
            <label htmlFor="colorCheckBox" className="colorLabels">
              <a className="colorListItem" href=""><span></span>&#160;&#160;&#160;&#160;&#160;Customizable</a>
            </label>
            </div>
        </form>
      </div>
    )
  }



}
export default OrderingOptions;
