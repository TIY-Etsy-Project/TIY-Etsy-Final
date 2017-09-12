import React, { Component } from 'react';
import "../../styles/FreshBlog.css";

class FreshBlog extends Component {
  render() {
    return (
      <div>
      <h2 className="blogtitle"><a href="https://blog.etsy.com/en/?ref=hpsh">Fresh From The Blog</a></h2>
      <div className="row wholeblog">
        <div className="col-sm-4">
          <div className="card blogcard fresh-blog-card-block">
            <div className=" card-block fresh-blog-card-block">
              <a className="fresh-blog-link" href="https://blog.etsy.com/en/featured-shop-emma-claire/?ref=hp" alt="featured shop by emma claire. Blog Post.">
                <img className="card-img-top blogimg" src={require("./images/etsypic1.jpg")} alt="glass container holding a plant and some sand. All hanging from a brown wooden fence."/>
                <div className="blogtext"><h5 className="card-text blogcategories">FEATURED SHOPS</h5>
                <h4 className="card-title texttitle">Featured Shop: Emma Claire</h4>
                <p className="card-text blogparagraph">
                  Bring the outdoors in with botanical home accessories from these green-thumbed friends and co-founders.
                </p></div>
            </a>
          </div>
          </div>
        </div>


        <div className="col-md-4 blogsection">
          <div className="card blogcard fresh-blog-card">
            <div className="card-block fresh-blog-card-block">
              <a className="fresh-blog-link" href="https://blog.etsy.com/en/are-you-pro-pineapple-or-team-watermelon/?ref=hp" alt="Shopping guides, are you pro pineapple or watermelon">
                <img className="card-img-top blogimg" src={require("./images/etsypic2.jpg")} alt="pineapple and watermelon clutch purses."/>
                <div className="blogtext"><h5 className="card-text blogcategories">SHOPPING GUIDES</h5>
                <h4 className="card-title texttitle">Are You Pro-Pineapple or Team Watermelon?</h4>
                <p className="card-text blogparagraph">
                  Discover what your favorite trending fruit motif says about you.
                </p></div>
            </a>
          </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className=" card fresh-blog-card blogcard">
            <div className="card-block fresh-blog-card-block">
              <a className="fresh-blog-link" href="https://blog.etsy.com/en/the-ultimate-diy-birthday-party-playbook/?ref=hp" alt="Inspiration, the ultimate diy birthday party playbook.">
                <img className="card-img-top blogimg" src={require("./images/etsypic3.jpg")} alt="A wide display of ice cream cones and sprinkles and other ice cream party items."/>
                <div className="blogtext"><h5 className="card-text blogcategories">INSPIRATION</h5>
                <h4 className="card-title texttitle">The Ultimate DIY Birthday Party Playbook</h4>
                <p className="card-text blogparagraph">
                  Mix and match your favorite handmade ideas—from a sweet (and easy) dessert station to favors guests will treasure—for a more personalized party.
                </p></div>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="bottomlinktoblog"><a className="bloglink" href="https://blog.etsy.com/en?ref=hpsm" alt="Read the blog">Read the blog <i className="fa fa-chevron-right"></i></a></div>
    </div>
    );
  }

}
export default FreshBlog;
