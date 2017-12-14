import React from 'react';
import '../css/img_fader.css';
import $ from 'jquery';

class ImageFader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo_idx: 0
    };
    this.timer = this.timer.bind(this);
  }

  componentDidUpdate(){
    let img = $('.product-img')
    img.hide()
    img.fadeIn(1000)
  }
  timer(){
    let next_idx = this.state.photo_idx + 1;
    if(next_idx > this.props.images.length - 1){
      next_idx = 0;
    }
    let img = $('.product-img')
    
    img.fadeOut(1000)
    setTimeout(() => this.setState({ photo_idx: next_idx }), 1000)
    
  }

  render(){
    const img = this.props.images[this.state.photo_idx] || {};

    setTimeout(this.timer, 5000);
    return(
        <div className="img-container">
          <img className="product-img" src={img} alt="" />
        </div>
    );
  }
}

export default ImageFader;
