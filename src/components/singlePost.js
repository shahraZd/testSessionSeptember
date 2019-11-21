import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default function Singlepost(props){

  return (
    <div>
                
                
              <p>user Id:{props.element.userId}</p>
              <p>title :{props.element.title}</p>
              <p>Id to pass:{props.element.id}</p>
              <button>
                <Link to={`/detail/${props.element.id}`}>detail</Link>
              </button>
             </div>

  );
};