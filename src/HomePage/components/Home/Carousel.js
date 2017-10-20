import React, {Component} from 'react';
import '../../styles/Carousel.css';
import '../../styles/Home.css';

class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className=" carousel-item active">
            <div className="carousel-caption carousel-text d-none d-md-block" id="screen_1">
              <h2>You need these (almost) as much as sunscreen.</h2>
              <a href="https://www.etsy.com/search?q=summer+outdoors&ref=banner_summer_generic_promo&promoted=293197099%2C456106564%2C522877431%2C192447489%2C510742320%2C210342899%2C480900653%2C466582519%2C121484294%2C233065873" className="carousel-button a-tags">Shop for summer</a>
            </div>
            <img className="d-block img-fluid image-background" src="https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/summer-2017/summer-evergreen/summer_ever_1_2020x335.3.jpg" alt="summer bag"/>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption  carousel-text d-none d-md-block" id="screen_2">
              <h2>Get the perfect thing for your get-together.</h2>
              <a href="https://www.etsy.com/search?q=summer+party&ref=banner_summer_celebration_promo&promoted=533034231%2C182340335%2C504021654%2C475526135%2C274594484%2C294277191%2C280073754%2C245777090" className="carousel-button summer-button a-tags">Celebrate summer</a>
            </div>
            <img className="d-block img-fluid image-background" src="https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/summer-2017/summer-occasion/summer_occasion_1_2020x335.3.jpg" alt="dinner with friends outside"/>

          </div>

          <div className="carousel-item">

            <div className="carousel-caption carousel-text d-none d-md-block" id="screen_3">
              <h2>Wear these for the next heat wave.</h2>
              <a className="carousel-button a-tags" href="https://www.etsy.com/featured/summer-jewelry-trends?ref=banner_summer_jewelry_promo">Shop summer jewelry</a>
            </div>

            <img className="d-block img-fluid image-background" src="https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/summer-2017/summer-jewelry/summer_jewelry_2020x335.0.jpg" alt="jewelry"/>

          </div>

        </div>

        <a className="carousel-control-prev carousel-icons" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" id="previous-button" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next carousel-icons" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" id="next-button" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active dot"></li>
          <li data-target="#myCarousel" className="dot" data-slide-to="1"></li>
          <li data-target="#myCarousel" className="dot" data-slide-to="2"></li>
        </ol>

      </div>

    )
  }
}

export default Carousel;
