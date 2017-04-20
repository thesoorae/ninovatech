import React from 'react';
import './bio.css';

class Bio extends React.Component{
  render(){
    return(
      <div>
        <div className="img-text">
        <img className="bio-img" src="http://res.cloudinary.com/dult7d3mc/image/upload/v1491540694/ninovatech/kz.png" />
        <div className="bio-text">
          <h1>KZ Hong, PhD, MBA</h1>
          <h3>CEO, Researcher, Scientist</h3>
          <p>KZ Hong has over 11 patents and 10 published papers to his name. Graduating from blah
          blah blah</p>
        </div>
        </div>
      </div>
    );
  }
}


export default Bio;
