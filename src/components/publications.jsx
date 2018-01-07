import React from 'react';
import { PUBLICATIONS } from '../data';
import '../css/patents.css';

class Publications extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idx: ""
        }
        this.render_pub_block = this.render_pub_block.bind(this)
    }

    render_pub_block(pub, idx) {
        let click_text = pub.link.length > 0 ? "Click to read more" : ""
        return (
            <a className="patent_block" href={pub.link}>
                <div className="num_row">
                    <h2 className="patent_num">{pub.article}</h2>
                    <div className="patent_date">{pub.date}</div>
                </div>
                <div className="patent_title">{pub.title}</div>
                <div className="patent_desc">{pub.abstract}</div>
                <div className="patent_footer">
                    <div className="patent_coauthors">Coauthors: {pub.co_authors}</div>
                </div>
                <div className="learn_more">
                    {click_text}
                </div>
            </a>
        )
    }

    render() {
        let pub_blocks = PUBLICATIONS.map((pub, idx) => this.render_pub_block(pub, idx))
        return (
            <div className="patents">
                <div className="description">
                Dr. KZ Hong has co-authored over 15 publications in leading engineering, medical, and plastics/polymer publications
                across his illustrious career. His rigorous research has advanced the field of polymer science. To this day, Ninovatech continues its research and development in 
                both synthetic and natural materials and continues to contribute to the expansion of 
                the world's knowledge pool of with new discoveries every year. 
                </div>
                {pub_blocks}
            </div>
        );
    }
}


export default Publications;
