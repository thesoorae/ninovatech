import React from 'react';
import {CATEGORIES} from '../data';
import CategoryDetail from './category_detail';
import '../css/technologies.css';

class Technologies extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      category: 0
    }
    this.handle_cat_click = this.handle_cat_click.bind(this)
  }

  componentDidMount(){
    if(window.location.hash){
      const index_map = {
        foodbev: 0,
        plastics: 1, 
        medical: 2,
        biotech: 3
      }
      let hash = window.location.hash.slice(1)
      this.setState({
        category: index_map[hash]
      })
    }
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
    // const categoryLinks = CATEGORIES.map((category, idx) => (<button className="category_button clickable" onClick={this.handle_cat_click(idx)}>{category.title}</button>));
    const categoryLinks = CATEGORIES.map((category, idx) => (<a href={`#${category.path_name}`} className="button_container"><button className="category_button clickable">{category.title}</button></a>));
    let categoryDetail, introduction_section
    let intro_text = "Ninovatech's research has revolutionized the world of plastics, food and beverage packaging, medical and hospital equipment, and life sciences. Learn more about the specific technologies Ninovatech has brought to consumer, industrial, and institutional use"
    introduction_section = <div className="introduction">{intro_text}</div>
    categoryDetail = <CategoryDetail cat={CATEGORIES[this.state.category]} />
    let category_details = CATEGORIES.map((category, idx) => (<CategoryDetail cat={category} idx={idx}/>))
    
    return(
      <div className="technologies">
      <div className="header_img technologies" />
      <div className="technologies_top">
          {introduction_section}
          <div className="cat-links">
          {categoryLinks}
          </div>
        </div>
        <div className="categories_container">
          {category_details}
        </div>
      </div>
    );
  }
}


export default Technologies;
