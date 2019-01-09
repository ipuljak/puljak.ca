import React, {Component} from "react";
import History from "Core/History";
import AppConstants from "Constants/AppConstants";
import PhotoData from "Constants/PhotoData";
import Jumbotron from "Layout/Jumbotron";
import Gallery from "Pages/GalleryPage/Gallery";
import "Styles/Gallery.scss";

class GalleryPage extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.checkAlbumExists();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.album !== prevProps.match.params.album) {
            this.checkAlbumExists();
        }
    }

    render() {
        const albumId = this.props.match.params.album;
        const album = PhotoData.albums.find(album => album.id === albumId);

        if (album) {
            const jumbotronConfig = {
                title: album.title,
                description: album.description
            };

            return (
                <div className="gallery-page">
                    <Jumbotron config={jumbotronConfig} />
                    <Gallery album={album} />
                </div>
            )
        }

        return null;
    }

    /**
     * Route the user to the default page if the selected album does not exist
     */
    checkAlbumExists() {
        if (!PhotoData.find(album => album.id === this.props.match.params.album)) {
            History.push(AppConstants.ROUTES.DEFAULT);
        }
    }
}

export default GalleryPage;