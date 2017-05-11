import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import MenuComponent from './components/menu/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderNav() {
    if(localStorage.token) {
      return (
        <MenuComponent />
      )
    }
  }

  render() {
    console.log('token: ' + localStorage.token);
    console.log(Boolean(localStorage.token));
    return (
      <div style={{height: '100%'}}>
        { this.renderNav() }
        <MuiThemeProvider>


          { this.props.children }
        </MuiThemeProvider>
      </div>
    );
  }
};

export default App;
