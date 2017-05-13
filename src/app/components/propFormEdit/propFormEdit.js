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
      property: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelUpdateProperty = this.handelUpdateProperty.bind(this);
  }

  componentWillMount() {
    const { token } = localStorage;
    let property = JSON.parse(localStorage.property);
    this.setState({ property });
    if(!token) browserHistory.push('/signin-form');
  }

  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.property, obj);
    this.setState({property: updatedValues});
  }

  handelUpdateProperty(e) {
    e.preventDefault();
    const { property } = this.state;
    const {userId, token} = localStorage;
    // const property = JSON.parse(localStorage.property);
    const url = process.env.URL + '/properties/' + property._id;
    axios.put(url, property)
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
    let { property } = this.state;
    console.log(property);
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
                <input required onChange={ this.handleInputChange }  name="telephone" type="number" className="form-control" id="inputPhone" value={property.telephone} />
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
                <select required onChange={ this.handleInputChange } value={property.isCatsOk} name="isCatsOk" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Dogs Allowed</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange } value={property.isDogsOk}  name="isDogsOk" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Furnished</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  value={property.furnished} name="furnished" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Wheel Chair Access</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange }  value={property.wheelChairAccess} name="wheelChairAccess" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Smoking Allowed</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange } value={property.furnished} name="smoking" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Housing Type</label>
              <div required className="col-lg-10">
                <select onChange={ this.handleInputChange } value={property.houseType} name="houseType" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Cottage/Cabin</option>
                  <option>Duplex</option>
                  <option>Flat</option>
                  <option>House</option>
                  <option>In-Law</option>
                  <option>Loft</option>
                  <option>Assisted Living</option>
                  <option>land</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select" className="col-lg-2 control-label">Parking</label>
              <div className="col-lg-10">
                <select required onChange={ this.handleInputChange } value={property.parking} name="parking" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
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
                <select required onChange={ this.handleInputChange } value={property.laundry}  name="laundry" className="form-control" id="select">
                  <option value=''>--Select Option--</option>
                  <option>W/D In Unit</option>
                  <option>W/D Hookups</option>
                  <option>Laundry In Bldg</option>
                  <option>Laundry On Site</option>
                  <option>Valet Parking</option>
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
