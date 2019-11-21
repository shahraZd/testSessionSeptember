import React from "react";
import {Link} from 'react-router-dom'
const Post = props => {
  return (
    <div className='post'>
  
        <p>{props.post.body}</p>
        <p>{props.post.title}</p>
        <Link to={`/pagedetails/${props.post.id}`}><button >Description</button></Link>
  
    </div>
  );
};
export default Post;
