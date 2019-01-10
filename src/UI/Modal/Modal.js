import React,{Component} from 'react';
import classes from "./Modal.module.css"
import ReactAux from "../../hoc/ReactAux"
class Modal extends Component{

	render(){
		return(
			<ReactAux>
			{this.props.show ? 	<div className={classes.Modal}>{this.props.children}</div> :null} 
			</ReactAux>
		);
	}
}


export default Modal;