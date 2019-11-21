import React from "react";
import { Link } from "react-router-dom";

import "./fonts.css";
class Contactuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    this.getInitialProps();
  }

  getInitialProps = async function() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState({ profile: data });

    return {
      data
    };
  };

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        Check Users Profils

        <div className="list">
          {this.state.profile.map((el, i) => (
            <div className="card" key={i}>
              <p>Card</p>
              <p>Name:{el.name}</p>
              <p>User Name:{el.username}</p>
              <p>Address:</p>
              <p>Street:{el.address.street}</p>
              <p>Suite:{el.address.suite}</p>
              <p>City:{el.address.city}</p>
              <p>Zip Code:{el.address.zipcode}</p>
              <p>Latitude:{el.address.geo.lat}</p>
              <p>Longitude:{el.address.geo.lng}</p>
              <Link to={`/Post/${el.id}`}>
                <button>Posts</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default Contactuser;
