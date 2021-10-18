import React from 'react';
import "../../../AllMain/AllMain.css"
import "./Header.css"
import logo from "../../../images/logo.png"
import {NavLink} from "react-router-dom";

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
							<NavLink
								to="/home"
								activeStyle={{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}}
								className="nav_link">
								Home
							</NavLink>
							<NavLink
								to="/aboutUs"
								activeStyle={{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className="nav_link">
								About Us
							</NavLink>
							<NavLink
								to="/services"
								activeStyle={{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className="nav_link">
								Services
							</NavLink>
							<NavLink
								to="/doctors"
								activeStyle={{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className="nav_link">
								Doctors
							</NavLink>
							<NavLink
								to="/contactUs"
								activeStyle={{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className="nav_link">
								Contact Us
							</NavLink>
							<NavLink
								to="/ourBlogs"
								activeStyle={{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className="nav_link">
								Our Blogs
							</NavLink>
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
