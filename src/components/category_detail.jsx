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
    let background_class = this.props.idx % 2 == 0 ? "alt_bg" : ""
    let list = cat.tech.map((t, i) => {
      let middot = i == cat.tech.length - 1 ? "": <span className="dot">&middot;</span>
        return (
          <div className="tech-li">{t}{middot}</div>
        )
      })
    // let list = cat.tech.join(" &middot ")
    return(
      <div className={`category_detail ${background_class}`} id={cat.path_name}>
        <div className="category_text">
          <h2 className="cat_detail_title">
            {cat.title}
          </h2>
          <div className="cat_description">
            {cat.desc}
          </div>
          <div className="tech_detail_list">
            {list}
          </div>
        </div>
        
        <ImageGallery images={cat.images} name={cat.path_name}/>
        
      </div>
    );

  }
}

export default CategoryDetail;
