import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Description extends Component {
  state = {
    description: [],
    title: []
  };

  componentWillMount() {
    this.getDescription() && this.getTitle();
  }

  getTitle = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`
      )
      .then(res => this.setState({ title: res.data }))
      .catch(err => console.log("error"));
  };

  getDescription = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
      )
      .then(res => this.setState({ description: res.data }))
      .catch(err => console.log("error"));
  };

  render() {
    return (
      <div>
        <Link to="/">
          {" "}
          <button> Go BACK </button>{" "}
        </Link>

        {this.state.title.map((el, id) => (
          <div key={id}>
            {" "}
            <span> Post Title: {el.title} </span> <p> Post body: {el.body} </p>{" "}
          </div>
        ))}

        {this.state.description.map((el, id) => (
          <div key={id}>
            <h1> {el.name} </h1>
            <p> {el.body} </p>
          </div>
        ))}
      </div>
    );
  }
}
