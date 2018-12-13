import React, { Component } from "react";
import "./Contact.scss";
import Container from "../../components/Container"

class Contact extends Component {

    render() {
        return (
            <Container>
                <div className="info">
                    <img className="pic" src="https://picsum.photos/300/?random" alt="me" />
                    <h2>Tyler Winstead</h2>
                    <ul className="contacts">
                        <li>tyletcole@gmail.com</li>
                        <li>//</li>
                        <li>github.com/tywi6665</li>
                    </ul>
                </div>
            </Container>
        )
    }

}

export default Contact;