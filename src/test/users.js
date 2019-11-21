import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "./Actions";
import "./Users.css";
import { Link } from "react-router-dom";

const Users = props => {
  useEffect(() => {
    props.getUsers();
  }, []);
  return (
    <div>
      {props.users.map((el,i) => (
        <div className="user" key={i}>
          <p>{el.id}</p>
          <p>{el.name}</p>
          <p>{el.email}</p>
          <Link to={`/Posts/${el.id}`}>
            <input type="button" value="show" />
          </Link>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps, { getUsers })(Users);
