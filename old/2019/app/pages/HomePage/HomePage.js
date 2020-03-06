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
        this.registerSwipeEvents();
    }

    render() {
        return (
            <div className="home-page">
                <Main />
                <Bio />
                <Resume />
                {/*<Projects />*/}
                <Photos />
            </div>
        )
    }

    /**
     * Register swipe events to handle opening and closing the sidebar on mobile
     */
    registerSwipeEvents() {
        let element = document.getElementsByClassName("home-page")[0];

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
}

export default HomePage;