import React, {Component} from "react";
import Bio from "Pages/HomePage/Sections/Bio/Bio";
import Main from "Pages/HomePage/Sections/Main/Main";
import Photos from "Pages/HomePage/Sections/Photos/Photos";
import Projects from "Pages/HomePage/Sections/Projects/Projects";
import Resume from "Pages/HomePage/Sections/Resume/Resume";
import Sections from "Styles/Sections.scss";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Main />
                <Bio />
                <Resume />
                <Projects />
                <Photos />
            </div>
        )
    }
}

export default HomePage;