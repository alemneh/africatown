import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import SeekerForm from '../seekerForm/seekerForm';
import ProviderForm from '../providerForm/providerForm';



class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {},
      form: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelSelectForm  = this.handelSelectForm.bind(this);
    this.handelSignUp = this.handelSignUp.bind(this);
  }


  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.newUser, obj);
    this.setState({newUser: updatedValues});
  }

  handelSignUp(e) {
      console.log(this.state.newUser);
    e.preventDefault();

    axios.post(process.env.URL + '/users', this.state.newUser)
      .then((res) => {
        console.log(res);
        localStorage.token = res.data.token;
        browserHistory.push('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handelSelectForm(e) {
    e.preventDefault()
    console.log(e.target.value);
    this.setState({ form: e.target.value });
  }

  renderSignUpForm() {
    const { form } = this.state;
    if(form == 'provider') {
      return (<ProviderForm handleInputChange={this.handleInputChange}
                            handelSignUp={this.handelSignUp}/>)
    } else if (form == 'seeker') {
      return (<SeekerForm handleInputChange={this.handleInputChange}
                          handelSignUp={this.handelSignUp}/>)
    } else {
      return (
        <div className="col-lg-10 col-lg-offset-2">
          <button  onClick={this.handelSelectForm }  value="seeker" className="btn btn-default">Seeker</button>
          <button  onClick={this.handelSelectForm }  value="provider" className="btn btn-primary">Provider</button>
        </div>
      )
    }
  }

  render() {
    return (
      <section className="container">
        { this.renderSignUpForm() }
      </section>
    )
  }
}


export default SignUpForm;
