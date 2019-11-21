import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      id: Number(props.match.params.id)
    };
  }

  componentDidMount() {
    this.getInitialProps();
  }

  getInitialProps = async function() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.id}`);
    const data = await res.json();
    this.setState({ profile: data });
  };

  render() {
    return this.state.profile.map(
      (e, i) => (
        <div className="card" key={i}>
        <p>User:{e.userId}</p>
        <p>Title:{e.title}</p>
            <Link to={`/Details/${e.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )
    );
  }
}

export default Post;
