import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,  Link, Switch} from "react-router-dom";
import User from './components/User';
import Detail from './components/Detail';
import Post from './Post'

function App() {
  
  return (
    <Router>
     
    
    <Switch>
       <Route exact path="/" component={User}/>  
       <Route path="/post/:id" component={Post}/>
       <Route path="/detail/:id" component={Detail}/>
     </Switch>
    </Router>
  
  );
}
  



export default App;
