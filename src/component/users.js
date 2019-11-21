
import React, { Component } from 'react'
import axios from 'axios';

export default class users extends Component {
    state={
        users:[]
    }

componentWillMount() {
    this.GetUser()
}

    GetUser=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => this.setState({users: res.data})).catch(err => console.log("Error"))
    }

    render() { 
        return (
        
            <div>
                        <div>
                        {this.state.users.map((el,id) => ( <div className="single-user" key={id}>

            <img src='$'></img>
        <h1>{el.name}</h1>
            <span>{el.username} </span>
        <span> {el.email}</span>
           <button> felssa </button>
        </div>

            
        ))
    }
    </div>
    </div>
    )
}
}