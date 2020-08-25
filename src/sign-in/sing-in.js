import React from "react";
// import { useHistory } from "react-router-dom";
import "./sing-in.css";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";

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
				<section className='sign-in-heading'>
					<h2>Login</h2>
				</section>
				<form className='sign-in-form' onSubmit={this.handleJwtAuth}>
					<label htmlFor='username' className='sign-in-form-labels'>
						Username
					</label>
					<input name="username" type='text' maxLength='15' id='username'></input>
					<label htmlFor='password' className='sign-in-form-labels'>
						Password
					</label>
					<input name="password" type='text' maxLength='15' id='password'></input>
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
