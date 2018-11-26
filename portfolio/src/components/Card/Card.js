import React from "react";
import "./Card.scss";

const Card = (props) => (
    <div className="card">
        <div className="input">
            <input className="u-full-width" {...props}/>
        </div>
    </div>
);

export default Card;