import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.MAIN.ID}>
                <div>
                    This is the Main section.
                </div>
            </section>
        )
    }
}

export default Main;