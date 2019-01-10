import React from 'react';
import classes from "./Comments.module.css"
import AddComment from "./AddComment/AddComment"
import ShowComments from "./ShowComments/ShowComments"
const comments= (props) => (

<div className={classes.Comments}>
	<div className={classes.Container}>
		<AddComment addComment={props.addComment}/>	
		<ShowComments Comments={props.Comments}/>
	</div>

</div>
)

export default comments;