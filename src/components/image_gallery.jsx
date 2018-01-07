import React from 'react';
import '../css/img_gallery.css';
import $ from 'jquery';
import Slider from 'react-slick';


class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const imgs = this.props.images.map((img, idx) => (
            <div className="img_container">
                <img className="gallery_img" src={img.url} id={`${this.props.name}-${idx}`} />
                <div className="img_label">{img.label}</div>
            </div>))
         return (
            <div className="images">
                {imgs}
            </div>

        );
    }
}

export default ImageGallery;
