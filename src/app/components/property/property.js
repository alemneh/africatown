import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const Property = ({ property, viewPropertyDetails, isEditMode }) => {
  console.log(property.propPicUrl );
  return (
    <div>
      <ListItem
            onClick={ () => {viewPropertyDetails(property, isEditMode)} }
            leftAvatar={<Avatar src={ property.propPhotos[0] } />}
            primaryText={ property.address }
            secondaryText={
              <p>
                <span style={{color: 'Black'}}>{property.price}</span> --
                { property.description }
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
    </div>
  )
}

export default Property;
