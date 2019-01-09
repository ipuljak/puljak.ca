import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";
import PhotoData from "Constants/PhotoData";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const index = Math.floor(Math.random() * PhotoData.backgrounds.length - 1);
        const backgroundImage = PhotoData.backgrounds[index];

        return (
            <section className="section"
                     id={AppConstants.SECTIONS.MAIN.ID}
                     style={{backgroundImage: `url(${backgroundImage})`}}>
                <div>
                    This is the Main section.
                </div>
            </section>
        )
    }
}

export default Main;