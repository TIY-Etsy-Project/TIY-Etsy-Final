import React, { Component } from 'react';
import fetchJsonp from "fetch-jsonp";

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
  constructor() {
    super();
    this.state = {
      //will hold all the objects that apply to the filters
      listings: [],
      //Thes are the filters that will be applied to the the api fetch
      //Values needed for Detailed Cat Card filters
      selectedOption: 'anyPrice',
      under25: [],
      between25_50: [],
      between50_100: [],
      over100: [],
      mainFetchUrl: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=nrfza0h31bu4g5biq6bq6g4c&limit=48&explicit=1&min=&max=&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    fetchJsonp(this.state.mainFetchUrl)
    .then(resp => resp.json())
    .then(resp => {
      let listings = resp.results;
      this.setState({listings: listings});
      console.log("listing filter below");
      console.log(this.state.listings)
    })
  }

  handleOptionChange(eventTarget) {
    const fetchUrls = {
        anyPrice: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=nrfza0h31bu4g5biq6bq6g4c&limit=48&explicit=1&min=&max=&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
        underTwentyFive: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=nrfza0h31bu4g5biq6bq6g4c&limit=48&explicit=1&min_price=0&max_price=25&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
        twentyFivetoFifty: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=nrfza0h31bu4g5biq6bq6g4c&limit=48&explicit=1&min_price=25&max_price=50&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
        fiftyToOneHundred: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=nrfza0h31bu4g5biq6bq6g4c&limit=48&explicit=1&min_price=50&max_price=100&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
        overOneHundred: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=nrfza0h31bu4g5biq6bq6g4c&limit=48&explicit=1&min_price=100&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
    }

    let radioVal = eventTarget.target.value;
    if(radioVal === "anyPrice") {
      this.setState({
        selectedOption: eventTarget.target.value,
        mainFetchUrl: fetchUrls.anyPrice
      });
    }

    if(radioVal === "underTwentyFive"){
      this.setState({
        selectedOption: eventTarget.target.value,
        mainFetchUrl: fetchUrls.underTwentyFive
      });
    }
    else if(radioVal === "twentyFivetoFifty"){
      this.setState({
        selectedOption: eventTarget.target.value,
        mainFetchUrl: fetchUrls.twentyFivetoFifty
      });

    }
    else if(radioVal === "fiftyToOneHundred"){
      this.setState({
        selectedOption: eventTarget.target.value,
        mainFetchUrl: fetchUrls.fiftyToOneHundred
      });

    }
    else if(radioVal === "overOneHundred"){
      this.setState({
        selectedOption: eventTarget.target.value,
        mainFetchUrl: fetchUrls.overOneHundred
      });
    }
  }

  render() {
    console.log(this.state.listings )
    return (
      <div className="App">
        <div className="container-fluid app-container">
          <div className="category-header">
            <h2 className="allCatTitle">All categories</h2>
          </div>
          {this.state.listings.length > 0 ? (
            <div className="container-fluid body-container">
              <div className="row align-items-start body-row">
                <CatBar handleOptionChange={this.handleOptionChange} selectedOption={this.state.selectedOption} listings={this.props.listings} />
                <CatBody prodListings={this.state.listings}
                         under25={this.state.under25}
                         between25_50={this.state.between25_50}
                         between50_100={this.state.between50_100}
                         over100={this.state.over100}
                         selectedOption={this.state.selectedOption}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
