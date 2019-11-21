import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import User from "./components/User"
import Poste from "../src/components/Poste"
import Detail from "../src/components/Detail"




function App() {
  return (
    <Router>
          
      <Switch>
        <Route exact path="/" component={User}  />
        <Route  path="/post/:id" component={Poste} />
        <Route path="/detail/:postId" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
