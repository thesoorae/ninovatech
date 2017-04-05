import React from 'react';

class CategoryDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const cat = this.props.cat;
    let list = cat.tech.map(t => <div className="tech-li">{t}</div>);

    return(
      <div className="category-detail">
        <div className="cat-detail-title">
          {cat.title}
        </div>
        <div className="tech-detail-list">
          {list}
        </div>
      </div>
    );

  }
}

export default CategoryDetail;
