import React from "react";
import "./App.css";
import ListUser from "./component/listUser";
import Desc from "./component/description";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={ListUser} />

        <Route exact path="/desription/:id" component={Desc} />
      </Switch>
    </Router>
  );
}

export default App;
