import React, { Component } from "react";
import { connect } from "react-redux";
import './User.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as Router,Route,  Link, Switch} from "react-router-dom";
class User extends Component {
    state = {
        contacts: []
      }
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }
    
    
  render() {
      return(
  
      this.state.contacts.map(el => (
        <div className="contact-card" key={el.id}>
             <h4>
             Name:
            </h4>
          <p className="card-title">{el.name}</p>
          <div className="card-text">
            <h4>
             @mail:
            </h4>
            <p>{el.email}</p>
           
          </div>
          <div className="buttons">
            <Link to={`/post/${el.id}`}>
              <input type="button" value="post" className="edit-button" />
            </Link>
          
          </div>
        </div>
      )
      )
    
      )
  }
}

export default User
  
