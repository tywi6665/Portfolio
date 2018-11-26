import React, { Component } from "react";
import "./Main.scss";
import Container from "../../components/Container";
import TextBox from "../../components/TextBox";

class Main extends Component {

    render() {
        return (
            <Container>
                <TextBox>
                    <h1>I've got a long way to go!</h1>    
                </TextBox>
            </Container>
        )
    }

}

export default Main;