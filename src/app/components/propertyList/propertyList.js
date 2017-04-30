import React, { Component } from 'react';
import Property from '../property/property';
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

  renderProperties() {
    return this.state.properties.map((property, index) => {
      return (
        <li key={index}><Property property={property}/></li>
      )
    });
  }

  fetchProperties() {
    axios.get(process.env.URL + '/properties')
      .then((res) => {
        console.log(res.data.properties);
        this.setState({ properties: res.data.properties });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <section>
        <h1>Properties</h1>
        { this.renderProperties() }
      </section>

    )
  }
}

export default PropertyList
