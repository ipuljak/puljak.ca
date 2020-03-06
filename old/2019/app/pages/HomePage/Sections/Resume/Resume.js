import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.RESUME.ID}>
                <div className="section-resume-container">
                    <div className="section-header">
                        <div className="section-title">Résumé</div>
                        <hr />
                    </div>
                    <iframe src="https://docs.google.com/gview?url=https://puljak.ca/files/resume.pdf&embedded=true" frameBorder="0" />
                </div>
            </section>
        )
    }
}

export default Resume;