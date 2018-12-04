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
                url:"./images/photo1.jpg",
                h1: "Color Wheel",
                h2: "An experiment in D3.js",
                p: "A React based web application that utilizes custom designed D3.js elements and animations to generate and analyze images based on specified color and existing color palettes.",
                icons1: ["fab", "react"],
                icons2: ["fab", "node"],
                icons3: ["fab", "aws"],
                link1: "https://github.com/tywi6665/Project-3"
            }, {
                url:"./images/photo2.jpg",
                h1: "Project 2",
                h2: "I've got a long way to go!",
                p: "A React based web application that utilizes custom designed D3.js elements and animations to generate and analyze images based on specified color and existing color palettes.",
                icons1: ["fab", "react"],
                icons2: ["fab", "node"],
                icons3: ["fab", "aws"]
            }, {
                url: "./images/photo3.jpg",
                h1: "Is This Legit",
                h2: "Delving into the werld of machine learning",
                p: "The internet is awash with misleading articles and information. We have all sat there wondering if the web page you're reading is indeed legitimate and therefore trustworthy. Now there's an app for that!",
                icons1: ["fas", "database"],
                icons2: ["fab", "npm"],
                icons3: ["fas", "server"]
            }]
    }

    render() {
        return (
            <Fragment>
                {this.state.thumbnails.map(thumbnail => (
                    <div  className="wrapper">
                        <div className="tile">
                            <img src={thumbnail.url} alt={thumbnail.h1}/>
                            <div className="text">
                                <h1>{thumbnail.h1}</h1>
                                <h2 className="animate-text">{thumbnail.h2}</h2>
                                <p className="animate-text">{thumbnail.p}</p>
                                <div className="animate-icons">
                                    <h3>Technologies Used:</h3>
                                    <span><FontAwesomeIcon icon={thumbnail.icons1} size="4x"/></span>
                                    <span><FontAwesomeIcon icon={thumbnail.icons2} size="4x"/></span>
                                    <span><FontAwesomeIcon icon={thumbnail.icons3} size="4x"/></span>
                                </div>
                                <div className="links">
                                    <span>
                                        <FontAwesomeIcon icon={["fab", "github"]} size="2x"/>
                                        <a href={thumbnail.link1}/>
                                    </span>
                                    <span><FontAwesomeIcon icon={["fas", "code"]} size="2x"/></span>
                                    {/* <span><FontAwesomeIcon icon={["fas", "spinner"]} size="xs" spin/></span> */}
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