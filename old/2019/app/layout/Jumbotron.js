import React from "react";

const Jumbotron = props => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-title">{props.config.title}</div>
            <hr className="jumbotron-hr" />
            <div className="jumbotron-description">{props.config.description}</div>
        </div>
    )
};

export default Jumbotron;