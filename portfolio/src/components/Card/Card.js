import React, { Component } from "react";
import "./Card.scss";
import Container from "../Container";

class Card extends Component {

    state = {
        thumbnails: ["https://images.unsplash.com/reserve/E5CwLOxQSFimIXJurfpq_IMG_6424%20(1).jpg?dpr=2&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb",'https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80']
    }

    // expand = event => {
    //     event.preventDefault();
    //     const wrapper = document.getElementsByClassName("wrapper");
    //     console.log(wrapper);
    //     wrapper[0].classList.toggle("open")
    //     const content = document.getElementsByClassName("content");
    //     console.log(content);
    //     content[0].classList.toggle("open");
    // }

    render() {
        return (
            <Container>
                {this.state.thumbnails.map(thumbnail => (
                    <div  className="wrapper">
                        <div className="tile">
                            <img src={thumbnail} />
                            <div className="text">
                                <h1>Lorem ipsum.</h1>
                                <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                                <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
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