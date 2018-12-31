import React, {Component} from "react";
import {boundMethod} from "autobind-decorator";
import Lightbox from "react-images";

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            lightboxOpen: false,
            currentImage: 0
        }
    }

    render() {
        return (
            <div className="gallery-container">
                {this.renderThumbnails()}
                {this.renderLightbox()}
            </div>
        )
    }

    /**
     * Render the list of thumbnails on the gallery page
     * @returns {*}
     */
    renderThumbnails() {
        return this.props.album.thumbnails.map((thumbnail, index) => {
            return <img key={index}
                         className="gallery-thumbnail"
                         src={thumbnail}
                         alt=""
                         onClick={() => this.openImage(index)} />;
        });
    }

    /**
     * Render the Lightbox component
     * @returns {*}
     */
    renderLightbox() {
        const images = this.props.album.images.map(image => {
            return {src: image};
        });

        return <Lightbox images={images}
                         isOpen={this.state.lightboxOpen}
                         currentImage={this.state.currentImage}
                         backdropClosesModal={true}
                         onClickPrev={this.goToPreviousImage}
                         onClickNext={this.goToNextImage}
                         onClose={this.closeLightbox} />;
    }

    /**
     * Open the selected image in the lightbox
     * @param index
     */
    @boundMethod
    openImage(index) {
        this.setState({
            lightboxOpen: true,
            currentImage: index
        });
    }

    /**
     * Go to the previous image in the gallery
     */
    @boundMethod
    goToPreviousImage() {
        this.setState({currentImage: this.state.currentImage - 1});
    }

    /**
     * Go to the next image in the gallery
     */
    @boundMethod
    goToNextImage() {
        this.setState({currentImage: this.state.currentImage + 1});
    }

    /**
     * Close the lightbox
     */
    @boundMethod
    closeLightbox() {
        this.setState({lightboxOpen: false});
    }
}

export default Gallery;