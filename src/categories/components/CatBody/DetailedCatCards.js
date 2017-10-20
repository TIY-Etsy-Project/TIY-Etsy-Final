import React, { Component } from 'react';
import '../../styles/DetailedCatCards.css';

export default class DetailedCatCard extends Component {
  render() {
    let detailedCategories = this.props.detailedCategories;
    let etsyListings = this.props.etsyListings;
    let validListings = etsyListings.filter((validListing) => {
      return validListing.state = "active" &&
             validListing.taxonomy_path &&
             validListing.MainImage
    });
    console.log(validListings);
    let detailedCatCard = detailedCategories.map((listing) => {
      let filteredListings = validListings.filter((filteredListing) => {
            return filteredListing.taxonomy_path.includes(listing.category.name);
      });
    let randomListing = filteredListings[Math.floor(Math.random() * filteredListings.length)];
          return (
            <div key={randomListing.listing_id} className = "detailedCatCardColumn col-md-3">
              <div className="card no-gutters detailedCatCard" >
                <a href={randomListing.url}><img className="card-img-top" src={randomListing.MainImage.url_170x135} alt="random jewelry" /></a>
                <div className="detailed-card-block">
                  <h2 className="card-title">
                    <a className="catTitleLink" href={"https://www.etsy.com/c/" + listing.category.path}>{listing.category.name}</a>
                  </h2>
                  <ul className="sub-cat-text">
                    <li className="card-text">
                      <a className="catLink" href={"https://www.etsy.com/c/" + listing.category.path +
                      listing.subCategories.cat1.path}>{listing.subCategories.cat1.name}</a>
                    </li>
                    <li className="card-text">
                      <a className="catLink" href={"https://www.etsy.com/c/" + listing.category.path +
                      listing.subCategories.cat2.path}>{listing.subCategories.cat2.name}</a>
                    </li>
                    <li className="card-text">
                      <a className="catLink"  href={"https://www.etsy.com/c/" + listing.category.path +
                      listing.subCategories.cat3.path}>{listing.subCategories.cat3.name}</a>
                    </li>
                    <li className="card-text">
                      <a className="catLink"href={"https://www.etsy.com/c/" + listing.category.path +
                      listing.subCategories.cat4.path}>{listing.subCategories.cat4.name}</a>
                    </li>
                  </ul>
                  <a className="catShopAllLink" href={"https://www.etsy.com/c/" + listing.category.path}>Shop all  {listing.category.name}</a>
                </div>
              </div>
            </div>
          )
      })
    return (
      <div className="row justify-content-between">
        {detailedCatCard}
      </div>
    )
  }
}
