import React from "react";
import {Link} from 'react-router-dom'
const User = ({ user }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <div class="card-body">
        <h5 className="card-title">
          {user.name} {user.username}{" "}
        </h5>
        <h5 className="card-title">{user.email}</h5>
        <h5 className="card-title">{user.adress}</h5>
        <h5 className="card-title">{user.phone}</h5>
        <h5 className="card-title">{user.website}</h5>
        <Link to={`/pageposts/${user.id}`}>
          <button class="btn btn-primary">Posts</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
