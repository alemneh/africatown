import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          { this.props.children }
        </MuiThemeProvider>
      </div>
    );
  }
};

export default App;
