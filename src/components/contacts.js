import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <h1>firas List</h1>
            {contacts.map((contact) => (
                <button class="card">
                   
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle ">{contact.email}</h6>                 
                    
                </button>
            ))}
        </div>
    )
};

export default Contacts