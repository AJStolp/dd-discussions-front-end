import React from "react";
import "./landing-page.css";
import AuthApiService from "../services/auth-api-service";

class LandingPage extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			error: ""
		}
	}
	handleFormSubmit = (event) => {
		event.preventDefault();

		const{ username, password, email } = event.target;

		AuthApiService.postLogin({
			username: username.value,
			password: password.value,
			email: email.value
		})
		.then(user => {
			username.value = "";
			password.value = "";
			email.value = "";
		})
		.then()
	}

	render() {
		return (
			<div>
				<section className='double-dose-discussions-heading'>
					<h1>Double Dose Discussions</h1>
				</section>
				<form className='form-landing-page'>
					<label htmlFor='email' className='landing-page-form-child'>Email</label>
					<input type='email' id='email' className="landing-page-input-child"/>
					<label htmlFor='username' className='landing-page-form-child'>
						Username
					</label>
					<input type='text' id='username' maxLength='15' className="landing-page-input-child"/>
					<label htmlFor='password' className='landing-page-form-child'>
						Password
					</label>
					<input type='password' id='password' className="landing-page-input-child"/>
					<button type='submit' className='landing-page-submit-button'>
						Sign up!
					</button>
				</form>
			</div>
		);
	}
}

export default LandingPage;
