import React, { Component } from "react";
import "./Details.scss";
import Container from "../../components/Container";
import TextBox from "../../components/TextBox";

class Details extends Component {

    state = {
        deets: [{
            id: 1,
            img: "./images/react-logo.png",
            heading: "Portfolio Deets!!",
            text: "Portfolio Deets!!"
        },
        {
            id: 2,
            img: "./images/d3.svg",
            heading: "Portfolio Deets!!",
            text: "Portfolio Deets!!"
        },
        {
            id: 3,
            img: "./images/sass-logo.png",
            heading: "Portfolio Deets!!",
            text: "Portfolio Deets!!"
        }]
    }

    render() {
        return (
            <Container>
                <h2>Details Page</h2>
                <div className="detailsBox">
                    {this.state.deets.map(deet => (
                        <div className="deet" key={deet.id}>
                            <img className="deetImage" src={deet.img} />
                            <ul>
                                <li>{deet.text}</li>
                                <li>{deet.text}</li>
                                <li>{deet.text}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        )
    }
}

export default Details;