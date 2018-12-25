import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.RESUME.ID}>
                <div>
                    This is the Resume section.
                </div>
            </section>
        )
    }
}

export default Resume;