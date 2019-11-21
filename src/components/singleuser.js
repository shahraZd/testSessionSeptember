import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default function Singleuser(props){

  return (
    <div className="container-movie">
                
                <p>{props.element.id}</p>
              <p>{props.element.name}</p>
              <p>{props.element.username}</p>
              <button>
                <Link to={`/users/${props.element.id}`}>Edit</Link>
              </button>
             </div>

  );
};


