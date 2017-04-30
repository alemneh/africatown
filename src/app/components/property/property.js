import React from 'react';

const Property = (props) => {
  return (
    <div>
      <h3>{ props.address }</h3>
      <p>{ props.price }</p>
      <p>{ props.numOfBedrms }</p>
      <p>{ props.numOfBathrms }</p>
      <p>{ props.description }</p>
    </div>
  )
}

export default Property;
