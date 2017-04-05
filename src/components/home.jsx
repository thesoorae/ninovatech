import React from 'react';
import './home.css';
import {categories} from '../data';
import CategoryItem from './category_item'

class Home extends React.Component{
  render(){
    const categoryTitles = categories.map(category => (<CategoryItem cat={category} />));
    return(
      <div className="home-container">
        <div className="home-title">
          Material Technologies
          <br />
          &
          <br />
          Product Innovations
        </div>
        <div className="categories">
          {categoryTitles}
        </div>
      </div>
    );
  }
}

export default Home;
