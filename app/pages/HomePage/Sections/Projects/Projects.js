import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.PROJECTS.ID}>
                <div>
                    This is the Projects section.
                </div>
            </section>
        )
    }
}

export default Projects;