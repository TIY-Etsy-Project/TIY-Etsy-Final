import React, {Component} from 'react';
import fetchJsonp from "fetch-jsonp";

import "../styles/spinner.css"

import AllCategories from './CatBar/AllCategories.js';

import Color from './CatBar/Color.js';
import ItemType from './CatBar/ItemType.js';
import OrderingOptions from './CatBar/OrderingOptions.js';
import Price from './CatBar/Price.js';
import ShipTo from './CatBar/ShipTo.js';
import ShopLocation from './CatBar/ShopLocation.js';
import ProductCards from './CatBody/ProductCards.js';
import CatBody from './CatBody.js'
import PageCounter from './PageCounter.js';

export default class CatBar extends Component {
  constructor() {
    super();
    this.state = {
      //will hold all the objects that apply to the filters
      listingFilter: [],
      //Thes are the filters that will be applied to the the api fetch
      //Values needed for Detailed Cat Card filters
      selectedOption: 'anyPrice',
      under25: [],
      between25_50: [],
      between50_100: [],
      over100: [],
      mainFetchUrl: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=48&explicit=1&min=&max=&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',

      fetchUrls: {
          anyPrice: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=48&explicit=1&min=&max=&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
          underTwentyFive: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=48&explicit=1&min_price=0&max_price=25&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
          twentyFivetoFifty: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=48&explicit=1&min_price=25&max_price=50&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
          fiftyToOneHundred: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=48&explicit=1&min_price=50&max_price=100&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
          overOneHundred: 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=48&explicit=1&min_price=100&price_bucket=1&use_mmx=1&sort_on=score&sort_order=down&includes=MainImage,Shop,User',
      }
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }


  componentDidMount() {
    fetchJsonp(this.state.mainFetchUrl).then(resp => resp.json()).then(resp => {
      let listing = resp.results;
      this.setState({listingFilter: listing});
      console.log("listing filter below");
      console.log(this.state.listingFilter)
    })
    fetchJsonp(this.state.fetchUrls.underTwentyFive).then(resp => resp.json()).then(resp => {
      let listin = resp.results;
      this.setState({under25: listin});
    })
    fetchJsonp(this.state.fetchUrls.twentyFivetoFifty).then(resp => resp.json()).then(resp => {
      let listi = resp.results;
      this.setState({between25_50: listi});
    })
    fetchJsonp(this.state.fetchUrls.fiftyToOneHundred).then(resp => resp.json()).then(resp => {
      let list = resp.results;
      this.setState({between50_100: list});
    })
    fetchJsonp(this.state.fetchUrls.overOneHundred).then(resp => resp.json()).then(resp => {
      let lis = resp.results;
      this.setState({over100: lis});
    })
  }

handleOptionChange(eventTarget) {
  console.log(eventTarget.target.value);
  let radioVal = eventTarget.target.value;
  if(radioVal === "anyPrice"){
    let anyP = this.state.fetchUrls.anyPrice;
    this.setState({
      selectedOption: eventTarget.target.value,
      mainFetchUrl: anyP
    });

  }
  if(radioVal === "underTwentyFive"){
    let underTwentyF = this.state.fetchUrls.underTwentyFive;
    this.setState({
      selectedOption: eventTarget.target.value,
      mainFetchUrl: underTwentyF
    });

  }
  else if(radioVal === "twentyFivetoFifty"){
    let twentyFivetoF = this.state.fetchUrls.twentyFivetoFifty;
    this.setState({
      selectedOption: eventTarget.target.value,
      mainFetchUrl: twentyFivetoF
    });

  }
  else if(radioVal === "fiftyToOneHundred"){
    let fiftyToOneHund = this.state.fetchUrls.fiftyToOneHundred;
    this.setState({
      selectedOption: eventTarget.target.value,
      mainFetchUrl: fiftyToOneHund
    });

  }
  else if(radioVal === "overOneHundred"){
    let overOneHund = this.state.fetchUrls.overOneHundred;
    this.setState({
      selectedOption: eventTarget.target.value,
      mainFetchUrl: overOneHund
    });


  }

}


  render() {
    return (
      <div className="row body-row">
        <div className="catBarCard card col-md-2-5">
          <AllCategories/>
          <ShopLocation/>
          <ItemType/>
          <Price handleOptionChange={this.handleOptionChange} selectedOption={this.state.selectedOption} props={this.state}/>
          <Color/>
          <OrderingOptions/>
          <ShipTo/>
        </div>
        {this.state.listingFilter.length > 0
          ? (
            <div className=" col-md-9 card-column">
              <CatBody />
              <div className="container product-cards-container">
                <ProductCards
                  listingFilter={this.state.listingFilter}
                  under25={this.state.under25}
                  between25_50={this.state.between25_50}
                  between50_100={this.state.between50_100}
                  over100={this.state.over100}
                  selectedOption={this.state.selectedOption}/>
              </div>
              <div className="pageCounter-controller">
                <PageCounter />
              </div>
            </div>
          )
          : (
              <div className="lds-spinner"></div>
          )}
      </div>
    )
  }
}
