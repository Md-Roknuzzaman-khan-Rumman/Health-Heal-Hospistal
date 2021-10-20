import React from 'react';
import "./Login.css"
import {Link, useHistory, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import useAuth from "../../Hooks/useAuth";

const Login = () => {
	const {signInUsingGoogle} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || "/home";
	const handleGoogleLogin = () => {
		signInUsingGoogle()
		.then(result => {
			history.push(redirect_url);
		})
	}
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
					<button className = "googleSignInButton" onClick = {handleGoogleLogin}>
						<p className = "login_via">{google}<span>oogle</span></p>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Login;
