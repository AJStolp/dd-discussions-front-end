import React from "react";
import "./landing-page.css";

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<section className='double-dose-discussions-heading'>
					<h1>Double Dose Discussions</h1>
				</section>
				<form className='form-landing-page'>
					<label htmlFor='email' className='landing-page-form-child'>Email</label>
					<input type='email' id='email' />
					<label htmlFor='username' className='landing-page-form-child'>
						Username
					</label>
					<input type='text' id='username' maxLength='15' />
					<label htmlFor='password' className='landing-page-form-child'>
						Password
					</label>
					<input type='password' id='password' />
					<button type='submit' className='landing-page-submit-button'>
						Sign up!
					</button>
				</form>
			</div>
		);
	}
}

export default LandingPage;
