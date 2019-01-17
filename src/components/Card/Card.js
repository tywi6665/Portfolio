import React, { Component, Fragment } from "react";
import "./Card.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, fas);

class Card extends Component {

    state = {
        thumbnails: [{
                id: 1,
                url: "./images/photo1.jpg",
                h1: "Chromaticity",
                h2: `An experiment in D3.js
                    (Work in Progess)`,
                p: "A React based web application that utilizes custom designed D3.js elements and animations to generate and analyze images based on specified color and existing color palettes.",
                icons1: ["fab", "react"],
                icons2: ["fab", "node"],
                icons3: ["fab", "aws"],
                link1: "https://github.com/tywi6665/Project-3/",
                link2: "https://chromaticity1993.herokuapp.com/"
            }, {
                id: 2,
                url: "./images/photo2.jpg",
                h1: "Clicky-Game",
                h2: "A click game that boldly goes where no one has been before!",
                p: "A React based game that tests the users memory skills and knowledge of Star Trek characters. Resistance to play this game is futile!",
                icons1: ["fab", "react"],
                icons2: ["fab", "node-js"],
                icons3: ["fab", "npm"],
                link1: "https://github.com/tywi6665/Clicky-Game2/",
                link2: "https://clicky-game1993.herokuapp.com/"
            }, {
                id: 3,
                url: "./images/photo3.jpg",
                h1: "Is This Legit",
                h2: "Delving into the world of machine learning",
                p: "The internet is awash with misleading articles and information. Ever wondered if the web page you're reading is trustworthy. There's an app for that!",
                icons1: ["fas", "database"],
                icons2: ["fab", "npm"],
                icons3: ["fas", "server"],
                link1: "https://github.com/tywi6665/is-this-legit/",
                link2: "https://peaceful-savannah-96764.herokuapp.com/"
            }]
    }

    mouseEnter() {
        console.log("Mouse Enter");
        // this.className.add("modal");
    }

    mouseLeave() {
        console.log("Mouse Leave");
    } 


    render() {
        return (
            <Fragment>
                {this.state.thumbnails.map(thumbnail => (
                    <div className="wrapper" key={thumbnail.id}>
                        <div className="tile">
                            <img src={thumbnail.url} alt={thumbnail.h1}/>
                            <div className="text">
                                <h1>{thumbnail.h1}</h1>
                                <h2 className="animate-text">{thumbnail.h2}</h2>
                                <p className="animate-text">{thumbnail.p}</p>
                                <div className="animate-icons">
                                    <h3>Technologies Used:</h3>
                                    <span onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}><FontAwesomeIcon icon={thumbnail.icons1} size="4x"/></span>
                                    <span><FontAwesomeIcon icon={thumbnail.icons2} size="4x"/></span>
                                    <span><FontAwesomeIcon icon={thumbnail.icons3} size="4x"/></span>
                                </div>
                                <div className="links">
                                    <span>
                                        <a href={thumbnail.link1} target="_blank">
                                            <FontAwesomeIcon icon={["fab", "github"]} size="2x"/>
                                        </a>
                                    </span>
                                    <span>
                                        <a href={thumbnail.link2} target="_blank">
                                            <FontAwesomeIcon icon={["fas", "code"]} size="2x"/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }

}

export default Card;