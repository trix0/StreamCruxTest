import React,{Component} from 'react';
import classes from "./AddComment.module.css"
import Button from "../../../../UI/Button/Button"
class AddComment extends Component {
 	constructor(props) {
    super(props);

    this.state = {
      comment:""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }


  handleFormSubmit(e) {
  	e.preventDefault();
  	this.props.addComment(this.state.comment)
  }
  handleChange(e) {
   let value = e.target.value;
    this.setState(prevState => ({comment: value}));
   console.log(this.state)
  }
 render(){
  return(
  	<div className={classes.AddComment}>
  		<h1>Add a comment</h1>
	   	<form className={classes.Form} onSubmit={this.handleFormSubmit}>
	  		<textarea placeholder="Write your comment here..." className={classes.Textarea} value={this.state.newComment} onChange={this.handleChange} name="comment"></textarea>
	  		<Button>Add comment</Button>
	  	</form>
  	</div>

  );
 }
}
export default AddComment;
