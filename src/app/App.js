import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{height: '100%'}}>
        <MuiThemeProvider>
          
          { this.props.children }
        </MuiThemeProvider>
      </div>
    );
  }
};

export default App;
