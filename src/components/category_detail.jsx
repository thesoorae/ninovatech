import React from 'react';
import ImageCarousel from './image_carousel';
import ImageGallery from './image_gallery';
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
        <ImageGallery images={cat.images} name={cat.path_name}/>
        <div className="category_text">
          <h2 className="cat_detail_title">
            {cat.title}
          </h2>
          <div className="tech_detail_list">
            {list}
          </div>
        </div>
      </div>
    );

  }
}

export default CategoryDetail;
