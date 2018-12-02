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
                h1: "Project 1",
                h2: "I've got a long way to go!"
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