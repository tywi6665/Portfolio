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
                h2: "I've got a long way to go!",
                icons1: ["fab", "react"],
                icons2: ["fab", "node"],
                icons3: ["fab", "aws"]
            }, {
                url:"./images/photo2.jpg",
                h1: "Project 2",
                h2: "I've got a long way to go!"
            }, {
                url: "./images/photo3.jpg",
                h1: "Project 3",
                h2: "I've got a long way to go!"
            }]
    }

    render() {
        return (
            // <div className="contain">
            <Fragment>
                {this.state.thumbnails.map(thumbnail => (
                    <div  className="wrapper">
                        <div className="tile">
                            <img src={thumbnail.url} alt={thumbnail.h1}/>
                            <div className="text">
                                <h1>{thumbnail.h1}</h1>
                                <h2 className="animate-text">{thumbnail.h2}</h2>
                                <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                                <div className="animate-icons">
                                    <h3>Technologies Used:</h3>
                                    <span><FontAwesomeIcon icon={thumbnail.icons1} size="4x"/></span>
                                    <span><FontAwesomeIcon icon={thumbnail.icons2} size="4x"/></span>
                                    <span><FontAwesomeIcon icon={thumbnail.icons3} size="4x"/></span>
                                </div>
                                <div className="dots">
                                    <span><FontAwesomeIcon icon={["fab", "github"]} size="2x"/></span>
                                    <span><FontAwesomeIcon icon={["fas", "code"]} size="2x"/></span>
                                    {/* <span><FontAwesomeIcon icon={["fas", "spinner"]} size="xs" spin/></span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
            // </div>
        )
    }


}

export default Card;