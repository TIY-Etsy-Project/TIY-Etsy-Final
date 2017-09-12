import React, { Component } from 'react';

import '../styles/PageCounter.css';

export default class PageCounter extends Component {
  constructor() {
    super()

    this.state =  {
     currentPage:"Numbered Pages",
     pages: [
       {'page': <i className="glyphicon glyphicon-chevron-left"/>, 'link': 'https://www.etsy.com/c?explicit=1&page=1'},
       {'page': '1', 'link': 'https://www.etsy.com/c?explicit=1&page=1'},
       {'page': '2', 'link': 'https://www.etsy.com/c?explicit=1&page=2'},
       {'page': '3', 'link': 'https://www.etsy.com/c?explicit=1&page=3'},
       {'page': '4', 'link': 'https://www.etsy.com/c?explicit=1&page=4'},
       {'page': '5', 'link': 'https://www.etsy.com/c?explicit=1&page=5'},
       {'page': '6', 'link': 'https://www.etsy.com/c?explicit=1&page=6'},
       {'page': '7', 'link': 'https://www.etsy.com/c?explicit=1&page=7'},
       {'page': '8', 'link': 'https://www.etsy.com/c?explicit=1&page=8'},
       {'page': '9', 'link': 'https://www.etsy.com/c?explicit=1&page=9'},
       {'page': '10', 'link': 'https://www.etsy.com/c?explicit=1&page=10'},
       {'page': '11', 'link': 'https://www.etsy.com/c?explicit=1&page=11'},
       {'page': '12', 'link': 'https://www.etsy.com/c?explicit=1&page=12'},
       {'page': '13', 'link': 'https://www.etsy.com/c?explicit=1&page=13'},
       {'page': '14', 'link': 'https://www.etsy.com/c?explicit=1&page=14'},
       {'page': '15', 'link': 'https://www.etsy.com/c?explicit=1&page=15'},
       {'page': '16', 'link': 'https://www.etsy.com/c?explicit=1&page=16'},
       {'page': '17', 'link': 'https://www.etsy.com/c?explicit=1&page=17'},
       {'page': '18', 'link': 'https://www.etsy.com/c?explicit=1&page=18'},
       {'page': '19', 'link': 'https://www.etsy.com/c?explicit=1&page=19'},
       {'page': '20', 'link': 'https://www.etsy.com/c?explicit=1&page=20'},
       {'page': '21', 'link': 'https://www.etsy.com/c?explicit=1&page=21'},
       {'page': '22', 'link': 'https://www.etsy.com/c?explicit=1&page=22'},
       {'page': '23', 'link': 'https://www.etsy.com/c?explicit=1&page=23'},
       {'page': '24', 'link': 'https://www.etsy.com/c?explicit=1&page=24'},
       {'page': '25', 'link': 'https://www.etsy.com/c?explicit=1&page=25'},
       {'page': '26', 'link': 'https://www.etsy.com/c?explicit=1&page=26'},
       {'page': '27', 'link': 'https://www.etsy.com/c?explicit=1&page=27'},
       {'page': '28', 'link': 'https://www.etsy.com/c?explicit=1&page=28'},
       {'page': '29', 'link': 'https://www.etsy.com/c?explicit=1&page=29'},
       {'page': '30', 'link': 'https://www.etsy.com/c?explicit=1&page=30'},
       {'page': '31', 'link': 'https://www.etsy.com/c?explicit=1&page=31'},
       {'page': '32', 'link': 'https://www.etsy.com/c?explicit=1&page=32'},
       {'page': '33', 'link': 'https://www.etsy.com/c?explicit=1&page=33'},
       {'page': '34', 'link': 'https://www.etsy.com/c?explicit=1&page=34'},
       {'page': '35', 'link': 'https://www.etsy.com/c?explicit=1&page=35'},
       {'page': '36', 'link': 'https://www.etsy.com/c?explicit=1&page=36'},
       {'page': '37', 'link': 'https://www.etsy.com/c?explicit=1&page=37'},
       {'page': '38', 'link': 'https://www.etsy.com/c?explicit=1&page=38'},
       {'page': '39', 'link': 'https://www.etsy.com/c?explicit=1&page=39'},
       {'page': '40', 'link': 'https://www.etsy.com/c?explicit=1&page=40'},
       {'page': '41', 'link': 'https://www.etsy.com/c?explicit=1&page=41'},
       {'page': '42', 'link': 'https://www.etsy.com/c?explicit=1&page=42'},
       {'page': '43', 'link': 'https://www.etsy.com/c?explicit=1&page=43'},
       {'page': '44', 'link': 'https://www.etsy.com/c?explicit=1&page=44'},
       {'page': '45', 'link': 'https://www.etsy.com/c?explicit=1&page=45'},
       {'page': '46', 'link': 'https://www.etsy.com/c?explicit=1&page=46'},
       {'page': '47', 'link': 'https://www.etsy.com/c?explicit=1&page=47'},
       {'page': '48', 'link': 'https://www.etsy.com/c?explicit=1&page=48'},
       {'page': '49', 'link': 'https://www.etsy.com/c?explicit=1&page=49'},
       {'page': '50', 'link': 'https://www.etsy.com/c?explicit=1&page=50'}

     ],
    columnsToDisplay : 9,
    expanded: false,
    }
    this.showMore = this.showMore.bind(this, true);
  }

  showMore() {
    this.state.columnsToDisplay === 30 ?
      (this.setState({ columnsToDisplay: this.state.pages.length, expanded: true })) :
      (this.setState({ columnsToDisplay: 30, expanded: false }))
  }


  render() {
    return (
    <div className="pageContainer">
      <div className="counterRow">
        <div className="pageBox">
          {this.state.pages.slice(0,this.state.columnsToDisplay).map((pages, i) => <div className="links" key={i}><a href={pages.link}>{pages.page}</a></div>)}
          <div className="links" id="show">
            <a onClick={this.showMore}>
              {this.state.expanded ?
                (<span><i className="glyphicon glyphicon-chevron-right"/></span>) : (<span><i className="glyphicon glyphicon-chevron-right"/></span>)}
            </a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
