import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[] 
       
      
    };
  }
  componentDidMount() {
    this.getContacts();
  }
  getContacts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
      .then(res => this.setState({ list : res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection:"column",justifyContent: 'center', margin:'3%'}}>
        {this.state.list.map(el => (
          <div style={{ width: "18rem" }}>
            <h1>{el.name}</h1>
            <h2>{el.email}</h2>
            <h2>{el.city}</h2>
            <button><link to={`/description/${el.id}`}>information</link></button>
            
          </div>
        ))}
      </div>
    );
  }
}

export default ListUser;
