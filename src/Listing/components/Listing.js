import React, { Component } from "react";
import "../styles/Listing.css";

import ShopHeader from './ShopHeader'
import LikeBanner from './LikeBanner'
import PurchaseInfo from './PurchaseInfo'
import ProdDesc from './ProdDesc'
import ShopSidebar from './ShopSidebar'

class App extends Component {
  render() {
    // change this ID to change all of the fetches
    const listingId = "175112598";

// cat battle armor: 175112598
// macbook decal: 538796965

    return (
      <div className="App">
				<div className='row justify-content-center'>
					<div className='col-12'>
						<ShopHeader listingId={listingId} />
					</div>
				</div>
				<div className = 'row main-content-div'>
					<div className='col-6'>
		      	<LikeBanner listingId={listingId} />
						<ProdDesc listingId={listingId} />
					</div>
					<div className='col-6'>
						<PurchaseInfo listingId={listingId} />
						<ShopSidebar listingId={listingId} />
					</div>
				</div>
				<div className = 'row bottomBorder'>
				</div>
			</div>
    );
  }
}

export default App;
