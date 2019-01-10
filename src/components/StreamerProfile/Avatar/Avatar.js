import React from 'react';
import classes from "./Avatar.module.css"
const avatar= (props) => {
	let avatar=require('../../../assets/images/avatar/'+props.avatar);
return(

	<div className={classes.Avatar}>
		<h1 className={classes.Name}>{props.name}</h1>
		<img src={avatar} alt="Avatar"/>
	</div>
)
}
export default avatar;