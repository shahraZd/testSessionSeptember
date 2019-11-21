import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "./Actions";
import { Link } from "react-router-dom";

const Posts = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);
  return (
    <div>
      {props.posts.map((el, i) => (
        <div className="user" key={i}>
          <p>{el.userId}</p>
          <p>{el.id}</p>
          <p>{el.title}</p>
          <p>{el.body}</p>
          <Link to={`/Description/${el.id}`}>
            <input type="button" value="show" />
          </Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
    posts:state.posts
});
export default connect(mapStateToProps, { getPosts })(Posts);
