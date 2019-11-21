import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Singleuser from './singleuser'

// on peut utiliser fonction mais on utilise class puisque on a besoin de  componentDidMount
export default class Contactlist extends Component {
  state = {
    contactlist: []
  };
  componentDidMount() {
    this.getContacts();
  }
  getContacts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ contactlist: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <center>
        <div className="top-container">
        <h1>User names</h1>
          {this.state.contactlist.map(el => (
            <div>
                <Singleuser  element={el}/>
              
              {/* <button>
                <Link to={`/updatecontact/${el._id}`}>Edit</Link>
              </button>
              <button onClick={() => this.ondelete(el._id)}>Delete</button> */}
            </div>
          ))}
        </div>
      </center>
    );
  }
}