import React from 'react';
import {categories} from '../data';
import CategoryDetail from './category_detail';
import './technologies.css';

class Technologies extends React.Component{
  render(){
    const categoryLinks = categories.map(category => (<div className="category">{category.title}</div>));
    const categoryDetail = categories.map(category =>(<CategoryDetail cat={category}/>))
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
