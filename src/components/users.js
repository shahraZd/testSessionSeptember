import React from 'react'

    const users = ({ users }) => {
      return (
        <div>
          <center><h1>arken List</h1></center>
          {users.map((users) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{users.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{users.address}</h6>
                
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default users