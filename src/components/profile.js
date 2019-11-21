import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Profile extends Component {
    state = {
        blogList: []
    }

    componentWillMount(){
        this.getBlog()
    }

    getBlog=()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`).then(res => this.setState({blogList: res.data})).catch(err => console.log("error"))
    }

    render() {
        return (
            <div className="post-box">
                {this.state.blogList.map((el,id) => ( 

            <div className="single-post" key={id}>
                <h2> {el.title} </h2>
                <p> {el.body} </p>
                <Link to={`/users/details/${el.id}`}> <button> description </button> </Link>
            </div>
            ))}           
            </div>
        )
    }
}

export default withRouter(Profile);