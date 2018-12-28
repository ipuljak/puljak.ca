import React from "react";
import History from "Core/History";

const PhotoCover = props => {
    return (
        <div className="section-album" onClick={() => History.push(props.album.link)}>
            <img className="section-album-cover" src={props.album.cover} />
            <div className="section-album-title">{props.album.title}</div>
        </div>
    )
};

export default PhotoCover;