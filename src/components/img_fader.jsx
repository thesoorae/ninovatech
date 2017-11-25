import React from 'react';
import './img_fader.css';

class ImageFader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo_idx: 0
    };
    this.timer = this.timer.bind(this);
  }

  timer(){
    let next_idx = this.state.photo_idx + 1;
    if(next_idx > this.props.images.length - 1){
      next_idx = 0;
    }
    this.setState({ photo_idx: next_idx});
  }

  render(){
    const img = this.props.images[this.state.photo_idx] || {};
    const title = img.title ? img.title : "";
    const url = img.url ? img.url : "";
    // setTimeout(this.timer, 2000);
    return(
        <div className="img-container">
          <img className="product-img" src={url} alt="" />
        </div>
    );

  }
}

export default ImageFader;
