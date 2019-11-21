import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Contactlist from "./components/userslist";
import Posts from "./components/posts";
import Detail from "./components/detail";
// import Updatecontact from "./Updatecontact";

import "./App.css";

function App() {
  return (
    <Router className="App">
      <div >
        {/* <div className="col-6 offset-5">
          <h1 className="text-primary">Contact App</h1>
          <button className="btn btn-outline-info m-3">
            <Link to="/contactlist">Contact list</Link>{" "}
          </button>
          <button className="btn btn-outline-info m-3">
            <Link to="/addcontact">Add Contact</Link>
          </button>
          <h1 className="text-primary">This is the Contact Page</h1>
        </div> */}
        {/* <h1>User names</h1> */}
        {/* <Contactlist/> */}
        {/* <Posts/> */}

      </div>

      <Switch>
        <Route exact path="/" component={Contactlist} />
        <Route path="/users/:id" component={Posts} />
        <Route path="/detail/:id" component={Detail} />
        {/* <Route path="/updatecontact/:id" component={Updatecontact} /> */}
      </Switch>
    </Router>
  );
}

export default App;