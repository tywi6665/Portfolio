import React, { Component } from "react";
import "./Main.scss";
import Card from "../../components/Card";

class Main extends Component {

    render() {
        return (
            <div className="body">
                <h1>I've got a long way to go!</h1>
                <Card />
            </div>
        )
    }

}

export default Main;