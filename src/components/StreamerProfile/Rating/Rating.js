import React,{ Component } from 'react';
import "./Rating.css"
import Modal from "../../../UI/Modal/Modal"
import ReactAux from "../../../hoc/ReactAux"
import NewsLetter from "../../NewsLetter/NewsLetter"
class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating || null,
      temp_rating: null,
      newsLetter:false
    };
  }
  modalCloseHandler=()=>{
    this.setState({newsLetter:false})
  }
  handleMouseover(rating) {
    this.setState(prev => ({
      rating,
      temp_rating: prev.rating
    }));
  }

  handleMouseout() {
    this.setState(prev => ({
      rating: prev.temp_rating
    }));
  }

  rate(rating) {
  	console.log(rating/2)
    this.setState({
      rating,
      temp_rating: rating,
      newsLetter:true
    });
  }


 render(){
    let stars = [];
    stars.push(<i 
      	  key={0}
      	  onMouseOver={() => this.handleMouseover(0)}
          onClick={() => this.rate(0)}
          onMouseOut={() => this.handleMouseout()} className={"StarOutline"}></i>);
    for (let i = 1; i < 11; i++) {
      let classyName;
      if(this.state.rating >= i && this.state.rating !== null){
      		classyName="StarFullRight";
      	if(i%2===1){
      		classyName="StarFullLeft";
      	}
      }
      else{
      	classyName="StarOutlineRight";
      	if(i%2===1){
      		classyName="StarOutlineLeft"
      	}
      }
      let star=<i 
      	  key={i}
      	  onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          onMouseOut={() => this.handleMouseout()} className={classyName}></i>;
      stars.push(star);
    } 			
  return(
  	<ReactAux>
  		<Modal className="Modal" show={this.state.newsLetter} >
				<NewsLetter modalClosed={this.modalCloseHandler}/>
		</Modal>
		<div className="Rating">
		{stars}

		</div>  
	</ReactAux>	
  );
 }
}
export default Rating;