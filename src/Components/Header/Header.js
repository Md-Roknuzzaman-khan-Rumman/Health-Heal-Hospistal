import React from 'react';
import "../../AllMain/AllMain.css"
import "./Header.css"
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <div className="container nav_d-flex">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="navLinks">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Doctors</li>
                            <li>Contact Us</li>
                            <li>Our Blogs</li>
                        </ul>
                    </nav>
                    <div className="signedOption">
                        <div className="signInfo">
                            <p>Signned As:</p>
                            <p>Rumman</p>
                        </div>
                        <div className="signImg">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
