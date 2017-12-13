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
            <p>KZ Hong has over 11 patents and 10 published papers to his name. Dr. KZ Hong has over twenty-five years of 
              extensive experience in leading new product and new technology developments from ideation to commercialization 
              for medical devices, biologics, and health care products. Dr. Hong is currently responsible for formulating strategies in
               sales growth, market expansion and working to identify global technology and business opportunities for Tricol Biomedical.
              Dr. Hong has held various senior management positions at Ninova Biomedical Technologies LLC , 
              ArjoHuntleigh, Kinetic Concepts Inc (KCI), RTI Surgical and Baxter Healthcare.  
              He holds a PhD and MS in Macromolecular Science and Engineering, an MSE in Chemical Engineering 
              all from the University of Michigan; an MBA in Finance from Eastern Michigan University; 
              and a BSE in Chemical Engineering from the National Cheng Kung University, Taiwan.</p>
        </div>
        </div>
      </div>
    );
  }
}


export default Bio;
