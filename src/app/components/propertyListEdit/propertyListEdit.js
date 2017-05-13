import React, { Component } from 'react';
import PropertyEdit from '../propertyEdit/propertyEdit';
import {List, ListItem} from 'material-ui/List';
import { browserHistory, Link } from 'react-router';
import Subheader from 'material-ui/Subheader';
import axios from 'axios';


class PropertyListEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isEditMode: false
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if(!token) browserHistory.push('/signin-form');
    this.fetchProperties();
  }

  viewPropertyDetails(property) {
    console.log(property);
    localStorage.property = JSON.stringify(property);
    browserHistory.push("/property-edit");
  }

  renderProperties() {
    const { properties } = this.state;
    if(!properties) {
      return (
        <p>No properties. <Link to="/add-property">Add Property</Link></p>
      );
    }
    return properties.map((property, index) => {
      return (
        <PropertyEdit property={property} viewPropertyDetails={this.viewPropertyDetails} key={index}/>
      )
    });
  }

  fetchProperties() {
    const { userId } = localStorage;
    const url = process.env.URL + '/users/' + userId + '/properties';
    axios.get(url)
      .then((res) => {
        console.log(res.data.properties);
        this.setState({ properties: res.data.properties });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const styles = {
      root: {
        marginBottom: 24,
        marginRight: 24,
        maxWidth: 360,
        width: '100%',
      },
      container: {
        width: '960px',
        margin: '0 auto'
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        maxWidth: 360,
      },
    };

    return (
      <section style={styles.container}>
        <List>
          <Subheader>Your Properties</Subheader>
          { this.renderProperties() }
        </List>
      </section>

    )
  }
}

export default PropertyListEdit
