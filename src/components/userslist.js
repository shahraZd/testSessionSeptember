import React, { Component } from 'react'
import axios from "axios";
import "../App.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class UsersList extends Component {
state = {
    usersList: []
}


componentWillMount() {
    this.getUsers();
}

getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => this.setState({usersList: res.data})).catch(err => console.log("Error"))
}

    render() {
        return (
            <div className="user-box">
                {this.state.usersList.map((el,id) => ( <div className="single-user" key={id}>
                    <h2> {el.name} </h2>
                    <h2> {el.username} </h2>
                    <p> {el.website} </p>
                    <Link to={`/users/posts/${el.id}`}> <button> posts </button> </Link>
                    </div>
                ))}
  
            </div>
        )
    }
}

export default UsersList;