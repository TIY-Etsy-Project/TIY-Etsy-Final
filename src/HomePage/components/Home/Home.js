import React, { Component } from 'react';
import '../../styles/Home.css';
import OrangeBar from './OrangeBar.js'
import ShopCards from './ShopCards/ShopCards.js'
import Carousel from './Carousel.js'
import InfoCards from './InfoCards.js';
import BrowseCollections from './Browse-Collections.js';
import Header from '../Header/Header.js';
import FreshBlog from './FreshBlog.js';
import RecentReviews from './RecentReviews.js';


export default class Home extends Component {
  render() {
    return (
      <div className='home'>
          <Carousel />
          <InfoCards />
          <ShopCards type="category" />
          <BrowseCollections />
          <ShopCards type="gifts"/>
          <OrangeBar type="safety" />
          <RecentReviews />
          <OrangeBar type="selling"/>
          <FreshBlog type="blog"/>
          <OrangeBar type="whatIs"/>
      </div>
    )
  }
}
