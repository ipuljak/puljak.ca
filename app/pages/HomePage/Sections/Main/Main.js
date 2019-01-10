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
            <div>
                <div>Ivan</div>
                <div>Puljak</div>
                <div>Software Developer</div>
            </div>
        )
    }
}

Main.Constants = {
    FIRST_NAME: "Ivan",
    LAST_NAME: "Puljak",
    TITLE: "Software Developer"
};

export default Main;