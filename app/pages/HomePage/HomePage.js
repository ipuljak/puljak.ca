import React, {Component} from "react";
import UserActions from "Actions/UserActions";
import EventConstants from "Constants/EventConstants";
import Bio from "Pages/HomePage/Sections/Bio/Bio";
import Main from "Pages/HomePage/Sections/Main/Main";
import Photos from "Pages/HomePage/Sections/Photos/Photos";
import Projects from "Pages/HomePage/Sections/Projects/Projects";
import Resume from "Pages/HomePage/Sections/Resume/Resume";
import UserActionsUtils from "Utilities/UserActionsUtils";
import Sections from "Styles/Sections.scss";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let element = document.getElementById("home-page");
        UserActionsUtils.detectSwipe(element, direction => {
            switch (direction) {
                case EventConstants.SWIPE_DIRECTION.RIGHT:
                    UserActions.openSidebar();
                    return;
                case EventConstants.SWIPE_DIRECTION.LEFT:
                    UserActions.closeSidebar();
                    return;
                default:
                    return;
            }
        });
    }

    render() {
        return (
            <div id="home-page">
                <Main />
                <Bio />
                <Resume />
                {/*<Projects />*/}
                <Photos />
            </div>
        )
    }
}

export default HomePage;