import * as React from "react";
import {Link} from "gatsby"
import { fist, jab, tv, navLink, navItem, navUl, logo} from "./index.module.css"

export const Navbar = () => {
    return (
        <nav>
            <Link to="#" className={logo}>
                <h1>
                    <span className={jab}>Jab</span><span className={tv}>TV</span>
                    <span className={fist}>&#x1F44A;</span>
                </h1>
            </Link>
            <ul className={navUl}>
                <li className={navItem}>
                    <Link to="#about" className={navLink}>About</Link>
                </li>
                <li className={navItem}>
                    <Link to="#stars" className={navLink}>Boxing Stars</Link>
                </li>
                <li className={navItem}>
                    <Link to="#stakeholders" className={navLink}>stakeholders</Link>
                </li>
                <li className={navItem}>
                    <Link to="#subscribe" className={navLink}>Subscribe</Link>
                </li>
            </ul>
        </nav>

    )
}