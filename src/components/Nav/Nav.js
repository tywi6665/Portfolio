import React from "react";
import { Link } from "react-router-dom";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons';
import "./Nav.scss";
// library.add(fab, fas);


const Nav = () => (
    <nav>
        <div className="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="navList">
                <li><Link to={"/main"}>About
                    {/* <span><FontAwesomeIcon icon={["fas", "code"]} size="4x"/></span> */}
                    </Link>
                </li>
                <li><Link to={"/projects"}>Projects</Link></li>
                <li><Link to={"/contact"}>Contact Me</Link></li>
            </ul>
        </div>
    </nav>
);

export default Nav;