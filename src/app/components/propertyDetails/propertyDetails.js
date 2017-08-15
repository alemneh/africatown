import React, { Component } from 'react';

class propertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: ''
    }

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
  }

  componentWillMount() {
    const property = JSON.parse(localStorage.property);
    this.setState({ selectedPhoto: property.propPhotos[0].url });
  }

  handlePhotoClick(e) {
    console.log("photo clicked");
    console.log(e.target);
    this.setState({ selectedPhoto: e.target.src });
  }

  renderPhotos() {
    const styles = {
      img: {
        margin: '10px'
      }
    }
    const property = JSON.parse(localStorage.property);
    return property.propPhotos.map((photo) => {
      return (
        <img height="150" width="200" style={styles.img} src={photo.url} onClick={this.handlePhotoClick}/>
      )
    })
  }

  render() {
    const property = JSON.parse(localStorage.property);
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
        <div>
          { this.renderPhotos() }
          <img src={this.state.selectedPhoto} />
        </div>
      </div>
    )
  }

}

export default propertyDetails
