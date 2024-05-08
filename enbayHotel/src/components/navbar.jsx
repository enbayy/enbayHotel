import React, { useState } from "react";
import "./navbar.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { Link } from 'react-router-dom';


function Navbar() {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");

    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    return (
        <nav className="nav">
            <ul className={active}>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        <Link to="/">Anasayfa</Link>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        <Link to="/about">Hakkında</Link>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        <Link to="/contact">İletişim</Link>
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <a href="#" className="nav__brand">
                ENBAY HOTEL
            </a>
        </nav>
    );
}

export default Navbar;