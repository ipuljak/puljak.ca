import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.RESUME.ID}>
                <div className="section-title">Résumé</div>
                <div className="section-resume-container">
                    <object data="/files/resume.pdf" type="application/pdf" width="70%" height="800px">
                        <p>It appears you don't have a PDF plugin for this browser. You can <a href="/files/resume.pdf">click here to download the PDF file.</a></p>
                    </object>
                </div>
            </section>
        )
    }
}

export default Resume;