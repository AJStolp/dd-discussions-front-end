import React from "react";
import "./user-posts-data.css";
import { FaFire } from "react-icons/fa";

class DiscussionData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0,
      };
      this.incrementLikes = this.incrementLikes.bind(this);
   }
   
   incrementLikes() {
      this.setState(prevState => ({ likes: prevState.likes + 1 }));
   }

	render() {
		const newPost = this.props.discussionData.map(post => {
			return (
				<section className='user-posts' key={post.id}>
					<h3 className='user-posts-heading'>
						{post.title}
					</h3>
					<img
						className='user-photo'
						src='https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
						alt='human'
					/>
					<span>Edison Ronald</span>
					<p className="user-posts-body">
						{post.body}
					</p>
					<br></br>
					<span role='img' aria-label='human'>
						<FaFire className='fire-likes' /> 4 Likes
               <button onClick={this.incrementLikes}>{this.state.likes}</button>
					</span>
				</section>
			);
		});

      return(
         <div>
            <section className="post-flex-test">
               {newPost}
            </section>
         </div>);
	}
}
export default DiscussionData;
