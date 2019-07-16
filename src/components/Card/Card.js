import React, { Component, Fragment } from "react";
import "./Card.scss";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, fas);

class Card extends Component {

    state = {
        hover: null,
        thumbnails: [{
            id: 1,
            url: "./images/react-wallpaper.png",
            h1: "Chromaticity",
            h2: `An experiment in D3.js
                    (MVP)`,
            p: "A React based web application that utilizes custom designed D3.js elements and animations to generate and analyze images based on specified color and existing color palettes.",
            icons1: ["fab", "react"],
            popover1: "React Framework",
            icons2: ["fab", "node"],
            popover2: "Node.js/npm",
            icons3: ["fab", "aws"],
            popover3: "Amazon Web Services/s3",
            link1: "https://github.com/tywi6665/Project-3/",
            link2: "https://chromaticity6665.herokuapp.com/"
        }, {
            id: 2,
            url: "./images/node-wallpaper.png",
            h1: "Rain Or Shine",
            h2: "A relaxing and beautiful way to check the weather",
            p: "A React based weather application that combines a css landscape and a D3.js plot to convey meaningful current and future weather information in a artistic way.",
            icons1: ["fab", "react"],
            popover1: "React Framework",
            icons2: ["fab", "node-js"],
            popover2: "JavaScript/ES6",
            icons3: ["fab", "sass"],
            popover3: "Sass/SCSS",
            link1: "https://github.com/tywi6665/Rain-or-Shine/",
            link2: "https://tywi6665.github.io/Rain-or-Shine/"
        }, {
            id: 3,
            url: "./images/code-tag.jpg",
            h1: "Clicky-Game",
            h2: "A click game that boldly goes where no one has been before!",
            p: "A React based game that tests the users memory skills and knowledge of Star Trek characters. Resistance to play this game is futile!",
            icons1: ["fab", "react"],
            popover1: "React Framework",
            icons2: ["fab", "node-js"],
            popover2: "JavaScript/ES6",
            icons3: ["fab", "npm"],
            popover3: "Node.js/npm",
            link1: "https://github.com/tywi6665/Clicky-Game2/",
            link2: "https://clicky-game1993.herokuapp.com/"
        }]
    }

    render() {
        return (
            <Fragment>
                {this.state.thumbnails.map(thumbnail => (
                    <div className="wrapper" key={thumbnail.id}>
                        <div className="tile">
                            <img src={thumbnail.url} alt={thumbnail.h1} />
                            <div className="text">
                                <h1>{thumbnail.h1}</h1>
                                <h2 onMouseEnter={this.mouseEnter} className="animate-text">{thumbnail.h2}</h2>
                                <p className="animate-text">{thumbnail.p}</p>
                                <div className="animate-icons">
                                    <h3>Technologies Used:</h3>
                                    <span>
                                        <Tippy arrow={true} content={<span className="popover">{thumbnail.popover1}</span>}>
                                            <FontAwesomeIcon icon={thumbnail.icons1} size="4x" />
                                        </Tippy>
                                    </span>
                                    <span>
                                        <Tippy arrow={true} content={<span className="popover">{thumbnail.popover2}</span>}>
                                            <FontAwesomeIcon icon={thumbnail.icons2} size="4x" />
                                        </Tippy>
                                    </span>
                                    <span>
                                        <Tippy arrow={true} content={<span className="popover">{thumbnail.popover3}</span>}>
                                            <FontAwesomeIcon icon={thumbnail.icons3} size="4x" />
                                        </Tippy>
                                    </span>
                                </div>
                                <div className="links">
                                    <span>
                                        <a href={thumbnail.link1} target="_blank" rel="noopener noreferrer">
                                            <Tippy arrow={true} content={<span className="popover">Github Repository</span>}>
                                                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                                            </Tippy>
                                        </a>
                                    </span>
                                    <span>
                                        <a href={thumbnail.link2} target="_blank" rel="noopener noreferrer">
                                            <Tippy arrow={true} content={<span className="popover">Live Link</span>}>
                                                <FontAwesomeIcon icon={["fas", "code"]} size="2x" />
                                            </Tippy>
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