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
        <img src="https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png" />
        <MuiThemeProvider>

          { this.props.children }
        </MuiThemeProvider>
      </div>
    );
  }
};

export default App;
