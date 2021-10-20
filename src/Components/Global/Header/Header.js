import React from 'react';
import "../../../AllMain/AllMain.css"
import "./Header.css"
import logo from "../../../images/logo.png"
import {NavLink} from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

const Header = () => {
	const {user, logout} = useFirebase();
	return (
		<header>
			<div className = "navbar">
				<div className = "container nav_d-flex">
					<div className = "logo">
						<img src = {logo} alt = "" />
					</div>
					<nav className = "navLinks">
						<ul>
							<NavLink
								to = "/home"
								activeStyle = {{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}}
								className = "nav_link">
								Home
							</NavLink>
							<NavLink
								to = "/aboutUs"
								activeStyle = {{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className = "nav_link">
								About Us
							</NavLink>
							<NavLink
								to = "/services"
								activeStyle = {{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className = "nav_link">
								Services
							</NavLink>
							<NavLink
								to = "/doctors"
								activeStyle = {{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className = "nav_link">
								Doctors
							</NavLink>
							<NavLink
								to = "/contactUs"
								activeStyle = {{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className = "nav_link">
								Contact Us
							</NavLink>
							<NavLink
								to = "/ourBlogs"
								activeStyle = {{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className = "nav_link">
								Our Blogs
							</NavLink>
						</ul>
					</nav>
					
					<div className = "signedOption">
						<div className = "signInfo">
							
							
							{user?.email ?
								<div className = "whenSignedIn">
									<NavLink to = "/login" activeStyle = {{
										borderBottom: "2px solid #157E5",
										fontWeight: "bold",
										color: "white"
									}} className = "nav_link">
										<button onClick = {logout}>Logout</button>
									
									</NavLink>
									<div className = "signImg">
										<img src = {(user?.photoURL)} alt = "" className = "profilePic" />
									</div>
									<p>{user.displayName} < /p>
								</div>
								:
								<NavLink to = "/login" activeStyle = {{
									borderBottom: "2px solid #157E5",
									fontWeight: "bold",
									color: "white"
								}} className = "notSignedIn">LogIn
								</NavLink>
							}
						
						
						</div>
						{/*==============SignIn profile Pic=============*/}
					
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
