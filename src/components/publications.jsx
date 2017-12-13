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
            </a>
        )
    }

    render() {
        let pub_blocks = PUBLICATIONS.map((pub, idx) => this.render_pub_block(pub, idx))
        return (
            <div className="patents">
                {pub_blocks}
            </div>
        );
    }
}


export default Publications;
