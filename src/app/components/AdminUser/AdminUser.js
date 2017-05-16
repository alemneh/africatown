import React from 'react';


const UserComponent = ({ index, user, handleViewUser }) => {

  return (
    <div>
      <a href="#" className="list-group-item"
         onClick={() => handleViewUser(user) }
        >{ index + 1 }. { user.name }</a>
    </div>
  )
}



export default UserComponent;
