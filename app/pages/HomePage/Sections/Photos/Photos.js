import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";
import PhotoData from "Constants/PhotoData";
import PhotoCover from "Pages/HomePage/Sections/Photos/Fragments/PhotoCover";

class Photos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.PHOTOS.ID}>
                <div className="section-title">Photographs</div>
                <div className="section-album-container">{this.renderPhotoCovers()}</div>
            </section>
        )
    }

    /**
     * Render each of the album covers
     * @returns {*[]}
     */
    renderPhotoCovers() {
        return PhotoData.albums.map((album, index) => <PhotoCover key={index} album={album} />);
    }
}

export default Photos;