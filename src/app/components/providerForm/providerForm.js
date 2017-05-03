import React from 'react';

const ProviderCompnent = () => {
  return (
    <form  onSubmit={ this.handelAddProperty } className="form-horizontal">
      <fieldset>
        <legend>Sign Up (Providers)</legend>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <input required onChange={ this.handleInputChange }  name="name" type="text" className="form-control" id="inputName" placeholder="name" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Organization</label>
          <div className="col-lg-10">
            <input required onChange={ this.handleInputChange }  name="organization" type="text" className="form-control" id="inputName" placeholder="Organization" />
          </div>
        </div>
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
          <label for="inputPhone" className="col-lg-2 control-label">Phone</label>
          <div className="col-lg-10">
            <input required onChange={ this.handleInputChange }  name="telephone" type="number" className="form-control" id="inputPhone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPhone" className="col-lg-2 control-label">Email</label>
          <div className="col-lg-10">
            <input required onChange={ this.handleInputChange }  name="email" type="text" className="form-control" id="inputPhone" placeholder="Phone" />
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

export default ProviderCompnent;