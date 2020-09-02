import React from "react";
import "./landing-page.css";
import AuthApiService from "../services/auth-api-service";
// import { useHistory } from "react-router-dom";
import { FaSignInAlt } from  "react-icons/fa";

class LandingPage extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			error: ""
		}
	}
	handleFormSubmit = (event) => {
		// const history = useHistory();

		event.preventDefault();

		const{ username, password, email } = event.target;

		AuthApiService.postUser({
			username: username.value,
			password: password.value,
			email: email.value
		})
		.then(user => {
			username.value = "";
			password.value = "";
			email.value = "";
		})
		// .then(() => {
		// 	history.push("/src/user-posts");
		// })
		.catch(error => {
			let handleError = error;
			console.log(error, "I AM ERROR")
			return handleError
		})
	}

	render() {
		return (
			<div>
				<form className='form-landing-page' onSubmit={this.handleFormSubmit}>
				<section className='double-dose-discussions-heading'>
					<h1>Double Dose Discussions</h1>
				</section>
				<section className="sign-up-here">
					<h3>Sign Up Here</h3>
				</section>
					<label htmlFor='email' className='landing-page-form-child'><strong>Email</strong></label>
					<input placeholder="Email" name="email" type='email' id='email' className="landing-page-input-child"/>
					<label htmlFor='username' className='landing-page-form-child'>
						<strong>Username</strong>
					</label>
					<input placeholder="Username" name="username" type='text' id='username' maxLength='15' className="landing-page-input-child"/>
					<label htmlFor='password' className='landing-page-form-child'>
						<strong>Password</strong>
					</label>
					<input placeholder="Password" name="password" type='password' id='password' className="landing-page-input-child"/>
					<button type='submit' className='landing-page-submit-button'>
						Sign up! <FaSignInAlt className="fa-sign-icon-landing-button"/>
					</button>
				</form>
				<h3>{this.handleError}</h3>
			</div>
		);
	}
}

export default LandingPage;
