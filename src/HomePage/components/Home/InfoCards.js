import React, { Component } from "react";
import "../../styles/InfoCards.css";

class InfoCards extends Component {
  render() {
    return (
      <div className="container-fluid" id="bootstrap-override">
        <div className="row">
            <div className="col-md-4 card infocard">
              <div className="card-block card-container">
                <div className="infoCardCol-1">
                  <img
                    className="card-img-top infoCardIcon" alt="Icon of women"
                    src={require("./images/infocard-1.png")}
                  />
                </div>

                <div className="infoCardCol-2">
                  <h5 className="card-title">Get something you love</h5>
                  <p className="card-text">
                    Our marketplace is a world of vintage and handmade goods
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 card infocard">
              <div className="card-block card-container">
                <div className="infoCardCol-1">
                  <img
                    className="card-img-top infoCardIcon" alt="Man with cauldron of soup"
                    src={require("./images/infocard-2.png")}
                  />
                </div>
                <div className="infoCardCol-2">
                  <h5 className="card-title">Find your new favorite shop</h5>
                  <p className="card-text">
                    More than a million independent sellers from everywhere are right here
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 card infocard">
              <div className="card-block card-container">
                  <div className="infoCardCol-1">
                    <img
                      className="card-img-top infoCardIcon"
                      alt="Two hands tieing a present"
                      src={require("./images/infocard-3.png")}
                    />
                  </div>
                  <div className="infoCardCol-2">
                    <h5 className="card-title">Buy safely and securely</h5>
                    <p className="card-text">
                      Etsy protects every transaction, so shop with confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default InfoCards;
