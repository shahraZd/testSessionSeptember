import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import User from "./component/user";
import Post from "./component/post";

function App() {
  return (
    <BrowserRouter>
      <Link to="/User" />
      {/* <h1>Click ici</h1>
      </Link> */}
      <Link to="/Post" />
      {/* <h1>My Post List</h1>
      </Link> */}
      <Switch>
        <Route path="/" component={User} />
        <Route path="/Post/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
