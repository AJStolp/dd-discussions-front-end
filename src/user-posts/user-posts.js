import React from "react";
import "./user-posts.css";
// import { FaFire } from 'react-icons/fa';
import config from "../config";
import DiscussionData from "./user-posts-data/user-posts-data";
// import DiscussionFetch from "../services/discussion-fetch";

class Discussions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			discussions: [],
		};
	}

	setDiscussions = (discussions) => {
		this.setState({
			discussions,
		});
	};
	componentDidMount() {
		const APIEndpoint = config.API_ENDPOINT;
		const postEndpoint = "/api/posts";
		const url = APIEndpoint + postEndpoint;

		const request = {
			method: "GET",
			headers: {
				"content-type": "application-json",
			},
			// body: JSON.stringify()
		};
		fetch(url, request)
			.then((res) => {
				if (res.ok) {
					// console.log(res.json(), "I am Response")
					return res.json();
				} else {
					Promise.reject();
				}
			})
			.then(this.setDiscussions)
			.catch((error) => {
				console.log(error, "I AM SET DISCUSSIONS ERROR");
			});
	}

	render() {
		return (
			<div>
				<DiscussionData
					discussionData={this.state.discussions}
					countLikes={this.state.likes}
				/>
				{/* <div>
					
					<div>

						<section className='user-posts'>
							<h3 className='user-posts-heading'>
								Did the Xbox Showcase live up to its hype?
							</h3>
							<img
								className='user-photo'
								src='https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
								alt='human'
							/>
							<span>Edison Ronald</span>
							<p>
								After watching the Xbox showcase I can say that I did not like
								most of the games being released and I thought that it did not
								live up to its hype. What are your thoughts?
							</p>
							<br></br>
							<span role='img' aria-label='human'>
								<FaFire className='fire-likes'/> 4 Likes
							</span>
						</section>
						<section className='user-posts-answers'>
							<p>2 Answers</p>
						</section>
						<hr></hr>
						<section className='user-posts'>
							<img
								className='user-photo'
								src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
								alt='human'
							/>
							<span>Logan Ellis</span>
							<p>
								Halo looks incredible! I am looking forward to playing Halo!
								Nostalgic. I do agree that the rest of the showcase was a bust.
								I did not like how it was put together - seemed hodgepodge.
							</p>
						</section>
						<br></br>
						<section className='user-posts'>
							<img
								className='user-photo'
								src='https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
								alt='human'
							/>
							<span>Ronald Rose</span>
							<p>
								It was okay. I was watching to see Halo. I don't understand the
								disappointment that people have towards Halo game-play.
							</p>
						</section>
					</div>
               <hr></hr>
               <div>
						<section className='user-posts'>
							<h3 className='user-posts-heading'>
							Cross Play
							</h3>
							<img
								className='user-photo'
								src='https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
								alt='human'
							/>
							<span>Jason S</span>
							<p>
                     I love the idea of cross-play between consoles but not so much with pc. I think pc players have an advantage with a mouse.
							</p>
							<br></br>
							<span role='img' aria-label='human'>
							<FaFire className='fire-likes'/> 7 Likes
							</span>
						</section>
						<section className='user-posts-answers'>
							<p>1 Answers</p>
						</section>
						<hr></hr>
						<section className='user-posts'>
							<img
								className='user-photo'
								src='https://images.unsplash.com/photo-1545912453-db258ca9b7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
								alt='human'
							/>
							<span>Shelly Belly</span>
							<p>
								I know the pc community is going to argue that aim assist counters the advantage of using a mouse and some will even go as far as saying it give an advantage over pc players. Personally, I think there should be an option to toggle between console cross play and cross play with pc.
							</p>
						</section>
					</div>
				</div> */}
			</div>
		);
	}
}
export default Discussions;
