import React, { Component } from "react";
import "../../styles/Search.css";

class Search extends Component {
  render() {
    return (
      <div className=" navTop">
        <div className="searchBar">
          <div className="logo">
            <a className="navbar-brand etsy-logo-container" href="https://www.etsy.com/?ref=lgo">
              <img
                alt="Etsy Logo"
                className="etsyLogo"
                src={require("./images/etsy-logo.svg")}
              />
            </a>
          </div>

          <div className="bar">
            <form className="form-inline">
              <label className="">
                <input
                  className="textArea"
                  type="text"
                  placeholder="Search for items or shops"
                />
              </label>
              <input className="searchButton" type="submit" value="Search" />
            </form>
          </div>
        </div>
        <div className="row navRight">
          <div className="navText">
            <a
              className="col-sm navLink"
              href="https://www.etsy.com/sell?ref=hdr&from_page=https%3A%2F%2Fwww.etsy.com%2F"
            >
              Sell on Etsy
            </a>
          </div>
          <div className="navText">
            <a className="col-sm navLink" href="">
              Register
            </a>
          </div>
          <div className="">
            <button
              className=" col-sm navLinkButton"
              type="btn"
              value="Sign in"
            >
              Sign in
            </button>
          </div>
          <div className="shopCart">
            <a href="https://www.etsy.com/cart?ref=hdr">
            <img
              alt="Shopping Cart"
              className="shoppingCart"
              src={require("./images/shopping-cart.png")}
            />
          <p className="shoppingCartText">Cart</p>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
