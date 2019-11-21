import React, { Component } from "react";
import { connect } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class Post extends Component {

  state = {
    champId: this.props.match.params.id,
    post: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?id=' + this.state.champId + "")
      .then(res => res.json())
      .then((data) => {
        this.setState({ post: data })
      })
      .catch(console.log)
  }


  render() {
    return (
      <div>
       
         {this.state.post.map(e => {
          return( <div>
             <h1>{e.title}</h1>
             <span>{e.body}</span>
             <Link to={`/detail/${e.id}`}><input type="button" value="commentaire"/></Link>
           </div>)
         })}
        {/* { this.state.post.filter(el=>el.id===this.state.champId).map(el=>(
        
       ))} */}

      </div>
    )
  }
}

export default Post


