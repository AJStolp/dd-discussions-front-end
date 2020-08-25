import React from "react";
import "./welcome-message.css";
import { FaHandPeace, FaSmileBeam } from "react-icons/fa";

const WelcomeMessage = () => {
	return (
		<div>
			<section className='section-fa-hand-piece'>
				<FaSmileBeam size={250} className='fa-hand-peace' />
				<section className='welcome-message-box'>
					<h3>Welcome</h3>
					<p>
						Thankyou for signing up - Please Be Respectful and Mindful of
						other's!
					</p>
				</section>
			</section>
			{/* <section className="welcome-message-box">
            <h3>Welcome Message</h3>
            <p>Thankyou for signing up - Please Be Respectful and Mindful of other's!</p>
         </section> */}
		</div>
	);
};
export default WelcomeMessage;
