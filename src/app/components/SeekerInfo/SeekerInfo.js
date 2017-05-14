import React from 'react';


const SeekerInfo = ({ user, toggleEditMode, handleRemoveUser }) => {
  const styles = {
    img: {
      margin: '10px'
    }
  }


  return (
    <div style={styles.img}>
      <h3><b>Name:</b> {user.name}</h3>
      <h3><b>Address:</b> {user.address}</h3>
      <h3><b>City:</b> {user.city}</h3>
      <h3><b>State:</b> {user.state}</h3>
      <h3><b>Zip Code:</b> {user.zipCode}</h3>
      <h3><b>Phone:</b> {user.telephone}</h3>
      <h3><b>Email:</b> {user.email}</h3>
      <h3><b>DOB:</b> {user.dob}</h3>
      <h3><b>Race/Ethnicity:</b> {user.race}</h3>
      <h3><b>Profession:</b> {user.profession}</h3>
      <h3><b>Income Level:</b> {user.income}</h3>
      <h3><b>Housing Budget:</b> {user.housingBudget}</h3>
      <h3><b>Household Size:</b> {user.houseHoldSize}</h3>
      <h3><b>Who is the head of this household?:</b> {user.headOfHouseHold}</h3>
      <h3><b>How many adults in this household?:</b> {user.adultsInHouseHold}</h3>
      <h3><b>Do you have pets:</b> {user.havePets ? 'Yes' : 'No'}</h3>
      <h3><b>What is your historical connection to the Black community in the Centeral District:</b> {user.connectionToBlkCommunity}</h3>
      <h3><b>How do you see yourself contributing to the Africatown vision for preserving and developing the Black community in the Central District?:</b> {user.contribution}</h3>
      <h3><b>If you want to live in the Central District but currently do not, what is the main barrier stopping you from living here?:</b> {user.wantToLiveInCD}</h3>
      <h3><b>If you don't currently live in the Central District, do you come regularly?:</b> {user.visitingReason}</h3>
      <h3><b>Household Size:</b> {user.houseHoldSize}</h3>
      <div>
        <a onClick={ toggleEditMode } style={styles.img} href="#" className="btn btn-warning">Edit</a>
        <a onClick={ handleRemoveUser } style={styles.img} href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  )
}


export default SeekerInfo
