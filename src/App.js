import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import User from "../src/component/User"
// import Details from "../src/component/Details"



function App() {
  return (
    <Router >
     <Link to="/user"><h1>Test Web level 2</h1></Link>
      <User/>
      {/* <Details/> */}
      <Switch>
        <Route path="/user" component={User} />
        {/* <Route exact path="/" component={} />
        <Route path="/" component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;