import React, {Component} from "react";
import {boundMethod} from "autobind-decorator";
import Lightbox from "react-images";
import EventConstants from "Constants/EventConstants";
import UserActionsUtils from "Utilities/UserActionsUtils";

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
        event.stopPropagation();

        this.setState({
            lightboxOpen: true,
            currentImage: index
        }, this.registerSwipeEvents);
    }

    /**
     * Go to the previous image in the gallery
     */
    @boundMethod
    goToPreviousImage() {
        if (this.state.lightboxOpen) {
            this.setState({currentImage: this.state.currentImage - 1});
        }
    }

    /**
     * Go to the next image in the gallery
     */
    @boundMethod
    goToNextImage() {
        if (this.state.lightboxOpen) {
            this.setState({currentImage: this.state.currentImage + 1});
        }
    }

    /**
     * Close the lightbox
     */
    @boundMethod
    closeLightbox() {
        this.setState({lightboxOpen: false});
    }

    /**
     * Register a swipe event for scrolling through images on mobile devices
     */
    registerSwipeEvents() {
        setTimeout(() => {
            let element = document.getElementById("lightboxBackdrop");

            UserActionsUtils.detectSwipe(element, direction => {
                switch (direction) {
                    case EventConstants.SWIPE_DIRECTION.RIGHT:
                        this.goToPreviousImage();
                        return;
                    case EventConstants.SWIPE_DIRECTION.LEFT:
                        this.goToNextImage();
                        return;
                    default:
                        return;
                }
            });
        }, 50);
    }
}

export default Gallery;