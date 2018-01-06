import React from 'react';
import '../css/home.css';
import {CATEGORIES} from '../data';
import CategoryItem from './category_item';
import Header from './header';


class Home extends React.Component{

  // componentDidMount(){
  //   $('.logo-title')
  // }
  render(){
    const categoryItems = CATEGORIES.map((idx, category) => (<CategoryItem key={category.path_name} cat={category} idx={idx}/>));
    return(
      <div className="home-container">
        <div className="home-header">
          <Header />
          <div className="home-title">
            Improving lives through material innovation.
          </div>
        </div>
        <div className="home-body">
        <div className="description_container">
          <div className="description">
            <h2 className="description-title">
              Making the impossible, possible
            </h2>
            Ninovatech brings over 40 years of experience in pioneering synthetic and natural material technologies. The technologies
            developed under Ninovatech's founder have vastly improved the quality of life for people around the globe. You only need to 
            step into a supermarket aisle or hospital to see what we have helped to make a reality. We developed the
            plastic containers that make the long-distance transport and long-term storage of food and beverages possible. We were behind
            the IV bags that deliver vital fluids in hospitals. We have built hospital beds that prevent tissue damage, and developed materials
            that promote healing and body regeneration for medical use.
            <br />
            <br />
            At Ninovatech, we are constantly striving to push boundaries, to explore the potential of science and the human mind 
            in achieving the impossible and making our lives longer, healthier, and more productive. 
          </div>
          </div>
          <div className="categories">
            {categoryItems}
          </div>
          <div className="contact_container">
            <div className="contact">
              Contact us to learn more
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;
