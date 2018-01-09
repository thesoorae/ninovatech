import React from 'react';
import Slider from 'react-slick';
import Gallery from 'react-photo-gallery';


class Photography extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    
    let images = []
    for(let i=1;i<=12;i++){
      images.push({
        src:`images/photo${i}.png`,
        width: 4,
        height: 3,
      })
    }
    return(
      <Gallery photos={images} />
    );
  }
}


export default Photography;
