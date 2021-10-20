import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

const Register = () => {
	const google = <FontAwesomeIcon icon = {faGoogle} />
	const handleRegister = (e) => {
		e.preventDefault();
	}
	return (
		<div>
			<section className = "login">
				<p className = "login_title">Register</p>
				<form onSubmit = {handleRegister}>
					<input type = "text" placeholder = "Your Name" className = "loginEmail" required /> <br />
					<input type = "text" placeholder = "Your Email" className = "loginEmail" required /> <br />
					<input type = "password" placeholder = "Your Password" className = "loginPass" required /> <br />
					<button className = "serviceButton">Register</button>
				</form>
				<p className = "isRegi">Already Logged In! <Link to = "/login">Login</Link></p>
				<div className = "logged_via_container">
					<p className = "login_via">{google}<span>oogle</span></p>
				</div>
			</section>
		</div>
	);
};

export default Register;
