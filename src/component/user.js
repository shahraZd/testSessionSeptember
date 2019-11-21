import React, { Component } from "react";
import { Link } from "react-router-dom";
//

class User extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Users List</h1>
        {this.state.users.map(el => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{el.name}</h5>
              <p class="card-text"> {el.username}</p>
              <p class="card-text"> {el.email}</p>
              <a href="#">Go to my posts</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default User;
