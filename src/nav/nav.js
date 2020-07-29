import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
	return (
		<div className='div-nav'>
			<Link to='/' className='div-nav-child'>
				Log Out
			</Link>
			<Link to='/sign-in' className='div-nav-child'>
				Sign-in
			</Link>
			<Link to='/user-posts' className='div-nav-child'>
				Discussions
			</Link>
		</div>
	);
}
export default Nav;
