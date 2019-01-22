import React from 'react';
import classes from "./ShowComments.module.css"
import Comment from "./Comment/Comment"
const showComments= (props) =>{
console.log(props)
let comments= newArr = [...props.Comments];
comments=comments.reverse().map((comment,index)=><Comment key={index} Comment={comment}/>);
	return(

<div className={classes.ShowComments}>
	{comments}
</div>
)} 

export default showComments;
