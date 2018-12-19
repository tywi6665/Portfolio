import React, { Component } from "react";
import "./Contact.scss";
import Container from "../../components/Container"

class Contact extends Component {

    render() {
        return (
            <Container>
                <div className="info">
                    <img className="pic" src="./images/me.jpg" alt="me" />
                    <h2>Tyler Winstead</h2>
                    <ul className="contacts">
                        <a href="mailto:tyletcole@gmail.com">
                            <li>tyletcole@gmail.com</li>
                        </a>
                        <li>//</li>
                        <a href="https://github.com/tywi6665" target="_blank">
                            <li>github.com</li>
                        </a>
                        {/* <li>//</li>
                        <a href="https://www.linkedin.com/in/tywi6665" target="_blank">
                            <li>linkedin</li>
                        </a> */}
                    </ul>
                </div>
            </Container>
        )
    }

}

export default Contact;