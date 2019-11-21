import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


// on peut utiliser fonction mais on utilise class puisque on a besoin de  componentDidMount
export default class Detail extends Component {
  state = {
    detailList: []
  };
  componentDidMount() {
    this.getContacts();
  }
  getContacts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`)
      .then(res => this.setState({ detailList: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <center>
        <div className="wrap-post">
        <h1>DETAIL</h1>
          {this.state.detailList.map(el => (
            <div className="one-post">
                
                <p>PostId: {el.postId}</p>
              <p>LASTID: {el.id}</p>
              <p>EMAIL:{el.email}</p>
            
            </div>
          ))}
        </div>
      </center>
    );
  }
}