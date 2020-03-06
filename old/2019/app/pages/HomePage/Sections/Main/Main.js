import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";
import PhotoData from "Constants/PhotoData";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section"
                     id={AppConstants.SECTIONS.MAIN.ID}
                     style={{backgroundImage: `url(${PhotoData.background})`}}>
                {this._renderTitle()}
            </section>
        )
    }

    /**
     * Render the name and title on the main section
     * @returns {*}
     * @private
     */
    _renderTitle() {
        return (
            <div className="main-heading">
                <span className="main-heading-name">{Main.Constants.NAME}</span>
                <span className="main-heading-title">{Main.Constants.TITLE}</span>
            </div>
        )
    }
}

Main.Constants = {
    NAME: "Ivan Puljak",
    TITLE: "Software Developer"
};

export default Main;