
import React, { Component } from 'react';
import '../../styles/ProductCards.css';

export default class ProductCards extends Component {
  constructor(props) {
    super(props);
    this.state= {
    feedbackstar: '',
    product: [],
    productUnder25:[],
    productBetween25_50:[],
    productBetween50_100:[],
    productOver100:[],
    counter:0
  }
}

  componentDidMount() {
    let activeListings = this.props.listingFilter.filter((activeListing) => {
      return activeListing.state = "active";
    });
    let validListings = activeListings.filter((validListings) => {
      return validListings.User;
    });
      let productCards = validListings.map((oneProduct) => {
        console.log(oneProduct);
        console.log(oneProduct.User.feedback_info.score);
        return (
          <div className="card col-md-3 product-card" key={oneProduct.index}>
            <a href={oneProduct.url}>
              <img className="product-image" src={oneProduct.MainImage.url_170x135} />
              <div className="product-title">{oneProduct.title.substring(0, 36)}...</div>
              <div className="shop-name">{oneProduct.Shop.shop_name}</div>
                {oneProduct.User.feedback_info.score > 89 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 69 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 49 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 29 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score > 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score < 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : (
                  <span></span>
                )}
                <span>({oneProduct.num_favorers})</span>
              <div className="price">${oneProduct.price}</div>
            </a>
          </div>
        )
    })
    this.setState({product: productCards})

    //------------------------------------Next Call

    activeListings = this.props.under25.filter((activeListing) => {
      return activeListing.state = "active";
    });
    validListings = activeListings.filter((validListings) => {
      return validListings.User;
    });
      productCards = validListings.map((oneProduct) => {
        console.log(oneProduct);
        console.log(oneProduct.User.feedback_info.score);
        return (
          <div className="card col-md-3 product-card" key={oneProduct.user_id}>
            <a href={oneProduct.url}>
              <img className="product-image" src={oneProduct.MainImage.url_170x135} />
              <div className="product-title">{oneProduct.title.substring(0, 36)}...</div>
              <div className="shop-name">{oneProduct.Shop.shop_name}</div>
                {oneProduct.User.feedback_info.score > 89 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 69 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 49 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 29 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score > 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score < 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : (
                  <span></span>
                )}
                <span>({oneProduct.num_favorers})</span>
              <div className="price">${oneProduct.price}</div>
            </a>
          </div>
        )
    })
    this.setState({productUnder25: productCards});


//----------------------------Next Call
    activeListings = this.props.between25_50.filter((activeListing) => {
      return activeListing.state = "active";
    });
    validListings = activeListings.filter((validListings) => {
      return validListings.User;
    });
      productCards = validListings.map((oneProduct) => {
        console.log(oneProduct);
        console.log(oneProduct.User.feedback_info.score);
        return (
          <div className="card col-md-3 product-card" key={oneProduct.User.user_id}>
            <a href={oneProduct.url}>
              <img className="product-image" src={oneProduct.MainImage.url_170x135} />
              <div className="product-title">{oneProduct.title.substring(0, 36)}...</div>
              <div className="shop-name">{oneProduct.Shop.shop_name}</div>
                {oneProduct.User.feedback_info.score > 89 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 69 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 49 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score  > 29 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score > 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : oneProduct.User.feedback_info.score < 9 ? (
                  <div className="reviews">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                ) : (
                  <span></span>
                )}
                <span>({oneProduct.num_favorers})</span>
              <div className="price">${oneProduct.price}</div>
            </a>
          </div>
        )
    })
    this.setState({productBetween25_50: productCards});


//-----------------------------------Next Call
activeListings = this.props.between50_100.filter((activeListing) => {
  return activeListing.state = "active";
});
validListings = activeListings.filter((validListings) => {
  return validListings.User;
});
  productCards = validListings.map((oneProduct) => {
    console.log(oneProduct);
    console.log(oneProduct.User.feedback_info.score);
    return (
      <div className="card col-md-3 product-card" key={oneProduct.MainImage.listing_image_id}>
        <a href={oneProduct.url}>
          <img className="product-image" src={oneProduct.MainImage.url_170x135} />
          <div className="product-title">{oneProduct.title.substring(0, 36)}...</div>
          <div className="shop-name">{oneProduct.Shop.shop_name}</div>
            {oneProduct.User.feedback_info.score > 89 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score  > 69 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score  > 49 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score  > 29 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score > 9 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score < 9 ? (
              <div className="reviews">
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : (
              <span></span>
            )}
            <span>({oneProduct.num_favorers})</span>
          <div className="price">${oneProduct.price}</div>
        </a>
      </div>
    )
})
this.setState({productBetween50_100: productCards});

//------------------------------------Next Call
activeListings = this.props.over100.filter((activeListing) => {
  return activeListing.state = "active";
});
validListings = activeListings.filter((validListings) => {
  return validListings.User;
});
  productCards = validListings.map((oneProduct) => {
    console.log(oneProduct);
    console.log(oneProduct.User.feedback_info.score);
    return (
      <div className="card col-md-3 col-sm-2 product-card" key={oneProduct.Shop.shop_id}>
        <a href={oneProduct.url}>
          <img className="product-image" src={oneProduct.MainImage.url_170x135} />
          <div className="product-title">{oneProduct.title.substring(0, 36)}...</div>
          <div className="shop-name">{oneProduct.Shop.shop_name}</div>
            {oneProduct.User.feedback_info.score > 89 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score  > 69 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score  > 49 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score  > 29 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score > 9 ? (
              <div className="reviews">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : oneProduct.User.feedback_info.score < 9 ? (
              <div className="reviews">
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            ) : (
              <span></span>
            )}
            <span>({oneProduct.num_favorers})</span>
          <div className="price">${oneProduct.price}</div>
        </a>
      </div>
    )
})
this.setState({productOver100: productCards});
}


__renderLabel() {
  let a = 'anyPrice';
  let b = 'underTwentyFive';
  let c = 'twentyFivetoFifty';
  let d = 'fiftyToOneHundred';
  let e = 'overOneHundred';
  if(this.props.selectedOption === a){
    return(
      <div >
        {this.state.product}
      </div>
    )
  }
  else if(this.props.selectedOption === b){
    return(
      <div>
        {this.state.productUnder25}
      </div>
    )
  }
  else if(this.props.selectedOption === c){
    return(
      <div>
        {this.state.productBetween25_50}
      </div>
    )
  }
  else if(this.props.selectedOption === d){
    return(
      <div>
        {this.state.productBetween50_100}
      </div>
    )
  }
  else if(this.props.selectedOption === e){
    return(
      <div>
        {this.state.productOver100}
      </div>
    )
  }
}

  render() {
    return (
      <div className="row product-card-row">
        {this.__renderLabel()}
      </div>
    )
  }
}
