import React from 'react';

const Property = ({ property }) => {
  return (
    <div>
      <h3>{ property.address }</h3>
      <p>{ property.price }</p>
      <p>{ property.numOfBedrms }</p>
      <p>{ property.numOfBathrms }</p>
      <p>{ property.description }</p>
    </div>
  )
}

export default Property;
