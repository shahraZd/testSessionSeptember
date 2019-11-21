import React, { Component } from "react";
import User from "../component/user";
class PageUser extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ Users: data });
      })
      .catch(console.log);
  }

  render() {
  
    return (
      <div className='listUsers'>
        {this.state.Users.map(el => (
          <User user={el}></User>
        ))}
      </div>
    );
  }
}
export default PageUser;
