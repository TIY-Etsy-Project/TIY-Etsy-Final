import React, {Component} from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="price-container">
        <div className="-column">
          <div className="price-title">
            <label>
              Price ($)
            </label>
          </div>
          <div className="radio-container">
            <input className="radio-button" type="radio" name="anyPrice" value="anyPrice" checked={this.props.selectedOption === 'anyPrice'} onChange={this.props.handleOptionChange}/>
            <label className="radio-label" htmlFor="anyPrice"><span></span>Any price</label>
          </div>
          <div className="radio-container">
              <input className="radio-button" type="radio"  name="underTwentyFive" value="underTwentyFive" checked={this.props.selectedOption === 'underTwentyFive'} onChange={this.props.handleOptionChange}/>
              <label className="radio-label" htmlFor="underTwentyFive"><span></span>Under $25</label>
          </div>
          <div className="radio-container">
              <input className="radio-button" type="radio"  name="twentyFivetoFifty" value="twentyFivetoFifty" checked={this.props.selectedOption === 'twentyFivetoFifty'} onChange={this.props.handleOptionChange}/>
              <label className="radio-label" htmlFor="twentyFivetoFifty"><span></span>$25 to $50</label>
          </div>
          <div className="radio-container">
              <input className="radio-button" type="radio" name="fiftyToOneHundred" value="fiftyToOneHundred" checked={this.props.selectedOption === 'fiftyToOneHundred'} onChange={this.props.handleOptionChange}/>
              <label className="radio-label" htmlFor="fiftyToOneHundred"><span></span>$50 to $100</label>
          </div>
          <div className="radio-container">
              <input className="radio-button" type="radio" name="overOneHundred" name="overOneHundred" checked={this.props.selectedOption === 'overOneHundred'} onChange={this.props.handleOptionChange}/>
              <label className="radio-label" htmlFor="overOneHundred"><span></span>Over $100</label>
          </div>
          <div className="radio-container">
              <input className="radio-button" type="radio"  name="custom" value="custom" />
              <label className="radio-label" htmlFor="custom"><span></span>&#160;&#160;Custom</label>
          </div>
          <div className="priceInputContainer">
            <input className="customPriceForm" type="text" placeholder="  Low"/>
            <span className="to">&#160;to&#160;&#160;</span>
            <input className="customPriceForm" type="text" placeholder="  High"/>
            <button className="priceSubButton" type="submit"><i className="fa fa-play" aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
    )
  }
}
export default Price;
