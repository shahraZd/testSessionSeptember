import React from 'react';
import Users from './test/users'
import Posts from './test/Posts'
import Description from './test/Description'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (

    <Router className="App">
      <Switch>
      <Route exact path='/' component={Users}/>
      <Route path='/Posts/:id' component={Posts}/>
      <Route path='/Description/:id' component={Description}/>
      </Switch>
      
      </Router>
  );
}

export default App;
