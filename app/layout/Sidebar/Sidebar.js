import React, {Component} from "react";
import {boundMethod} from "autobind-decorator";
import UserActions from "Actions/UserActions";
import AppConstants from "Constants/AppConstants";
import EventConstants from "Constants/EventConstants";
import History from "Core/History";
import "Styles/Sidebar.scss";

/**
 * Sidebar navigation for all user interfaces
 */
class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        UserActions.emitter.addListener(EventConstants.USER.OPEN_SIDEBAR, this.openSidebar);
        UserActions.emitter.addListener(EventConstants.USER.CLOSE_SIDEBAR, this.closeSidebar);
    }

    componentDidMount() {
        this.registerDocumentClickListener();
    }

    componentWillUnmount() {
        UserActions.emitter.removeAllListeners();
    }

    render() {
        return (
            <div>
                {this.renderSidebarOpenIcon()}
                {this.renderSidebar()}
            </div>
        );
    }

    /**
     * Render the sidebar icon to open/close the sidebar
     * @returns {*}
     */
    renderSidebarOpenIcon() {
        return History.location.pathname === AppConstants.ROUTES.DEFAULT ?
            this.renderHomeSidebarIcon() :
            this.renderBackIcon();
    }

    /**
     * Render the sidebar icon for the Home Page
     * @returns {*}
     */
    renderHomeSidebarIcon() {
        if (!this.state.visible ) {
            return <i className="fas fa-bars sidebar-icon-open" onClick={this.toggleSidebar} />;
        }
    }

    /**
     * Render the back icon
     * @returns {*}
     */
    renderBackIcon() {
        return <i className="fas fa-chevron-left sidebar-icon-open" onClick={() => History.push(AppConstants.ROUTES.DEFAULT)} />;
    }

    /**
     * Render the open sidebar and it's contents
     * @returns {*}
     */
    renderSidebar() {
        const sidebarClass = this.state.visible ? "sidebar-open" : "";

        return (
            <div className={`sidebar ${sidebarClass}`}>
                {this.renderSidebarCloseIcon()}
                {this.renderSidebarItems()}
            </div>
        )
    }

    /**
     * Render the sidebar menu items
     * @returns {*}
     */
    renderSidebarItems() {
        const sections = [
            {
                id: AppConstants.SECTIONS.MAIN.ID,
                name: AppConstants.SECTIONS.MAIN.NAME
            },
            {
                id: AppConstants.SECTIONS.BIO.ID,
                name: AppConstants.SECTIONS.BIO.NAME
            },
            {
                id: AppConstants.SECTIONS.RESUME.ID,
                name: AppConstants.SECTIONS.RESUME.NAME
            },
            // {
            //     id: AppConstants.SECTIONS.PROJECTS.ID,
            //     name: AppConstants.SECTIONS.PROJECTS.NAME
            // },
            {
                id: AppConstants.SECTIONS.PHOTOS.ID,
                name: AppConstants.SECTIONS.PHOTOS.NAME
            }
        ];

        const listItems = sections.map((section, index) => {
            return (
                <li key={index} onClick={() => this.scrollToSection(section.id)}>
                    <span className="sidebar-list-item">{section.name}</span>
                </li>
            )
        });

        return (
            <ul className="sidebar-nav">
                <div onClick={() => this.scrollToSection(AppConstants.SECTIONS.MAIN.ID)} className="sidebar-brand">
                    {AppConstants.PROFILE.NAME}
                </div>
                {listItems}
            </ul>
        )
    }

    /**
     * Render the button to close the opened sidebar
     * @returns {*}
     */
    renderSidebarCloseIcon() {
        return <i className="fas fa-times sidebar-icon-close" onClick={this.toggleSidebar} />;
    }

    /**
     * Toggle the visibility of the sidebar on/off
     */
    @boundMethod
    toggleSidebar() {
        this.setState({visible: !this.state.visible});
    }

    /**
     * Open the sidebar
     */
    @boundMethod
    openSidebar() {
        this.setState({visible: true});
    }

    /**
     * Close the sidebar
     */
    @boundMethod
    closeSidebar() {
        this.setState({visible: false});
    }

    /**
     * Hide the sidebar if the user clicks outside of it
     */
    registerDocumentClickListener() {
        document.addEventListener("click",  event => {
            const sidebarItem =
                event.target.classList.contains("sidebar") ||
                event.target.classList.contains("sidebar-icon-open") ||
                (event.target.offsetParent && event.target.offsetParent.classList.contains("sidebar"));

            if (this.state.visible && !sidebarItem) {
                this.toggleSidebar();
            }
        });
    }

    /**
     * Scroll to the selected element on the page
     * @param section
     */
    scrollToSection(section) {
        const element = document.getElementById(section);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        this.toggleSidebar();
    }
}

export default Sidebar;