import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import axios from 'axios';
import Paper from 'material-ui/Paper';


const style = {
  marginLeft: 20,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
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

  render() {
    const styles = {
      form: {
        width: '960px',
        margin: '0 auto'
      }
    }
    return (
      <section style={styles.form}>
        <h1>Sign Up Form</h1>
        <form >
          <Paper zDepth={2}>
            <TextField hintText="Name" name="name" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Password" name="password" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Title" name="title" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Email" name="email" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="City" name="description" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Income" name="income" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Housing Budget" name="housingBudget" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="House Hold Size" name="houseHoldSize" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Head Of House Hold" name="headOfHouseHold" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
          </Paper>
          <RaisedButton onClick={this.handelSignUp} label="Sign Up" primary={true} style={style} />
       </form>
     </section>
    )
  }
}


export default SignUpForm;
