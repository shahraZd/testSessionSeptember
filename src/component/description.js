import React, { Component } from "react";
import axios from "axios";

class Desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdesc:[] 
       
      
    };
  }
  componentDidMount() {
    this.getContacts();
  }
  getContacts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
    // .then(res => res.json())
      .then(res => this.setState({ listdesc : res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection:"column",justifyContent: 'center', margin:'3%'}}>
        {this.state.listdesc.map(el => (
          <div style={{ width: "18rem" }}>
             <h3>userId</h3> 
             <h3>id</h3>
              <p>title</p>
              <p>body</p>
            
          </div>
        ))}
      </div>
    );
  }
}

export default Desc;
