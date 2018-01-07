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
          <h3>CEO, Chief Engineer and Scientist</h3>
            <p>Dr. KZ Hong has over twenty-five years of 
              extensive experience in leading new product and new technology developments from ideation to commercialization 
              for medical devices, biologics, and health care products. Dr. Hong is currently responsible for formulating strategies in
               sales growth, market expansion and working to identify global technology and business opportunities for Tricol Biomedical.
              <br />
              <br />
              Dr. Hong has held various senior management positions at Ninova Biomedical Technologies LLC , 
              ArjoHuntleigh, Kinetic Concepts Inc (KCI), RTI Surgical and Baxter Healthcare.  
              <br />
              <br />
              He holds a PhD and MS in Macromolecular Science and Engineering, an MSE in Chemical Engineering 
              all from the University of Michigan; an MBA in Finance from Eastern Michigan University; 
              and a BSE in Chemical Engineering from the National Cheng Kung University, Taiwan.
              <br />
              <br />
              In addition to his work in polymer science and life sciences, Dr. Hong is an avid photographer and world traveler. 
              </p>
              <a href="/photography">Photo Gallery</a>
        </div>
        </div>
      </div>
    );
  }
}


export default Bio;
