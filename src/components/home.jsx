import React from 'react';
import './home.css';
import {categories} from '../data';
import CategoryItem from './category_item';

class Home extends React.Component{
  render(){
    const categoryItems = categories.map(category => (<CategoryItem key={category.path_name} cat={category} />));
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
          {categoryItems}
        </div>
      </div>
    );
  }
}

export default Home;
