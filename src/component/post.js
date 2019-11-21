import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    posts: [],
    userid: this.props.match.params.i
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Posts List</h1>
        {this.state.posts
          .filter(el => el.id === userid)
          .map(el => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{el.title}</h5>
                <p class="card-text"> {el.body}</p>
                <a href="#">Go to details</a>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Post;
