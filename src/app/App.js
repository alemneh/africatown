import React, { Component } from 'react';
import HomePage from './components/home/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HomePage />
      </MuiThemeProvider>
    );
  }
};

export default App;
