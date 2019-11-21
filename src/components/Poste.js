import React, { Component } from "react";
import { Link } from "react-router-dom";


class Poste extends Component {
  state = {
    listPost:[]
    
  };
  
  componentDidMount() {
    const { id } = this.props.match.params;
    
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then((data) => {
          this.setState({ listPost: data })
        })
        
        .catch(err => console.log(err));
    
  }

  render() {
    console.log(this.state);
    const { id } = this.props.match.params;
  
    return (
      <div>
          <h1>Liste Poste</h1>
        {this.state.listPost.map(el=>
    
                <div>
              <p>{el.title}</p>
              <p>{el.body}</p>
              <Link to={`/detail/${el.id}`}>
                <span>go to page 3</span>
              </Link>
             
              </div>
        
        )}
      </div>
    );
  }
}
export default Poste;
