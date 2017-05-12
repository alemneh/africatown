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

class UpdatePropertyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedProperty: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelUpdateProperty = this.handelUpdateProperty.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if(!token) browserHistory.push('/signin-form');
  }

  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.updatedProperty, obj);
    this.setState({updatedProperty: updatedValues});
  }

  handelUpdateProperty(e) {
    e.preventDefault();
    const { updatedProperty } = this.state;
    const {userId, token} = localStorage;
    const property = JSON.parse(localStorage.property);
    const url = process.env.URL + '/properties/' + property._id;
    axios.put(url, updatedProperty)
      .then((res) => {
        console.log(res);
        localStorage.property = JSON.stringify(res.data.property);
        browserHistory.push('/properties-edit');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  cancelEditForm() {
    browserHistory.push('/properties-edit');
  }

  render() {
    const property = JSON.parse(localStorage.property);
    const styles = {
      form: {
        width: '360px',
        margin: '0 auto',
      },
      btn: {
        marginRight: '25px'
      }
    }
    return (
      <section className="container">
        <form  onSubmit={ this.handelUpdateProperty } className="form-horizontal">
          <fieldset>
            <legend>Edit Property</legend>
            <div className="form-group">
              <label for="inputName" className="col-lg-2 control-label">Address</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="address" type="text" className="form-control" id="inputName" value={property.address} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputCity" className="col-lg-2 control-label">City</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="city" type="text" className="form-control" id="inputCity" value={property.city} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputCity" className="col-lg-2 control-label">State</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="state" type="text" className="form-control" id="inputCity" value={property.state} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputZipcode" className="col-lg-2 control-label">Zip Code</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="zipCode" type="number" className="form-control" id="inputZipcode" value={property.zipCode} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputEmail" className="col-lg-2 control-label">Number of Bedrooms</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="numOfBedrms" type="number" className="form-control" id="inputEmail" value={property.numOfBedrms} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputEmail" className="col-lg-2 control-label">Number of Bathrooms</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="numOfBathrms" type="number" className="form-control" id="inputEmail" value={property.numOfBathrms} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputStreet" className="col-lg-2 control-label">Square Feet</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="sqft" type="number" className="form-control" id="inputStreet" value={property.sqft} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputStreet" className="col-lg-2 control-label">Price</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="price" type="number" className="form-control" id="inputStreet" value={property.price} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputPhone" className="col-lg-2 control-label">Phone</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="telephone" type="number" className="form-control" id="inputPhone" value={property.phone} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputState" className="col-lg-2 control-label">Manager/Owner</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="manager" type="text" className="form-control" id="inputState" value={property.manager} />
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Cats Allowed</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  name="isCatsOk" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.isCatsOk ? <option value="false">No</option> : <option selected value="false">No</option> }
                  {property.isCatsOk ? <option value="true">Yes</option> : <option selected value="true">Yes</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Dogs Allowed</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  name="isDogsOk" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.isDogsOk ? <option value="false">No</option> : <option selected value="false">No</option> }
                  {property.isDogsOk ? <option value="true">Yes</option> : <option selected value="true">Yes</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Furnished</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  name="furnished" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.furnished ? <option value="false">No</option> : <option selected value="false">No</option> }
                  {property.furnished ? <option value="true">Yes</option> : <option selected value="true">Yes</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Wheel Chair Access</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  name="wheelChairAccess" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.wheelChairAccess ? <option value="false">No</option> : <option selected value="false">No</option> }
                  {property.wheelChairAccess ? <option value="true">Yes</option> : <option selected value="true">Yes</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Smoking Allowed</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  name="smoking" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.smoking ? <option value="false">No</option> : <option selected value="false">No</option> }
                  {property.smoking ? <option value="true">Yes</option> : <option selected value="true">Yes</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Housing Type</label>
              <div required className="col-lg-10">
                <select onChange={ this.handleInputChange }  name="houseType" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.houseType == 'Apartment' ? <option selected >Apartment</option>: <option>Apartment</option> }
                  {property.houseType == 'Condo' ? <option selected>Condo</option> : <option>Condo</option> }
                  {property.houseType == 'Cottage/Cabin' ? <option selected>Cottage/Cabin</option> : <option>Cottage/Cabin</option> }
                  {property.houseType == 'Duplex' ? <option selected>Duplex</option> : <option>Duplex</option> }
                  {property.houseType == 'Flat' ? <option selected>Flat</option> : <option>Flat</option> }
                  {property.houseType == 'House' ? <option selected>House</option> : <option>House</option> }
                  {property.houseType == 'In-Law' ? <option selected>In-Law</option> : <option>In-Law</option> }
                  {property.houseType == 'Loft' ? <option selected>Loft</option> : <option>Loft</option> }
                  {property.houseType == 'Assisted Living' ? <option selected>Assisted Living</option> : <option>Assisted Living</option> }
                  {property.houseType == 'land' ? <option selected>land</option> : <option>land</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Parking</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  name="parking" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.houseType == 'Carport' ? <option selected >Carport</option>: <option>Carport</option> }
                  {property.houseType == 'Attached Garage' ? <option selected>Attached Garage</option> : <option>Attached Garage</option> }
                  {property.houseType == 'Detached Garage' ? <option selected>Detached Garage</option> : <option>Detached Garage</option> }
                  {property.houseType == 'Off-Street Parking' ? <option selected>Off-Street Parking</option> : <option>Off-Street Parking</option> }
                  {property.houseType == 'Street Parking' ? <option selected>Street Parking</option> : <option>Street Parking</option> }
                  {property.houseType == 'Valet Parking' ? <option selected>Valet Parking</option> : <option>Valet Parking</option> }
                  {property.houseType == 'No Parking<' ? <option selected>No Parking</option> : <option>No Parking</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Laundry</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  name="laundry" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  {property.houseType == 'W/D In Unit' ? <option selected >W/D In Unit</option>: <option>W/D In Unit</option> }
                  {property.houseType == 'W/D Hookups' ? <option selected>W/D Hookups</option> : <option>W/D Hookups</option> }
                  {property.houseType == 'Laundry In Bldg' ? <option selected>Laundry In Bldg</option> : <option>Laundry In Bldg</option> }
                  {property.houseType == 'Laundry On Site' ? <option selected>Laundry On Site</option> : <option>Laundry On Site</option> }
                  {property.houseType == 'No Laundry On Site' ? <option selected>Valet Parking</option> : <option>Valet Parking</option> }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="inputState" className="col-lg-2 control-label">Description</label>
              <div className="col-lg-10">
                <input required onChange={ this.handleInputChange }  name="description" type="text" className="form-control" id="inputState" value={property.description} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button style={styles.btn} onClick={ this.cancelEditForm } className="btn btn-default">Cancel</button>
                <button style={styles.btn} type="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    )
  }
}


export default UpdatePropertyForm;
