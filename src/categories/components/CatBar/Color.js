import React, { Component } from 'react';

export default class Color extends Component {
  constructor() {
    super();

    this.state =  {
     colors: [
       {color: 'White', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C10'},
       {color: 'Black', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1'},
       {color: 'Blue', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C2'},
       {color: 'Silver', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1215'},
       {color: 'Red', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C9'},
       {color: 'Green', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C4'},
       {color: 'Pink', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C7'},
       {color: 'Brown', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C3'},
       {color: 'Gold', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1214'},
       {color: 'Purple', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C8'},
       {color: 'Yellow', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=1215%2C11'},
       {color: 'Gray', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C5'},
       {color: 'Orange', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C6'},
       {color: 'Beige', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1213'},
       {color: 'Rainbow', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1220'},
       {color: 'Bronze', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1216'},
       {color: 'Clear', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1219'},
       {color: 'Copper', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1218'},
       {color: 'Rose gold', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C1217'},
       {color: 'Colorless', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C2309'},
       {color: 'Champaigne', link: 'https://www.etsy.com/search?explicit=1&amp;use_mmx=1&amp;attr_1=11%2C2308'}
     ],
    rowsToDisplay: 5,
    expanded: false,
    }
    this.showMore = this.showMore.bind(this, true);
  }

  showMore() {
    this.state.rowsToDisplay === 5 ?
      (this.setState({ rowsToDisplay: this.state.colors.length, expanded: true })) :
      (this.setState({ rowsToDisplay: 5, expanded: false }))
  }

  render() {
    return(
      <form className="colorContainer">
        <div className="colorColumn">
          <h3 className="color-title">Color</h3>
          <ul className="colorList">
            {this.state.colors.slice(0,this.state.rowsToDisplay).map((colors, i) =>
              <li key={i} className="colorListItem">
                <input type="checkbox" name="colorCheckBox"/>
                <label htmlFor="colorCheckBox" className="colorLabels">
                  <a className="colorListItem" href={colors.link}><span></span>&#160;&#160;&#160;&#160;&#160;{colors.color}</a>
                </label>
              </li>)}
          </ul>
          <p>
            <a onClick={this.showMore}>
              {this.state.expanded ?
                (<span className="showMoreColor">- Show less</span>) : (<span className="showMoreColor">+ Show more</span>)}
            </a>
          </p>
        </div>
      </form>
    )
  }
}
