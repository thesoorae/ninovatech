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
    this.handle_cat_click = this.handle_cat_click.bind(this)
  }

  handle_cat_click(idx){
    return e => {
      e.preventDefault()
      this.setState({
        category: idx
      })
    }
  }
    
  render(){
    const categoryLinks = CATEGORIES.map((category, idx) => (<button className="category clickable" onClick={this.handle_cat_click(idx)}>{category.title}</button>));
    const categoryDetail = (typeof(this.state.category) == "number") ? <CategoryDetail cat={CATEGORIES[this.state.category]} /> : ""
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
