import React from "react";
import "./sing-in.css";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import { FaSignInAlt } from "react-icons/fa";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: "",
		};
   }
   static defaultProps = {
		onLoginSuccess: () => {},
	};
	handleJwtAuth = (event) => {
      event.preventDefault();
      // const { history } = this.props;

		const { username, password } = event.target;

		AuthApiService.postLogin({
			username: username.value,
			password: password.value,
		})
			.then((res) => {
				username.value = "";
				password.value = "";
            TokenService.saveAuthToken(res.authToken);
            // history.push("discussions")
            this.props.onLoginSuccess();
			})
			.catch((res) => {
				this.setState = {
					error: res.error,
				};
			});
	};

	render() {
		return (
			<div className='display-center'>
				<form className='form-landing-page' onSubmit={this.handleJwtAuth}>
				<section className="sign-up-here">
					<h2>Login</h2>
				</section>
					<label htmlFor='username' className='landing-page-form-child'>
						<strong>Username</strong>
					</label>
					<input placeholder="Username" className="landing-page-input-child" name="username" type='text' maxLength='15' id='username'></input>
					<label htmlFor='password' className='landing-page-form-child'>
						<strong>Password</strong>
					</label>
					<input placeholder="Password" className="landing-page-input-child" name="password" type='password' maxLength='15' id='password'></input>
					<button type='submit' className='landing-page-submit-button'>
						Sign In! <FaSignInAlt className="fa-sign-icon-landing-button"/>
					</button>
				</form>
            <div className='alert'>
					<p>
						<strong>{this.state.error}</strong>
					</p>
				</div>
			</div>
		);
	}
}
export default SignIn;
