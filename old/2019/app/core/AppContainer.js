import React, {Component} from "react";
import Main from "Core/Main";
import Sidebar from "Layout/Sidebar/Sidebar";
import Layout from 'Styles/Layout.scss';

class AppContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return [
            <Sidebar key="sidebar" />,
            <Main key="main" />
        ]
    }
}

export default AppContainer;