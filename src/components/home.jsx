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
    const categoryItems = CATEGORIES.map(category => (<CategoryItem key={category.path_name} cat={category} />));
    return(
      <div className="home-container">
        <div className="home-header">
          <Header />
        </div>
        <div className="home-body">
          <div className="home-title">
            Material Technologies & Product Innovations
          </div>
          <div className="categories">
            {categoryItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
