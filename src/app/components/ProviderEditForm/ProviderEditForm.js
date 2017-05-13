import React from 'react';

const ProviderEditFormCompnent = ({handelUpdateUser, handleInputChange, user}) => {
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
        <legend>Edit Info Provider</legend>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="name" type="text" className="form-control" id="inputName" value={user.name} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Organization</label>
          <div className="col-lg-10">
            <input required onChange={ handleInputChange }  name="organization" type="text" className="form-control" id="inputName" value={user.organization} />
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
          <div className="col-lg-10 col-lg-offset-2">
            <button style={styles.btn} type="reset" className="btn btn-default">Cancel</button>
            <button style={styles.btn} type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default ProviderEditFormCompnent;
