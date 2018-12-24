import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router-dom";
import AppContainer from "Core/AppContainer";
import History from "Core/History";

/**
 * Entry point to puljak.ca
 */
ReactDOM.render((
    <Router history={History}>
        <AppContainer/>
    </Router>
), document.getElementById("app"));