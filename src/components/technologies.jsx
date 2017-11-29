import React from 'react';
import {CATEGORIES} from '../data';
import CategoryDetail from './category_detail';
import '../css/technologies.css';

class Technologies extends React.Component{
  render(){
    const categoryLinks = CATEGORIES.map(category => (<div className="category">{category.title}</div>));
    const categoryDetail = CATEGORIES.map(category =>(<CategoryDetail cat={category}/>))
    return(
      <div className="technologies">
        <div className="cat-links">
        {categoryLinks}
        </div>
        {categoryDetail}
      </div>
    );
  }
}


export default Technologies;
