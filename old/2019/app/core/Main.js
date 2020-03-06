import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "Pages/HomePage/HomePage";
import GalleryPage from "Pages/GalleryPage/GalleryPage";

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main className="main-container">
                <Switch>
                    <Route path="/" exact render={props => <HomePage {...props} />} />
                    <Route path="/albums/:album" render={props => <GalleryPage {...props} />} />
                    <Route render={props => <HomePage {...props} />} />
                </Switch>
            </main>
        )
    }
}

export default Main;