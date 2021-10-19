import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

const Register = () => {
	const google = <FontAwesomeIcon icon = {faGoogle} />
	return (
		<div>
			<section className = "login">
				<p className = "login_title">Register</p>
				<input type = "text" placeholder = "Your Email" className = "loginEmail" /> <br />
				<input type = "password" placeholder = "Your Password" className = "loginPass" /> <br />
				<button>Register</button>
				<p className = "isRegi">Already Logged In! <Link to = "/login">Login</Link></p>
				<div className = "logged_via_container">
					<p className = "login_via">{google}<span>oogle</span></p>
				</div>
			</section>
		</div>
	);
};

export default Register;
