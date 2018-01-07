import React from 'react';
import '../css/category_item.css';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.handle_cat_click = this.handle_cat_click.bind(this);
  }

  handle_cat_click(){
    window.location = `/technologies#${this.props.cat.path_name}`
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
    // if(this.state.hover){
    //   list = cat.tech.map(t => <div className="tech-li">{t}</div>);
    // }
    if(cat.logos.length > 0 && this.state.hover ){
      list = cat.logos.map(logo => (<img className="cat-logo" src={logo} alt="" />));
      return (
        <div className="category-item clickable" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeave} onClick={this.handle_cat_click}>
          <div className="tech-list">
            {list}
          </div>
          <div className="cat-title">
            {cat.title}
          </div>
        </div>
      )
    } else {
      let img_url = cat.images[0].split('/upload/')
      let img_thumbnail = img_url.join('/upload/o_90,\c_fill,h_200,w_200/')
      return (
        <div className="category-item clickable" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeave} onClick={this.handle_cat_click}>
          <div className="cat-image">
            <img src={img_thumbnail} />
          </div>
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
}

export default CategoryItem;
