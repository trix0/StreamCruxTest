import React from 'react';
import classes from "./StreamerProfile.module.css"
import Avatar from "./Avatar/Avatar"
import Rating from "./Rating/Rating"
import Comments from "./Comments/Comments"
const streamerProfile= (props) =>{
	let userData=props.userData;
	return(<div className={classes.container}>
			<div className={classes.StreamerProfile}>
				<Avatar name={userData.Name} avatar={userData.Avatar}/>
				<Rating rating={5}/>
			</div>
			<Comments addComment={props.addComment} Comments={userData.Comments}/>
		   </div>)
}

export default streamerProfile;