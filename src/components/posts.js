import React from 'react'

const Posts = ({posts}) => {
    return (
        <div>
            <h1>firas List</h1>
            {contacts.map((post) => (
                <button class="card">
                   
                        <h5 class="card-title">{post.title}</h5>
                        <h6 class="card-subtitle ">{post.body}</h6>                 
                    
                </button>
            ))}
        </div>
    )
};

export default Posts