import React, { Component } from 'react';
import axios from 'axios';


class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }

  componentWillMount() {
    this.fetchProperties();
  }

  fetchProperties() {
    axios.get(process.env.URL + '/properties')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <h1>Properties</h1>
    )
  }
}

export default PropertyList
