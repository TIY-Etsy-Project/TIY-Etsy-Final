import React, { Component } from 'react';

class ItemType extends React.Component {




  render() {
    return (
      <form className="itemTypeContainer">
        <div className="item-type-column">
          <div>
            <p className="itemType">Item type</p>
          </div>
          <div className="radio-container">
            <input className="radio-button" type="radio" value="option1" name="allItems" />
            <label className="radio-label" htmlFor="allItems"><span></span>All items</label>
          </div>
          <div className="radio-container">
            <input className="radio-button" type="radio" value="option2" name="handmade"/>
            <label className="radio-label" htmlFor="handmade"><span></span>Handmade</label>
          </div>
          <div className="radio-container">
            <input className="radio-button" type="radio" value="option3" name="vintage"/>
            <label className="radio-label" htmlFor="vintage"><span></span>Vintage</label>
          </div>
        </div>
      </form>
    )
  }



}
export default ItemType;
