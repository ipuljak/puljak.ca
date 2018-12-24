import React, {Component} from "react";
import {boundMethod} from "autobind-decorator";
import "Styles/Sidebar.scss";

/**
 * Sidebar navigation for all user interfaces
 */
class Sidebar extends Component {
    constructor() {
        super();

        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.registerDocumentClickListener();
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
        if (!this.state.visible) {
            return <i className="fas fa-bars sidebar-icon-open" onClick={this.toggleSidebar} />;
        }
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
        return (
            <ul>
                <li>Top</li>
                <li>Bio</li>
                <li>Resume</li>
                <li>Projects</li>
                <li>Photos</li>
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
}

export default Sidebar;