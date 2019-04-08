import React from "react";
import { Link } from "react-router-dom";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import "./Nav.scss";
library.add(fab, fas);


const Nav = () => (
    <nav>
        <div className="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="navList">
                <li><Link to={"/main"}>About Me</Link></li>
                <li><Link to={"/projects"}>Projects</Link></li>
                <li><Link to={"/contact"}>Contact Me</Link></li>
                <li className="navIcons">
                    <Link to={"/details"}>
                        <Tippy arrow={true} content={<span className="popover">Portfolio Details</span>}>
                            <FontAwesomeIcon icon={["fas", "info-circle"]} size="2x" />
                        </Tippy>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;