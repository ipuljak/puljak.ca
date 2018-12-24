import React from "react";
import ReactDOM from "react-dom";
import TestComponent from './TestComponent';
import style from "./main.css";

const App = () => {
    return (
        <div>
            <p>Testing....!</p>
            <TestComponent/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));