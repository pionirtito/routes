import React from 'react'
import { Link,NavLink } from 'react-router-dom' // !!! Link=>preventdefault, a  Navlink dodaje klasu active
// import "./Navbar.css"; // mora exact za navlik /
import styles from "./Navbar.module.css" // !!! mora da se doda u tag activeClassName={styles.active} .... moze bilo koje ime bitno da se active preimenuje



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">React Router</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName={styles.active} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName={styles.active} className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;