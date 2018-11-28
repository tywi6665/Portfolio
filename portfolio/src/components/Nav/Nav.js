import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => (
    <nav>
        <ul>
            <li><Link to={"/main"}>About</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/contact"}>Contact Me</Link></li>
        </ul>
    </nav>
);

export default Nav;