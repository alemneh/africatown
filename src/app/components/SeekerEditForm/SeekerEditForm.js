import React from 'react';

const SeekerEditFormComponent = ({
  handelUpdateUser,
  handleInputChange,
  toggleEditMode,
  user
}) => {
  console.log(user.dob.slice(0,10));
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
    <form  onSubmit={ handelUpdateUser } className="form-horizontal">
      <fieldset>
        <legend>Edit Info Seeker</legend>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="name" type="text" className="form-control" id="inputName" value={user.name} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPhone" className="col-lg-2 control-label">Phone</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="telephone" type="number" className="form-control" id="inputPhone" value={user.telephone} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPhone" className="col-lg-2 control-label">Email</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="email" type="text" className="form-control" id="inputPhone" value={user.email} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Address</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="address" type="text" className="form-control" id="inputName" value={user.address} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputCity" className="col-lg-2 control-label">City</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="city" type="text" className="form-control" id="inputCity" value={user.city} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputCity" className="col-lg-2 control-label">State</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="state" type="text" className="form-control" id="inputCity" value={user.state} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Zip Code</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="zipCode" type="number" className="form-control" id="inputZipcode" value={user.zipCode} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Date of Birth</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="dob" type="date" className="form-control" id="inputZipcode" value={user.dob.slice(0,10)} />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Race/Ethnicity</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="race" className="form-control" id="select" value={user.race}>
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
            <input required onChange={ handleInputChange }  name="profession" type="text" className="form-control" id="inputZipcode" value={user.profession} />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Income Level</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="income" className="form-control" id="select" value={user.income}>
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
            <input required onChange={ handleInputChange }  name="housingBudget" type="number" className="form-control" id="inputZipcode" value={user.housingBudget} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Household Size</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="houseHoldSize" type="number" className="form-control" id="inputZipcode" value={user.houseHoldSize} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Who is the head of this household?</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="headOfHouseHold" type="text" className="form-control" id="inputZipcode" value={user.headOfHouseHold} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">How many adults in this household?</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="adultsInHouseHold" type="number" className="form-control" id="inputZipcode" value={user.adultsInHouseHold} />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Do you have pets?</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="havePets" className="form-control" id="select" value={user.havePets}>
              <option value="">--Select Option--</option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">What is your historical connection to the Black community in the Central District? </label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="connectionToBlkCommunity" className="form-control" id="select" value={user.connectionToBlkCommunity}>
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
           <label for="textArea" className="col-lg-2 control-label">How do you see yourself contributing to the Africatown vision for preserving and developing the Black community in the Central District?</label>
           <div className="col-lg-10">
             <textarea name="contribution" className="form-control" rows="3" id="textArea" value={user.contribution}></textarea>
           </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">If you want to live in the Central District but currently do not, what is the main barrier stopping you from living here?</label>
          <div className="col-lg-10">
            <select required onChange={ handleInputChange }  name="wantToLiveInCD" className="form-control" id="select" value={user.wantToLiveInCD}>
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
            <select required onChange={ handleInputChange }  name="visitingReason" className="form-control" id="select" value={user.visitingReason}>
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
            <button style={styles.btn} onClick={toggleEditMode} className="btn btn-default">Cancel</button>
            <button style={styles.btn} type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default SeekerEditFormComponent;
