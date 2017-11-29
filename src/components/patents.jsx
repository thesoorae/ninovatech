import React from 'react';
import { PATENTS } from '../data';
import '../css/patents.css';

class Patents extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current_patent: ""
    }
    this.render_patent_block = this.render_patent_block.bind(this)
  }

  render_related_patents(patent){
    if (patent.related){
      patent.related.map((rel) => {
        return (
          <a className="patent_link" href={rel.link}>
            {rel.title}
          </a>
        )
      })
    }
    
  }

  render_patent_block(patent){
    return (
      <a className="patent_block" href={patent.link}>
        <div className="num_row">
          <div className="patent_num">{patent.number}</div>
          <div className="patent_date">{patent.date}</div>
        </div>
        <div className="patent_title">{patent.title}</div>
        <div className="patent_desc">{patent.abstract}</div>
        <div className="related_patents">
          {this.render_related_patents(patent)}
        </div>
      </a>
    )
  }

  render(){
    let patent_blocks = PATENTS.map(patent => this.render_patent_block(patent))
    return(
      <div className="patents">
        {patent_blocks}
      </div>
    );
  }
}


export default Patents;
