import React from 'react';
import ImageFader from './img_fader';
import '../css/category_detail.css';


class CategoryDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const cat = this.props.cat;
    let list = cat.tech.map(t => <div className="tech-li">{t}</div>);

    return(
      <div className="category_detail" id={cat.path_name}>
        <h2 className="cat_detail_title">
          {cat.title}
        </h2>
        <div className="tech_detail_list">
          {list}
        </div>
        <div className="cat_detail_images">
          <ImageFader images={cat.images} />
        </div>
      </div>
    );

  }
}

export default CategoryDetail;
