import React from 'react';

const SeekerComponent = ({handelSignUp, handleInputChange}) => {
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
    <form  onSubmit={ handelSignUp } className="form-horizontal">
      <fieldset>
        <legend>Sign Up (Seekers)</legend>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="name" type="text" className="form-control" id="inputName" placeholder="name" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Password</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="password" type="password" className="form-control" id="inputName" placeholder="password" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPhone" className="col-lg-2 control-label">Phone</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="telephone" type="number" className="form-control" id="inputPhone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPhone" className="col-lg-2 control-label">Email</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="email" type="text" className="form-control" id="inputPhone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Address</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="address" type="text" className="form-control" id="inputName" placeholder="Address" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputCity" className="col-lg-2 control-label">City</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="city" type="text" className="form-control" id="inputCity" placeholder="City" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputCity" className="col-lg-2 control-label">State</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="state" type="text" className="form-control" id="inputCity" placeholder="State" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Zip Code</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="zipCode" type="number" className="form-control" id="inputZipcode" placeholder="Zip Code" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Date of Birth</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="dob" type="date" className="form-control" id="inputZipcode" placeholder="DOB" />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Race/Ethnicity</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="race" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option>Black</option>
              <option>White</option>
              <option>Asian</option>
              <option>Hispanic</option>
              <option>Mixed</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Profession</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="profession" type="text" className="form-control" id="inputZipcode" placeholder="Profession" />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Income Level</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="income" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option>0 - $20,000</option>
              <option>$20,001 - $30,000</option>
              <option>$30,001 - $40,000</option>
              <option>$40,001 - $50,000</option>
              <option>$50,001 - $75,000</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Housing Budget</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="housingBudget" type="number" className="form-control" id="inputZipcode" placeholder="2500" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Household Size</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="houseHoldSize" type="number" className="form-control" id="inputZipcode" placeholder="2" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Who is the head of this household?</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="headOfHouseHold" type="text" className="form-control" id="inputZipcode" placeholder="Mike Smith" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">How many adults in this household?</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="adultsInHouseHold" type="number" className="form-control" id="inputZipcode" placeholder="1" />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Do you have pets?</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="havePets" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">What is your historical connection to the Black community in the Central District? </label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="connectionToBlkCommunity" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option>Currently live here</option>
              <option>Previously lived here</option>
              <option>Family currently live here</option>
              <option>Family previously lived here</option>
              <option> Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">How do you see yourself contributing to the Africatown vision for preserving and developing the Black community in the Central District?</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="contribution" type="text" className="form-control" id="inputZipcode" />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">If you want to live in the Central District but currently do not, what is the main barrier stopping you from living here?</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="wantToLiveInCD" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option>Cost of housing</option>
              <option>Personal safety</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">If you don't currently live in the Central District, do you come regularly?</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="visitingReason" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option>Shopping</option>
              <option>Worship</option>
              <option>Dining out</option>
              <option>Visiting Family</option>
              <option>Visiting Friends</option>
              <option>Work</option>
              <option>Other</option>
            </select>
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
  )
}

export default SeekerComponent;
