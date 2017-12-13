import React from 'react';
import {CATEGORIES} from '../data';
import CategoryDetail from './category_detail';
import '../css/technologies.css';

class Technologies extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      category: null
    }
  }

  on_link_click(cat){
    return e => {
      e.preventDefault()
      this.setState({
        category: cat
      })
    }
  }
    
  render(){
    const categoryLinks = CATEGORIES.map(category => (<a href={`#${category.path_name}`} className="category">{category.title}</a>));
    const categoryDetail = CATEGORIES.map(category =>(<CategoryDetail cat={category} />))
    return(
      <div className="technologies">
        <div className="cat-links">
        {categoryLinks}
        </div>
        <div className="categories_container">
          {categoryDetail}
        </div>
      </div>
    );
  }
}


export default Technologies;
