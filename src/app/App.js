import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div style={{height: '100%'}}>
        <div className="btn-group pull-right">
          <a href="#" className="btn btn-info">Info</a>
          <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        {/* <img src="https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png" /> */}
        <MuiThemeProvider>

          { this.props.children }
        </MuiThemeProvider>
      </div>
    );
  }
};

export default App;
