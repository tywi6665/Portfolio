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

    render() {
        return (
            <Container>
                <TextBox>
                    <h1>I've got a long way to go!</h1>
                    <h2>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
                        My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</h2>    
                    <div className="list">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <ul className="unordered">
                                <li>
                                    <img className="image" src="https://loremflickr.com/100/100?random=1" />
                                    <h3>I've got a long way to go!</h3>
                                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
                                    My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>                                
                                </li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <ul className="unordered">
                                <li>
                                    <img className="image" src="https://loremflickr.com/100/100?random=1" />
                                    <h3>I've got a long way to go!</h3>
                                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
                                    My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>                                
                                </li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <ul className="unordered">
                                <li>
                                    <img className="image" src="https://loremflickr.com/100/100?random=1" />
                                    <h3>I've got a long way to go!</h3>
                                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
                                    My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>                                
                                </li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <ul className="unordered">
                                <li>
                                    <img className="image" src="https://loremflickr.com/100/100?random=1" />
                                    <h3>I've got a long way to go!</h3>
                                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
                                    My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>                                
                                </li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" offset="50">
                            <h3>Hard Skills</h3>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "js"]} size="3x"/></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "react"]} size="3x" spin/></span>
                            <span className="icon"><img src="./images/d3.svg" height="42px" width="42px"/></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "html5"]} size="3x"/></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "css3"]} size="3x"/></span>
                            <span className="icon"><img src="./images/lightroom.png" height="42px" width="42px"/></span>
                            <span className="icon"><img src="./images/photoshop.png" height="42px" width="42px"/></span>
                            <span className="icon"><FontAwesomeIcon icon={["fab", "node"]} size="3x"/></span>
                            {/* <span className="icon"><img src="./images/handlebars.svg" height="42px" width="42px"/></span> */}
                            <span className="icon"><FontAwesomeIcon icon={["fab", "github-square"]} size="3x"/></span>
                        </ScrollAnimation>   
                    </div>
                </TextBox>
            </Container>
        )
    }

}

export default Main;