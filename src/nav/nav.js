import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaSignInAlt, FaSignOutAlt, FaUserPlus, FaComment} from "react-icons/fa";

function Nav() {
	return (
		<div className='div-nav'>
			<Link to='/' className='div-nav-child'><FaUserPlus size={25} className="fa-sign-in-out-alt"/>
				Sign Up
			</Link>
			<Link to='/sign-in' className='div-nav-child'><FaSignInAlt size={25} className="fa-sign-in-out-alt"/>
				Sign-in
			</Link>
			<Link to='/' className='div-nav-child'><FaSignOutAlt className="fa-sign-in-out-alt" size={25}/>
				Log Out
			</Link>
			<Link to='/user-posts' className='div-nav-child'><FaComment size={25} className="fa-sign-in-out-alt"/>
				Discussions
			</Link>
		</div>
	);
}
export default Nav;
