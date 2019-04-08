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
            text2: "I'm sure that by now you've noticed the animated background, well I made it using D3. Everything from the num of the circles to all of their properties (i.e color, size, opacity and position) are randomly generated, and then displayed on a svg background element. Then using D3's lifecycle methods, the data selection (the circles in this case) is updated every 5 seconds, leading to a random assortment of entering, updating and exiting circles",
            text3: "More good stuff is currently in the works!"
        },
        {
            id: 3,
            img: "./images/sass-logo.png",
            heading: "Styled With Sass",
            text1: "Sass is a CSS preprocessor that allows for JavaScript-like styling and functionality",
            text2: "With Sass I was able to define variables in my stylesheets, which were than able to be called throughout my scss files. One example of this is my use of variables to make my color theming easy and consistant",
            text3: "In addition to defining variables, Sass also allows for CSS properties to be derived from JavaScript-like functions. I used this bit of functionality most widely when determining size properties of certain container elements"
        }]
    }

    render() {
        return (
            <Container>
                <h2 className="detailsTitle">Portfolio Details Page</h2>
                <div className="detailsBox">
                    {this.state.deets.map(deet => (
                        <div className="deet" key={deet.id}>
                            <img className="deetImage" src={deet.img} alt=""/>
                            <h3>{deet.heading}</h3>
                            <ul>
                                <li>{deet.text1}</li>
                                <li>•••</li>
                                <li>{deet.text2}</li>
                                <li>•••</li>
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