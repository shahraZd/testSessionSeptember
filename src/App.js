import React from "react";
import PageUser from "./pages/pageUser";
import PagePost from "./pages/pagePosts";
import PageDetails from "./pages/pageDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      This is home pageDetails
      <Router className="App">
        <Switch>
          <Route exact path="/" component={PageUser} />
           <Route exacte path="/pageposts/:id" component={PagePost} />
          <Route  path="/pagedetails/:id" component={PageDetails} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
