import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Bio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.BIO.ID}>
                <div>
                    This is the Bio section. - Work in progress!
                </div>
            </section>
        )
    }
}

export default Bio;