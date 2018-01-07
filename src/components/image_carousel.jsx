import React from 'react';
import '../css/img_carousel.css';
import $ from 'jquery';
import Slider from 'react-slick';


class ImageCarousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo_idx: 0
    };
    this.timer = this.timer.bind(this);
  }

  componentDidUpdate(){
    // if (this.state.photo_idx > 0 ){
      $(`.carousel_container.${this.props.name}`).animate({ scrollLeft: $(`#${this.props.name}-${this.state.photo_idx}`).position().left }, 500)
    // } else {
    //   $(`.carousel_container.${this.props.name}`).animate({ scrollLeft: 0 }, 500)
    // }
    
  }

  timer(){
    let next_idx = this.state.photo_idx + 1;
    if(next_idx > this.props.images.length - 1){
      next_idx = 0;
    }
    this.setState({
      photo_idx: next_idx
    })
  }

  render(){
    const imgs = this.props.images.map((img, idx) => (<img className="product-img" src={img} id={`${this.props.name}-${idx}`}/>))
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true
    }
    // setTimeout(this.timer, 3000);
    return(
      <Slider {...settings}>
          {imgs}
      </Slider>


    );
  }
}

export default ImageCarousel;
