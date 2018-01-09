import React from 'react';
import { PATENTS } from '../data';
import '../css/patents.css';

class Patents extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      idx: ""
    }
    this.render_patent_block = this.render_patent_block.bind(this)
  }

  render_related_patents(patent){
    if (patent.related && patent.related.length > 0 ){
      let related_links = patent.related.map((rel) => {
        return (
          <a className="patent_link" href={rel.link}>
            {rel.title}
          </a>
        )
      })
      return (
        <div className="related_links">
          <h3 className="related_title">
            Related Patents
          </h3>
          {related_links}
        </div>
      )
    }
    
  }

  toggle_images(idx){
    return (e) => {
      e.preventDefault()
      if (this.state.idx === idx) {
        this.setState({
          idx: ""
        })
      } else {
        this.setState({
          idx: idx
        })
      }
    }
  }

  render_view_images(patent, idx){
    if (patent.images && patent.images.length > 0 ){
      let button_text = "View Images"
      let arrow = "down"
      if (this.state.idx === idx) {
        button_text = "Hide Images"
        arrow = "up"
      }
      return (
        <div className="image_toggle" onClick={this.toggle_images(idx)}>
          <div className={`arrow ${arrow}`}/>
          {button_text}
        </div>
      )
    }
  }

  render_images(patent, idx){
    if (this.state.idx === idx) {
      return (
        <div className="images">
          {patent.images.map(img => {
            return (
              <div className="image_container">
                <img className="patent_image" src={img} />
              </div>
            )}
            )}
        </div>
      )
    }
  }
  render_patent_block(patent, idx){
    let background_class = idx % 2 == 0 ? "alt_bg" : ""

    return (
      <a className={`patent_block ${background_class}`} href={patent.link} target="_blank">
        <div className="num_row">
          <h2 className="patent_num">{patent.number}</h2>
          <div className="patent_date">{patent.date}</div>
        </div>
        <div className="patent_title">{patent.title}</div>
        <div className="patent_desc">{patent.abstract}</div>
        <div className="patent_footer">
          {this.render_related_patents(patent)}
          {this.render_view_images(patent, idx)}
        </div>
        {this.render_images(patent, idx)}

      </a>
    )
  }

  render(){
    let patent_blocks = PATENTS.map((patent, idx) => this.render_patent_block(patent, idx))
    return(
      <div className="patents">
        <div className="header_img patents" />
        <div className="description">
        Dr. Hong holds multiple patents for material and product inventions in the US, Europe, and Asia. His patent 
        have revolutionized material technologies in the fields of healthcare and consumer products.
        </div>
        {patent_blocks}
      </div>
    );
  }
}


export default Patents;
