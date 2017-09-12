import React, { Component } from 'react';

import '../../styles/CatCards.css';


class CatCard extends Component {
  render() {
    let categories = this.props.categories;
    let etsyListings = this.props.etsyListings;
    let validListings = etsyListings.filter((validListing) => {
      return validListing.state = "active" &&
             validListing.taxonomy_path &&
             validListing.MainImage;
    });
    console.log(validListings);
    let catCard = categories.map((listing) => {
      let filteredListings = validListings.filter((filteredListing) => {
            return filteredListing.taxonomy_path.includes(listing.category.name);
      });
    let randomListing = filteredListings[Math.floor(Math.random() * filteredListings.length)];
        return (
          <div className="category-card-column">
            <div key={randomListing.listing_id} >
              <div className="card catCards" >
                <a href={randomListing.url}><img className="card-img-top" src={randomListing.MainImage.url_170x135} alt="random jewelry" /></a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a className="catTitleLink" href={"https://www.etsy.com/c/" + listing.category.path}>{listing.category.name}</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )
    })
    return (
      <div className = "cat-card-row">
        {catCard}
      </div>
    )
  }
}

export default CatCard
