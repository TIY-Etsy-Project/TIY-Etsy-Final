import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "./HomePage/components/Header/Header.js";
import Footer from "./trending/components/Footer.js";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout;
