import React, { Component } from "react";
import Post from "../component/post";
class PagePost extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: []
     };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className='listePost'>
          {this.state.posts.map(el=> <Post post={el} ></Post> )}

          
      
      </div>
    );
  }
}

export default PagePost;
