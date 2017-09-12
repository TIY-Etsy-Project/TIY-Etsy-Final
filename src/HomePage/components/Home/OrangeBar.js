import React, { Component } from "react";
import "../../styles/OrangeBar/EtsyKeepsYouSafe.css";
import "../../styles/OrangeBar/StartSellingOnEtsy.css";
import "../../styles/OrangeBar/WhatIsEtsy.css";

export default class OrangeBar extends Component {
  constructor(props) {
    super(props);

    this.chooseBar = this.chooseBar.bind(this);

    this.state = {};
  }

   chooseBar() {
    if (this.props.type === "safety") {
      return (
        <div className="row safeContainer">
          <div className="col-2 safeImage">
            <img className="safeImage" src="https://www.etsy.com/assets/dist/images/homepage/vesta/trust_wide_left.20170228151449.png" alt="a safe"/>
          </div>
          <div className="col-8 safety-text">
            <div>
            <h1 className="row safety-heading">Etsy keeps you safe</h1>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="safety-sub-heading">Trustworthy sellers</p>
                <p>
                  You can read their reviews and policies, and contact them with any questions
                </p>
              </div>
              <div className="col-4">
                <p className="safety-sub-heading">World-class security</p>
                <p>
                  Safeguarding your information is the top priority of our
                  dedicated security experts
                </p>
              </div>
              <div className="col-4">
                <p className="safety-sub-heading">Purchase protection</p>
                <p>
                  If anything goes wrong, our global support team has got your
                  back
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 keyImage">
            <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/trust_wide_right.20170228151449.png" alt="some keys"/>
          </div>
        </div>
      );
    } else if(this.props.type === "selling") {
            return (
                <a href="https://www.etsy.com/mission?ref=hp&from=homepage.about_etsy"><div className="row sellContainer">
                    <div className="col-4">
                        <img className="catImage" src="https://www.etsy.com/assets/dist/images/homepage/vesta/sell_on_etsy_left.20170228151449.png" alt="a lady and a cat and some stuff"/>
                    </div>
                    <div className="col-4 sellText">
                        <h1 className="sellTitle">Start selling on Etsy</h1>
                        <p>Millions of shoppers can't wait to see what you have in store.</p>
                        <p><a className="sellLink" href="https://www.etsy.com/sell?ref=hp" target="_blank" rel="noopener noreferrer">Open a shop today</a> ></p>
                    </div>
                    <div className="col-4">
                        <img className="manImage" src="https://www.etsy.com/assets/dist/images/homepage/vesta/sell_on_etsy_right.20170228151449.png" alt="dude and a plant and maybe a wall or something"/>
                    </div>
                </div></a>
            )
        }
        else if(this.props.type === "whatIs") {
            return (
                <a href="https://www.etsy.com/mission?ref=hp&from=homepage.about_etsy"><div className="row whatiscontainer">
                    <div className="col-4">
                        <img className="whatisimg1"  src="https://www.etsy.com/assets/dist/images/homepage/vesta/about_etsy_wide_left.20170228151449.png" alt="a lady walking her dog in the city"/>
                    </div>
                    <div className="col-3 whatistext">
                        <h1 className="whatTitle">What is Etsy?</h1>
                        <p>We're more than a marketplace.</p>
                        <p><a className="whatislink" href="https://www.etsy.com/mission?ref=hp&from=homepage.about_etsy" target="_blank" rel="noopener noreferrer">Read all about it <i className="fa fa-chevron-right"></i></a></p>
                    </div>
                    <div className="col-4">
                        <img className="whatisimg2"  src="https://www.etsy.com/assets/dist/images/homepage/vesta/about_etsy_wide_right.20170228151449.png" alt="a lady carrying some packages in the city"/>
                    </div>
                </div></a>
            )
        }
    }

    render(){
        return (
            <div className="container-fluid">
                {this.chooseBar()}
      </div>
    );
  }
}
