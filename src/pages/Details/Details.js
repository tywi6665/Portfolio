import React, { Component } from "react";
import "./Details.scss";
import Container from "../../components/Container";
import TextBox from "../../components/TextBox";

class Details extends Component {

    state = {
        deets: [{
            id: 1,
            img: "./images/react-logo.png",
            heading: "Built With React.js",
            text1: "React.js is a JavaScript library for creating dynamic, single page, and modularized web applications",
            text2: "To take full advantage of React, I created many reuseable stateless and stateful components. Calling these premade components in various places allowed me to make my portfolio lightweight and cohesive",
            text3: "I also utilized the react-router-dom npm package to simulate dynamic url addresses, and backend routing"
        },
        {
            id: 2,
            img: "./images/d3.svg",
            heading: "Animated With D3.js",
            text1: "D3.js is a JavaScript library for creating custom animations and data visualiztions",
            text2: "Portfolio Deets!!",
            text3: "Portfolio Deets!!"
        },
        {
            id: 3,
            img: "./images/sass-logo.png",
            heading: "Styled With Sass",
            text1: "Sass is a CSS preprocessor that allows for JavaScript-like styling functionality",
            text2: "Portfolio Deets!!",
            text3: "Portfolio Deets!!"
        }]
    }

    render() {
        return (
            <Container>
                <h2 className="detailsTitle">Details Page</h2>
                <div className="detailsBox">
                    {this.state.deets.map(deet => (
                        <div className="deet" key={deet.id}>
                            <img className="deetImage" src={deet.img} />
                            <h3>{deet.heading}</h3>
                            <ul>
                                <li>{deet.text1}</li>
                                <li>//</li>
                                <li>{deet.text2}</li>
                                <li>//</li>
                                <li>{deet.text3}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        )
    }
}

export default Details;