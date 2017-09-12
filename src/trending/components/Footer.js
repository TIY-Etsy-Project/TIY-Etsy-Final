import React, { Component } from 'react';
import '../styles/Footer.css'
// import logo from '../etsy.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
         <div className="link-lists-top">
            <ul className="shop">
               <li><h4>Shop</h4></li>
               <li><a className="footer-link"  href="https://www.etsy.com/giftcards?ref=ftr">Gift Cards</a></li>
               <li><a className="footer-link" href="https://blog.etsy.com/en/?ref=ftr">Etsy Blog</a></li>
               <li><a className="footer-link" href="https://www.etsy.com/wholesale?ref=ftr">Wholesale</a></li>
            </ul>
            <ul className="sell">
               <li><h4>Sell</h4></li>
               <li><a className="footer-link" href="https://www.etsy.com/sell?ref=ftr">Sell on Etsy</a></li>
               <li><a className="footer-link" href="https://www.etsy.com/teams?ref=ftr">Teams</a></li>
               <li><a className="footer-link" href="https://www.etsy.com/forums?ref=ftr">Forums</a></li>
            </ul>
            <ul className="about">
               <li><h4>About</h4></li>
               <li><a className="footer-link" href="https://www.etsy.com/about?ref=ftr">Etsy, Inc.</a></li>
               <li><a className="footer-link" href="https://www.etsy.com/legal?ref=ftr">Policies</a></li>
               <li><a className="footer-link" href="https://investors.etsy.com/">Investors</a></li>
               <li><a className="footer-link" href="https://www.etsy.com/careers?ref=ftr">Careers</a></li>
               <li><a className="footer-link" href="https://www.etsy.com/press?ref=ftr">Press</a></li>
            </ul>
            <ul className="follow">
               <li><h4>Follow Etsy</h4></li>
               <li><a className="footer-link" href="https://www.facebook.com/Etsy"><i className="fa fa-facebook-official fa-lg" /> Facebook</a></li>
               <li><a className="footer-link" href="https://www.instagram.com/etsy"><i className="fa fa-instagram fa-lg" /> Instagram</a></li>
               <li><a className="footer-link" href="https://www.pinterest.com/etsy"><i className="fa fa-pinterest-p fa-lg" /> Pinterest</a></li>
               <li><a className="footer-link" href="https://www.twitter.com/etsy"><i className="fa fa-twitter fa-lg" /> Twitter</a></li>
            </ul>
         </div>
         <div className= "currencyInfo">
           <div className= "currencyContainer">
             <div className="flagIcon"></div>
             <div className="unitedStates">United States</div>
             <div className= "currencyDetails">English (US)</div>
             <div className= "currencyDetails">$ (USD)</div>
          </div>
         </div>
         <div className="meta-bottom">
            <div id="logo-and-slogan">
               <div id="logo"></div>
               <div id="slogan">We make it easy to find your thing.</div>
            </div>
            <div id="copyright">© 2017 Etsy, Inc.</div>
            <div> Terms of Use </div>
            <div>Privacy</div>
            <div id="help-button">Help</div>
         </div>
      </div>
    );
  }
}
