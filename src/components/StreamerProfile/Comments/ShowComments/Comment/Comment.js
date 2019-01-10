import React from 'react';
import classes from "./Comment.module.css"
const comment= (props) => (
<div className={classes.Comment}>{props.Comment}</div>

)

export default comment;