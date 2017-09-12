import React, {Component} from 'react';
import fetchJsonp from "fetch-jsonp";

import CatCard from './CatBody/CatCards.js';
import DetailedCatCard from './CatBody/DetailedCatCards.js';

import '../styles/CatBody.css';
import "../styles/spinner.css";

class CatBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      loading: true
    }
  };

  componentDidMount() {
    fetchJsonp('https://api.etsy.com/v2/listings/trending.js?callback=getData&api_key=3yhxu7gn2ot24so9hzuqbxc9&explicit=1&amp;min=&amp;max=&amp;price_bucket=1&amp;use_mmx=1&&limit=100&offset=0&page=1&category=clothing&category=Accessories&category=paper_party_supplies&category=weddings&bags_and_purses&category=art_and_collectibles&category=jewelry&category=home_and_living&category=craft_supplies_and_tools&sort_on=score&sort_order=down&includes=MainImage')
    .then(resp => {
      return resp.json()
    })
      .then(resp => {
        let listings = resp.results;
        this.setState({listings: listings});
      })
    }


  render() {
      const detailedCategories = [
        {
          category: {
            name: "Jewelry",
            path: "jewelry/",
            id: 1222
          },
          subCategories: {
            cat1: {
              name: "Necklaces",
              path: "necklaces"
            },
            cat2: {
              name: "Earings",
              path: "earings"
            },
            cat3: {
              name: "Bracelets",
              path: "bracelets"
            },
            cat4: {
              name: "Rings",
              path: "rings"
            }
          }
        },
        {
          category: {
            name: "Craft Supplies & Tools",
            path: "craft_supplies_and_tools/",
            id: 6868
          },
          subCategories: {
            cat1: {
              name: "Jewelry & Beauty",
              path: "jewelry_and_beauty"
            },
            cat2: {
              name: "Sewing & Fiber",
              path: "sewing_and_fiber"
            },
            cat3: {
              name: "Paper, Party & Kids",
              path: "paper_party_and_kids"
            },
            cat4: {
              name: "Visual Arts",
              path: "visual_arts"
            }
          }
        },
        {
          category: {
            name: "Home & Living",
            path: "home_and_living/",
            id: 1016
          },
          subCategories: {
            cat1: {
              name: "Home Décor",
              path: "home_decor"
            },
            cat2: {
              name: "Kitchen & Dining",
              path: "kithen_and_dining"
            },
            cat3: {
              name: "Bedding",
              path: "bedding"
            },
            cat4: {
              name: "Outdoor & Gardening",
              path: "outdoor_and_gardening"
            }
          }
        },
        {
          category: {
            name: "Art & Collectibles",
            path: "art_and_collectibles/",
            id: 121
          },
          subCategories: {
            cat1: {
              name: "Prints",
              path: "prints"
            },
            cat2: {
              name: "Collectibles",
              path: "collectibles"
            },
            cat3: {
              name: "Painting",
              path: "painting"
            },
            cat4: {
              name: "Photography",
              path: "photography"
            }
          }
        }
      ];
      const categories = [
          {category: {
            name: "Clothing",
            path: "clothing",
            id: 418
          }},
          {category: {
            name: "Accessories",
            path: "accessories",
            id: 47
          }},
          {category: {
            name: "Paper & Party Supplies",
            path: "paper_and_party_suppies",
            id: 1876
          }},
          {category: {
            name: "Weddings",
            path: "weddings",
            id: 1666
          }},
          {category: {
            name: "Bags & Purses",
            path: "bags_and_purses",
            id: 143
          }}
        ];
          return (
            <div>
              {this.state.listings.length > 0 ? (
              <div className = "container catBodyContainer">
                <div className="row detailed-card-row">
                  <DetailedCatCard detailedCategories={detailedCategories}
                                   etsyListings={this.state.listings} />
                </div>
                <CatCard categories={categories}
                           etsyListings={this.state.listings} />
                </div>
              ) : (
              <div className="lds-spinner"></div>
              )}
            </div>
          )
    }
  }


export default CatBody
