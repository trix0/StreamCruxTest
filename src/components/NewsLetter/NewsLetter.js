import React from 'react';
import classes from "./NewsLetter.module.css"
import Button from "../../UI/Button/Button"
const newsLetter= (props) => (
<div className={classes.NewsLetter}>
<form className={classes.NewsLetterForm}>
	<i onClick={props.modalClosed} className={classes.XButton}></i>
	<label>Sign up for our newsletter.</label>
	<input type="email" placeholder="youremail@domain.com"/>
	<Button>Sign up</Button>
</form>
</div>
)

export default newsLetter;