import React, { Component } from 'react';
import Property from '../property/property';
import {List, ListItem} from 'material-ui/List';
import { browserHistory } from 'react-router';
import Subheader from 'material-ui/Subheader';
import axios from 'axios';


class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if(!token) browserHistory.push('/signin-form');
    this.fetchProperties();
  }

  renderProperties() {
    const { properties } = this.state;
    if(!properties) return;
    return properties.map((property, index) => {
      return (
        <Property property={property} key={index}/>
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
          <Subheader>Today</Subheader>
          { this.renderProperties() }
        </List>
      </section>

    )
  }
}

export default PropertyList
