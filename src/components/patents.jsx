import React from 'react';
import { PATENTS } from '../data';
class Patents extends React.Component{
  constructor(){
    super(props)
    this.state = {
      current_patent: ""
    }
    this.render_patent_block = this.render_patent_block.bind(this)
  }

  render_patent_block(){
    return ()
  }

  render(){
    PATENTS.map(patent => this.render_patent_block(patent))
    return(
      <div>

      </div>
    );
  }
}


export default Patents;
