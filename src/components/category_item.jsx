import React from 'react';
import './category.css';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseOver(){
    this.setState({hover: true});
  }
  mouseLeave(){
    this.setState({hover: false});
  }
  render(){
    const cat = this.props.cat;
    let list = [];
    if(this.state.hover){
      list = cat.tech.map(t => <div className="tech-li">{t}</div>);
    }
    if(cat.logos.length > 0 && !this.state.hover ){
      list = cat.logos.map(logo => (<img className="cat-logo" src={logo} alt="" />));
    }
    return(
      <div className="category-item clickable" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeave}>
        <div className="cat-title">
          {cat.title}
        </div>
        <div className="tech-list">
          {list}
        </div>
      </div>
    );

  }
}

export default CategoryItem;
