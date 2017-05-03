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
      newProperty: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelAddProperty = this.handelAddProperty.bind(this);
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
    let updatedValues = Object.assign({}, this.state.newProperty, obj);
    this.setState({newProperty: updatedValues});
  }

  handelAddProperty(e) {
    e.preventDefault();
    axios.post(process.env.URL + '/users/59053f756163d6141e07b06a/properties', this.state.newProperty)
      .then((res) => {
        console.log(res);
        browserHistory.push('/properties-list');
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
        <h1>Add Property</h1>
        <form onSubmit={this.handelAddProperty}>
          <Paper zDepth={2}>
            <TextField hintText="Address" name="address" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Number of Bedrooms" name="numOfBedrms" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Number of Bathrooms" name="numOfBathrms" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Price" name="price" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Description" name="description" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
            <TextField hintText="Image Url" name="propPicUrl" style={style} underlineShow={false} onChange={this.handleInputChange}/>
            <Divider />
          </Paper>
          <RaisedButton onClick={this.handelAddProperty} label="Primary" primary={true} style={style} />
       </form>
     </section>
    )
  }
}


export default AddPropertyForm;
