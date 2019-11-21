import React , {Component} from 'react';
import {link} from 'react-router-dom';

export default class User extends Component {
  constructor(props) {
    super(props);
   this.state = {
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
     
    <div className="App">
      <ul>
        {items.map (item=>
        <li key={item.id}>
          Name:{item.name}
         <button>post</button>
        </li>)}
      </ul>
    </div>
    } 
    </div>
  )

}
}