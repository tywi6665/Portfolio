import React, { Component } from "react";
import "./Projects.scss";
import Container from "../../components/Container";
import Card from "../../components/Card";
import TextBox from "../../components/TextBox";

class Projects extends Component {

    render() {
        return (
            <Container>
                <TextBox className="textBox">
                    <h2 className="selected">Selected Projects</h2>
                    <p>A carefully curated</p>
                    <p>collection of</p>
                    <p>my works<span className="colon">:</span></p>
                </TextBox>
                <Card />
            </Container>
        )
    }

}

export default Projects;