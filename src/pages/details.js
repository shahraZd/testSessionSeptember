import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    this.getInitialProps();
  }

  getInitialProps = async function() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`);
    const data = await res.json();
    console.log("this is the data:", data);
    console.log("this is the id:", this.props.match.params.id);
    this.setState({ profile: data });
  };

  render() {
console.log(this.state.profile)

    // return this.state.profile.map(
    //   (e, i) => (
    //     <div className="card">
    //     <p>User:{e.userId}</p>
    //     <p>Title:{e.title}</p>
    //     <p>Body:{e.body}</p>
    //       </div>
    //     )
    // );
    return(
    <h4>  {this.state.profile.title}</h4>
    )
  }
}

export default Details;
