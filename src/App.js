import React from "react";
import "./App.css";
import UsersList from "../src/components/userslist"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Profile from "./components/profile";
import Description from "./components/description"

function App() {
  return (
    <Router>
      <h1> Users List </h1>
    
      <Switch>
        <Route path="/users/posts/:id" component={Profile}/>
        <Route exact path ='/' component={UsersList}/>
        <Route exact path ="/users/details/:id" component={Description}/>
      </Switch>

    </Router>
  );
}

export default App;
