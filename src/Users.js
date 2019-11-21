import React , {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Users extends Component {
  constructor(props) {
    super(props);
   this.state= {
   

      items:[],
      isLoaded:false
    }
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          isLoaded:true,
          items:json,
        })
      });
    }

  
render() {
    var {isLoaded , items} = this.state ;
console.log({isLoaded , items})

    return( <div>
       {!isLoaded ? <div>Loading ...</div> 
    :
    <div className="Users">
      <ul>
        {items.map (item=> <Link to={`/posts/${item.id}`}>
        <li key={item.id}>
        Name :{item.name}
         
        </li>
        </Link>)}
      </ul>
    </div>
    } 
    </div>
  )

}
}

export default Users;
