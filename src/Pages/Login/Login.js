import React from 'react';
import "./Login.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
	const google = <FontAwesomeIcon icon = {faGoogle} />
	return (
		<div>
			<section className = "login">
				<p className = "login_title">Login</p>
				<input type = "text" placeholder = "Your Email" className = "loginEmail" /> <br />
				<input type = "password" placeholder = "Your Password" className = "loginPass" /> <br />
				<button className = "serviceButton">Login</button>
				<p className = "is_regi">Not Logged In! <Link to = "/register">Register</Link></p>
				<div className = "logged_via_container">
					<button className = "googleSignInButton">
						<p className = "login_via">{google}<span>oogle</span></p>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Login;
