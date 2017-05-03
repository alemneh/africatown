import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import axios from 'axios';

const style = {
  marginLeft: 20,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelSignIn = this.handelSignIn.bind(this);
  }

  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.user, obj);
    this.setState({user: updatedValues});
  }

  handelSignIn(e) {
    e.preventDefault();
    const { username, password} = this.state.user;
    console.log(username);
    console.log(password);
    axios.get(process.env.URL + '/login', {
      auth: {
        username,
        password
      }
    })
    .then((res) => {
      console.log(res);
      localStorage.token = res.data.token;
      browserHistory.push('/');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const styles = {
      form: {
        width: '360px',
        margin: '0 auto'
      },
      btn: {
        marginRight: '25px'
      }
    }
    return (
      <form style={styles.form} onSubmit={ this.handelSignIn }className="form-horizontal">
        <fieldset>
          <legend>Login</legend>
          <div className="form-group">
            <label for="inputEmail" className="col-lg-2 control-label">Email</label>
            <div className="col-lg-10">
              <input required onChange={ this.handleInputChange } type="text" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword" className="col-lg-2 control-label">Password</label>
            <div className="col-lg-10">
              <input required onChange={ this.handleInputChange } type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button style={styles.btn} type="submit" className="btn btn-primary">Login</button>
              <Link to="/signup-form" className="btn btn-default">Join</Link>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}


export default SignInForm;
