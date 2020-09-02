import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./landing-page/landing-page";
import SignIn from "./sign-in/sing-in";
import Footer from "./footer/footer";
import Nav from "./nav/nav";
import Discussions from "./user-posts/user-posts";
import WelcomeMessage from "./components/welcome-message";

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Nav />
				<Switch>
					<Route exact path='/sign-in' component={SignIn} />
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/user-posts' component={Discussions} />
					<Route exact path='/welcome-message' component={WelcomeMessage} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
