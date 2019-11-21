import React from "react";
import "./App.css";
import Contactuser from "./pages/contactuser";
import Post from "./pages/post";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Contactuser />
        </Route>
        <Route path="/Post/:id" component={Post} />
        <Route exact path="/Details/:id" component={Details} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
