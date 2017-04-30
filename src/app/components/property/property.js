import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const Property = ({ property }) => {
  console.log(property.propPicUrl );
  return (
    <div>
      <ListItem
            leftAvatar={<Avatar src={ property.propPicUrl } />}
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
