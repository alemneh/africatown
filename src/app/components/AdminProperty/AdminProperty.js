import React from 'react';


const PropertyComponent = ({ index, property, handleViewProperty }) => {

  return (
    <div>
      <a href="#" className="list-group-item"
         onClick={() => handleViewProperty(property) }
        >{ index + 1 }. { property.address }</a>
    </div>
  )
}



export default PropertyComponent;
