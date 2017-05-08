import React from 'react';


const propertyDetails = () => {
  const property = JSON.parse(localStorage.property);
  const styles = {
    img: {
      margin: '10px'
    }
  }

  return (
    <div>
        <h1>Address: {property.address}</h1>
        <h3>Rent: {property.price}</h3>
        <h3>Manager/Owner: {property.manager}</h3>
        <h3>Phone: {property.telephone}</h3>
        <h3>Description: </h3>
        <p>{property.description}</p>
        <img style={styles.img} src="http://placehold.it/140x100" />
        <img style={styles.img} src="http://placehold.it/140x100" />
        <img style={styles.img} src="http://placehold.it/140x100" />
        <img style={styles.img} src="http://placehold.it/140x100" />
    </div>
  )
}

export default propertyDetails
