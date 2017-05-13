import React from 'react';


const ProviderInfo = ({ user, toggleEditMode, deleteAccount }) => {
  const styles = {
    img: {
      margin: '10px'
    }
  }


  return (
    <div style={styles.img}>
      <h3><b>Name:</b> {user.name}</h3>
      <h3><b>Organization:</b> {user.organization}</h3>
      <h3><b>Address:</b> {user.address}</h3>
      <h3><b>City:</b> {user.city}</h3>
      <h3><b>State:</b> {user.state}</h3>
      <h3><b>Zip Code:</b> {user.zipCode}</h3>
      <h3><b>Phone:</b> {user.telephone}</h3>
      <h3><b>Email:</b> {user.email}</h3>
      <div>
        <a onClick={ toggleEditMode } style={styles.img} href="#" className="btn btn-warning">Edit</a>
        <a onClick={ deleteAccount } style={styles.img} href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  )
}


export default ProviderInfo;
