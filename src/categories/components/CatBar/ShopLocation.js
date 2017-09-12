import React, { Component } from 'react';

class ShopLocation extends React.Component {




  render() {
    return (
      <form className="shopLocationContainer">
        <div  >
          <label id="shopLocation">
            Shop location
          </label>
        </div>
        <div className="shop-location-buttons">
          <div className="radio-container">
            <input className="radio-button" type="radio" value="option1" name="anywhere"/>
            <label htmlFor="anywhere" className="radio-label"><span></span>Anywhere</label>
          </div>
          <div className="radio-container">
            <input className="radio-button" type="radio" value="option2" name="united-states"/>
            <label htmlFor="united-states" className="radio-label"><span></span>United States</label>
          </div>
          <div className="radio-container">
            <input className="radio-button" type="radio" value="option3" name="custom"/>
            <label htmlFor="custom" className="radio-label"><span></span>Custom</label>
          </div>
        </div>
        <div className="inputContainer">
          <input className="titleForm" type="text" value="   Enter location"/>
          <button className="infoSubButton" type="submit"><i className="fa fa-play" aria-hidden="true"></i></button>
        </div>
      </form>
    )
  }
}
export default ShopLocation;
