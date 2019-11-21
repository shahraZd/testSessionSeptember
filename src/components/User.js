import React, { Component }from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class User extends Component {
    state = {
      userList:[]
    };
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ userList: data })
    })
    .catch(console.log)
  }
    

render() { 
console.log(this.state.userList)
return (
   <div>
         <h1>this my first page</h1>
         {this.state.userList.map(el=>
         <div class="card" >
               
                <div class="card-body">
                    <h5 class="card-title">{el.name}</h5>
                     <p class="card-text"> {el.username}</p>
                     <p class="card-text"> {el.email}</p>
                     <Link to={`/post/${el.id}`}>
                    <button class="btn btn-primary">Go to</button>
                    </Link>
                </div>
         </div>)}
        
  </div>
   );
}
}