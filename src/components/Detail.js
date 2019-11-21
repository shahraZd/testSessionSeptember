import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Datail extends Component {
  state = {
    detailPost:[]
    
  };
  
  componentDidMount() {
    
    
      fetch(`https://jsonplaceholder.typicode.com/comments?=${this.props.match.params.postId}`)
        .then(response => response.json())
        .then((data) => {
          this.setState({ detailPost: data })
        })
        
        .catch(err => console.log(err));
    
  }

  render() {
    console.log(this.state);
    const { postId } = this.props.match.params;
  
    return (
      <div>
          <h1>detail poste</h1>
        {this.state.detailPost.map(el=>
    
                <div>
              <p>{el.name}</p>
              <p>{el.email}</p>
              <p>{el.body}</p>
              </div>
        
        )}
      </div>
    );
  }
}
