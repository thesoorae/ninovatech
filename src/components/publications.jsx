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
        let background_class = idx%2 == 0 ? "alt_bg" : ""
        return (
            <a className={`patent_block ${background_class}`} href={pub.link} target="_blank">
                <div className="num_row">
                    <h2 className="patent_num">{pub.article}</h2>
                    <div className="patent_date">{pub.date}</div>
                </div>
                <div className="patent_title">{pub.title}</div>
                <div className="patent_desc">{pub.abstract}</div>
                <div className="patent_footer">
                    <div className="patent_coauthors">Authors: {pub.authors}</div>
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
                <div className="header_img publications" />
                <h1 className="main_title">
                    Publications
                </h1>

                <div className="description">
                Across his career, Dr. KZ Hong has co-authored numerous articles and papers in the nation's leading engineering, medical, and plastics/polymer publications. 
                His rigorous research has advanced the field of polymer science and continues to contribute new findings every year.
                </div>
                {pub_blocks}
            </div>
        );
    }
}


export default Publications;
