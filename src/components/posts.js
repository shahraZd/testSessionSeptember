import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Singlepost from './singlePost'

// on peut utiliser fonction mais on utilise class puisque on a besoin de  componentDidMount
export default class Posts extends Component {
  state = {
    Postlist: []
  };
  componentDidMount() {
    this.getContacts();
  }
  getContacts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
      .then(res => this.setState({ Postlist: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <center>
        <div className="wrap-post">
        <h1>posts</h1>
          {this.state.Postlist.map(el => (
            <div className="one-post">
                <Singlepost  element={el}/>
                {/* <p>{el.id}</p>
              <p>{el.userId}</p>
              <p>{el.title}</p> */}
              {/* <button>
                <Link to={`/updatecontact/${el._id}`}>Edit</Link>
              </button>
              <button onClick={() => this.ondelete(el._id)}>Delete</button> */}
            </div>
          ))}
        </div>
      </center>
    );
  }
}