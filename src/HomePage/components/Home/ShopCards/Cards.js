import React, { Component } from 'react';
import fetchJsonp from "fetch-jsonp";

export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.cards = this.cards.bind(this)

        this.state = {
            response: null,
            renderMe: null
        }
    }


    cards(response) {
        let renderMe;
        if(this.props.type === "category"){
// need to fill this with things
// each thing needs a unique category
        var categoryCards = [];
        var uniqueCats = []; // keep track of the different categories separately as a convenience
        console.log(response);
        categoryCards = response.reduce(function(newArray, response) {
        // we'll assume this isn't unique to start with
        let itemHasUniqueCategory = false;

        // figure out if we've got a unique category on this item
        // response.category_path.forEach(function(cat) {

          // if we haven't already found a unique category for this item...

          if (!itemHasUniqueCategory && uniqueCats.indexOf(response.category_path[0]) === -1) {
            itemHasUniqueCategory = true;
            uniqueCats.push(response.category_path[0]);
          }
        // });

        // add the item to the array with a unique category
        if (itemHasUniqueCategory) {
          let uniqueCategory = uniqueCats[uniqueCats.length - 1];
          newArray.push({uniqueCategory, response});
        }
        return newArray;
        }, []);
          console.log(categoryCards)

            let randomArray = [];
            for (let i = 0; i < 6; i++) {
                let index = Math.floor(Math.random() * categoryCards.length);
                let removed = categoryCards.splice(index, 1);
                randomArray.push(removed[0]);
                }

            console.log(randomArray);
            let increment = 1;
            let render = randomArray.map((categoryObj) => {
                var category = categoryObj.response;
                return(
                    <div key={category.listing_id} className="col-md-2 items padding">
                        <a href={category.url}>
                        <div className="card-box">
                            <div id={"card-image" + (increment++)} className="s-card-image">
                              <img alt="ShopCard" src={category.MainImage.url_570xN} className="display-block"/>
                            </div>
                            <p className="s-card-cat-name">{categoryObj.uniqueCategory}</p>
                        </div>
                        </a>
                    </div>
                )
            })

            renderMe = (
              <div className="container-fluid shop-cards-wrapper" id="shop-by-category">
                  <h2 className="shop-cards-title">Shop by category</h2>
                <div className="row" id="shop-by-category-cards">
                  {render}
                </div>
              </div>
            )
        }
        else if(this.props.type === "gifts"){
            renderMe = (

              <div className="container-fluid shop-cards-wrapper" id="shop-by-category">
                <h2 className="shop-cards-title">Shop for gifts</h2>
                <div className="row" id="shop-by-category-cards">
                    <div className="col-md-2 items padding">
                      <a href="https://www.etsy.com/featured/summer-gifts-under-30?ref=hp_g">
                        <div className="card-box">
                            <div id="sc-gc-1" className="s-card-image"></div>
                            <p className="s-card-cat-name">Best of summer: under $30</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-2 items padding">
                      <a href="https://www.etsy.com/featured/zodiac?ref=hp_g">
                        <div className="card-box">
                            <div id="sc-gc-2" className="s-card-image"></div>
                            <p className="s-card-cat-name">Zodiac gifts</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-2 items padding">
                      <a href="https://img0.etsystatic.com/142/1/13994634/il_340x270.1160732882_6na4.jpg">
                        <div className="card-box">
                            <div id="sc-gc-3" className="s-card-image"></div>
                            <p className="s-card-cat-name">Crowd favorites</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-2 items padding">
                      <a href="https://www.etsy.com/featured/bath-beauty?ref=hp_g">
                        <div className="card-box">
                            <div id="sc-gc-4" className="s-card-image"></div>
                            <p className="s-card-cat-name">A natural beauty</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-2 items padding">
                      <a href="https://www.etsy.com/featured/personalized-holiday-and-christmas-gifts?ref=hp_g">
                        <div className="card-box">
                            <div id="sc-gc-5" className="s-card-image"></div>
                            <p className="s-card-cat-name">Personalized gifts</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-2 items padding">
                      <a href="https://www.etsy.com/featured/wedding-party-gifts?ref=hp_g">
                        <div className="card-box">
                            <div id="sc-gc-6" className="s-card-image"></div>
                            <p className="s-card-cat-name">Wedding party gifts</p>
                        </div>
                      </a>
                    </div>
                </div>
                <div className="bottomlink">
                  <a className="shoplink" href="https://www.etsy.com/featured/gift-ideas?ref=hpsm">See more <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            )
        }
        this.setState({renderMe: renderMe})
    }

    componentWillMount() {
        fetchJsonp("https://api.etsy.com/v2/listings/trending.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&limit=80&includes=MainImage")
            .then (response => response.json())
            .then (response => {
              let tempArr = [];
              for (let i = 0; i < response.results.length; i++) {
                if (response.results[i].MainImage) {
                  tempArr.push(response.results[i])
                }
              }
                this.cards(tempArr);
            })
    }


    render() {
        return (
            <div>
                {this.state.renderMe}
            </div>
        )
    }
}
