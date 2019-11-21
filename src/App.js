import React , {Component} from 'react';
import Poste from './Poste'
import Users from './Users' 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <Router className="App">
    
     <Switch>
     <Route exact path="/" component={Users} />
     <Route exact path="/posts/:id" component={Poste} />
     
   </Switch>
   </Router>
  );
}


export default App;
