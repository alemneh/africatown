import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';


const propertyDetailsEdit = () => {
  const property = JSON.parse(localStorage.property);

  const editForm = () => {
    browserHistory.push('/property-edit-form');
  }

  const deleteProperty = () => {
    const {userId, token} = localStorage;
    const property = JSON.parse(localStorage.property);
    const url = process.env.URL + '/users/' + property._owner +'/properties/' + property._id;
    axios.delete(url)
      .then((res) => {
        console.log(res);
        localStorage.property = '';
        browserHistory.push('/properties-edit');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const styles = {
    img: {
      margin: '10px'
    }
  }


  return (
    <div style={styles.img}>
        <h1><b>Address:</b> {property.address + ' ' + property.city + ', ' + property.state + ' ' + property.zipCode }</h1>
        <h3><b>Rent:</b> {'$' + property.price}</h3>
        <h3><b>Square Feet:</b> {property.sqft + 'ft'}</h3>
        <h3><b>Manager/Owner:</b> {property.manager}</h3>
        <h3><b>Phone:</b> {property.telephone}</h3>
        <h3><b>Bedrooms:</b> {property.numOfBedrms}</h3>
        <h3><b>Bathrooms:</b> {property.numOfBathrms}</h3>
        <h3><b>House Type:</b> {property.houseType}</h3>
        <h3><b>Description:</b> </h3>
        <p>{property.description}</p>
        <ul style={styles.img}>
          <li><b>Cats Ok:</b> {property.isCatsOk ? 'Yes' : 'No'}</li>
          <li><b>Dogs Ok:</b> {property.isDogsOk ? 'Yes' : 'No'}</li>
          <li><b>Smoking Ok:</b> {property.smoking ? 'Yes' : 'No'}</li>
          <li><b>Furnished:</b> {property.furnished ? 'Yes' : 'No'}</li>
          <li><b>Wheel Chair Access:</b> {property.wheelChairAccess ? 'Yes' : 'No'}</li>
          <li><b>Laundry:</b> {property.laundry }</li>
          <li><b>Parking:</b> {property.parking }</li>
        </ul>
        <img style={styles.img} src="http://placehold.it/140x100" />
        <img style={styles.img} src="http://placehold.it/140x100" />
        <img style={styles.img} src="http://placehold.it/140x100" />
        <img style={styles.img} src="http://placehold.it/140x100" />
        <div>
          <a onClick={ editForm } style={styles.img} href="#" className="btn btn-warning">Edit</a>
          <a onClick={ deleteProperty }style={styles.img} href="#" className="btn btn-danger">Delete</a>
        </div>
    </div>
  )
}

export default propertyDetailsEdit
