import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

const style = {
  marginLeft: 20,
};

class AddPropertyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProperty: {},
      file: '',
      addPhoto: false,
      photos: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelAddProperty = this.handelAddProperty.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.renderPhotos = this.renderPhotos.bind(this);
  }

  componentWillMount() {
    const {token, userType } = localStorage;
    if(!token) return browserHistory.push('/signin-form');
    if(userType != 'provider') browserHistory.push('/');

  }

  handleFileChange(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
  }

  renderPhotos() {
    const { addPhoto, photos } = this.state;
    if(photos.length < 1) {
      for(var i = 0; i < 4; i++) {
        return (
          <form>
            <input type="file"  onChange={this.handleFileChange} />
            <button type="submit">Upload</button>
          </form>
        )
      }
    }
  }

  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.newProperty, obj);
    this.setState({newProperty: updatedValues});
  }


  handelAddProperty(e) {
    e.preventDefault();
    const {userId, token} = localStorage;
    const url = process.env.URL + '/users/' + userId +'/properties/';
    axios.post(url, this.state.newProperty)
      .then((res) => {
        console.log(res);
        this.setState({ addPhoto: true});
        // browserHistory.push('/properties-list');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const styles = {
      form: {
        width: '360px',
        margin: '0 auto',
      },
      btn: {
        marginRight: '25px'
      }
    }

    if(this.state.addPhoto) {
      return (
        <section className="container">
          { this.renderPhotos() }
        </section>
      )

    } else {
      return (
        <section className="container">
          <form  onSubmit={ this.handelAddProperty } className="form-horizontal">
            <fieldset>
              <legend>Add Property</legend>
              <div className="form-group">
                <label for="inputName" className="col-lg-2 control-label">Address</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="address" type="text" className="form-control" id="inputName" placeholder="Address" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputCity" className="col-lg-2 control-label">City</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="city" type="text" className="form-control" id="inputCity" placeholder="City" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputCity" className="col-lg-2 control-label">State</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="state" type="text" className="form-control" id="inputCity" placeholder="State" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputZipcode" className="col-lg-2 control-label">Zip Code</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="zipCode" type="number" className="form-control" id="inputZipcode" placeholder="Zip Code" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail" className="col-lg-2 control-label">Number of Bedrooms</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="numOfBedrms" type="number" className="form-control" id="inputEmail" placeholder="2" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail" className="col-lg-2 control-label">Number of Bathrooms</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="numOfBathrms" type="number" className="form-control" id="inputEmail" placeholder="1" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputStreet" className="col-lg-2 control-label">Square Feet</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="sqft" type="number" className="form-control" id="inputStreet" placeholder="700" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputStreet" className="col-lg-2 control-label">Price</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="price" type="number" className="form-control" id="inputStreet" placeholder="950" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputPhone" className="col-lg-2 control-label">Phone</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="telephone" type="number" className="form-control" id="inputPhone" placeholder="Phone" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputState" className="col-lg-2 control-label">Manager/Owner</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="manager" type="text" className="form-control" id="inputState" placeholder="Manager" />
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Cats Allowed</label>
                <div className="col-lg-10">
                  <select required onChange={ this.handleInputChange }  name="isCatsOk" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Dogs Allowed</label>
                <div className="col-lg-10">
                  <select required onChange={ this.handleInputChange }  name="isDogsOk" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Furnished</label>
                <div className="col-lg-10">
                  <select required onChange={ this.handleInputChange }  name="furnished" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Wheel Chair Access</label>
                <div className="col-lg-10">
                  <select required onChange={ this.handleInputChange }  name="wheelChairAccess" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Smoking Allowed</label>
                <div className="col-lg-10">
                  <select required onChange={ this.handleInputChange }  name="smoking" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Housing Type</label>
                <div required className="col-lg-10">
                  <select onChange={ this.handleInputChange }  name="houseType" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Cottage/Cabin</option>
                    <option>Duplex</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>In-Law</option>
                    <option>Loft</option>
                    <option>Manufactured</option>
                    <option>Assisted Living</option>
                    <option>land</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Parking</label>
                <div className="col-lg-10">
                  <select required onChange={ this.handleInputChange }  name="parking" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option>Carport</option>
                    <option>Attached Garage</option>
                    <option>Detached Garage</option>
                    <option>Off-Street Parking</option>
                    <option>Street Parking</option>
                    <option>Valet Parking</option>
                    <option>No Parking</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="select" className="col-lg-2 control-label">Laundry</label>
                <div className="col-lg-10">
                  <select required onChange={ this.handleInputChange }  name="laundry" className="form-control" id="select">
                    <option value="">--Select Option--</option>
                    <option>W/D In Unit</option>
                    <option>W/D Hookups</option>
                    <option>Laundry In Bldg</option>
                    <option>Laundry On Site</option>
                    <option>No Laundry On Site</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="inputState" className="col-lg-2 control-label">Description</label>
                <div className="col-lg-10">
                  <input required onChange={ this.handleInputChange }  name="description" type="text" className="form-control" id="inputState" placeholder="description" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-10 col-lg-offset-2">
                  <button style={styles.btn} type="reset" className="btn btn-default">Cancel</button>
                  <button style={styles.btn} type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
        )
    }


  }
}


export default AddPropertyForm;
