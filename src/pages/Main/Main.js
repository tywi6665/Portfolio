import React, { Component } from "react";
import "./Main.scss";
import Container from "../../components/Container";
import TextBox from "../../components/TextBox";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, fas);

class Main extends Component {

    state = {
        snippets: [{
            id: 1,
            img: "./images/trilogy.png",
            heading: "Professional Experience",
            subheading: "Trilogy Education • Teaching Assistant",
            text: "• Oversees a cohort of 25+ students • Ensures students achieved thorough understanding of educational material via one-on-one interaction • Tutors students on the nuances of HTML, CSS, JavaScript and associated technologies • Fosters teamwork dynamic"
        }, {
            id: 2,
            img: "./images/CU-Logo.png",
            heading: "Professional Experience",
            subheading: "Senior Capstone Project • University of Colorado Boulder",
            text: "• Worked in conjunction with process engineering team at CRB Quality Engineering Consulting • Converted monoclonal antibody batch process into pseudo-continuous process using SuperPro • Developed, validated, and optimized continuous process simulation and workflow via process control • Compiled simulation which resulted in a net increase of 200% for annual therapeutic throughput"
        }, {
            id: 3,
            img: "./images/CU-Logo.png",
            heading: "Professional Experience",
            subheading: "Bowman Lab Group • University of Colorado Boulder",
            text: "• Designed experimental methods and protocols in accordance with Good Lab Practices • Formulated and produced thin-film polymer films for Aeronautical Riblet project financed by Boeing • Encoded holographic data on two-stage photo-initiated polymer systems • Implemented design of experiment techniques utilizing Dynamic Mechanical Analysis and microscopy"
        }, {
            id: 4,
            img: "./images/DU-logo.png",
            heading: "Education",
            subheading: "Web Development and Coding Bootcamp • University of Denver",
            text: "• Obtained 240 in-class JavaScript coding hours • Employed JavaScript, HTML, and CSS to create fully fleshed out and MERN web applications • Responsible for full stack web development for all educational and extracurricular projects • Utilized DRY and best coding practices"
        }, {
            id: 5,
            img: "./images/CU-Logo.png",
            heading: "Education",
            subheading: "College of Engineering • University of Colorado Boulder",
            text: "• B.S. in Chemical & Biological Engineering • Minor in Biochemistry • Pharmaceutical Biotechnology Focus"
        }]
    }

    render() {
        return (
            <Container>
                {/* <div className="triangleMain"></div> */}
                <TextBox>
                    <h1 className="name">Tyler Winstead</h1>
                    <h2 className="statement">I am a recent University of Denver Coding Bootcamp graduate, and aspiring front-end web developer. I combine an engineering background and knowhow with a newfound MERN skillset in full-stack web development. I am highly interested in employing math-oriented coding in order to create custom data visualizations and animations via d3js. I am a tenacious troubleshooter and problem solver that gleefully pursues challenge.</h2>
                    {this.state.snippets.map(snippet => (
                        <div className="list" key={snippet.id}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                                <ul className="unordered">
                                    <li>
                                        <img className="image" src={snippet.img} alt="" />
                                        <h3 className="heading">{snippet.heading}</h3>
                                        <h3 className="subheading">{snippet.subheading}</h3>
                                        <p className="text">{snippet.text}</p>
                                    </li>
                                </ul>
                            </ScrollAnimation>
                        </div>
                    ))}
                    <div className="skills">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" offset={50} >
                            <h3>Hard Skills</h3>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "js"]} size="3x" /></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "react"]} size="3x" spin /></span>
                            <span className="icon"><img src="./images/d3.svg" height="42px" width="42px" alt="d3 icon" /></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "html5"]} size="3x" /></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "css3"]} size="3x" /></span>
                            <span className="icon"><img src="./images/lightroom.png" height="42px" width="42px" alt="lightroom icon" /></span>
                            <span className="icon"><img src="./images/photoshop.png" height="42px" width="42px" alt="photoshop icon" /></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "node"]} size="3x" /></span>
                            {/* <span className="icon"><img src="./images/handlebars.svg" height="42px" width="42px"/></span> */}
                            <span className="icon"><FontAwesomeIcon icon={["fab", "github-square"]} size="3x" /></span>
                        </ScrollAnimation>
                    </div>
                </TextBox>
            </Container>
        )
    }

}

export default Main;