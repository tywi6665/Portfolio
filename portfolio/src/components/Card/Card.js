import React, { Component } from "react";
import "./Card.scss";
import Container from "../Container";

class Card extends Component {

    state = {
        thumbnails: ["https://images.unsplash.com/reserve/E5CwLOxQSFimIXJurfpq_IMG_6424%20(1).jpg?dpr=2&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"]
    }

    expand = event => {
        event.preventDefault();
        document.getElementById("wrapper").classList.toggle("open");
        document.getElementById("content").classList.toggle("open");
    }

    render() {
        return (
            <Container>
                {this.state.thumbnails.map(thumbnail => (
                    <div onClick={this.expand} className="wrapper" id="wrapper">
                        <div className="content" id="content">
                            <img src={thumbnail} className="img" />
                            <div className="text">
                                <div className="line title">
                                    <p>I've got a long way to go!</p>
                                </div>
                                <div className="line subtitle">
                                    <p>I've got a long way to go!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        )
    }


}

// const Card = () => (
//     <div class="wrapper">
//         <div class="content">
//             <div class="img"></div>
//             <div class="text">
//                 <div class="line title"></div>
//                 <div class="line subtitle"></div>
//             </div>
//         </div>
//     </div>
// );

export default Card;