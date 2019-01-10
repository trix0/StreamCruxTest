import React, { Component } from 'react';
import classes from './App.module.css';
import StreamerProfile from "./components/StreamerProfile/StreamerProfile"

class App extends Component {
  state={
    "userData":[
      {
        "Name":"TRIXO",
        "Avatar":"trixo.png",
        "Comments":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt nunc at dignissim rhoncus. Morbi sit amet interdum velit, ac gravida metus. Proin eget ipsum dolor. Nunc vulputate est sit amet mattis molestie. Maecenas semper quam vel lectus convallis, et vehicula tortor varius. Duis et lobortis metus. Curabitur et leo a lorem ultrices dapibus. Nulla ultricies commodo ante eget tempor.",
          "Nulla eleifend viverra condimentum. Etiam eu dui dui. Integer ornare ante vel augue varius, vel lobortis lectus tincidunt. Cras nunc ex, mattis non ipsum id, dictum lacinia nisl. Suspendisse iaculis augue ipsum, eget dictum arcu interdum sed. Praesent aliquet ac tellus eu posuere. Nam suscipit tincidunt nunc et convallis. In sodales lectus sit amet ipsum rutrum tincidunt. Praesent in vehicula mauris."
        ]
      }
    ]
      
  };
  addCommentHandler=(add)=>{
    let userData=this.state.userData;
    console.log(userData)
    userData[0].Comments.push(add)
   this.setState({userData:userData});
  }
  render() {
    return (
      <div className={classes.App}>
      <StreamerProfile addComment={this.addCommentHandler} className={classes.container} userData={this.state.userData[0]}/>
      </div>
    );
  }
}

export default App;
