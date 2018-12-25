import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Photos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.PHOTOS.ID}>
                <div>
                    This is the Photos section.
                </div>
            </section>
        )
    }
}

export default Photos;