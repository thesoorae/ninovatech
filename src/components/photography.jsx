import React from 'react';
import Slider from 'react-slick';

class Photography extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
    let images = []
    for(let i=1;i<=12;i++){
      images.push(<img className="photo" src={`../images/photo${i}.png`} />)
    }
    return(
      <Slider {...settings}>
      {images}
      </Slider>
    );
  }
}


export default Photography;
