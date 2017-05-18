import React, { Component } from 'react';
import User from '../AdminUser/AdminUser';
import Property from '../AdminProperty/AdminProperty';
import { browserHistory } from 'react-router';
import axios from 'axios';

class AdminDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      properties: null
    }
  }

  componentWillMount() {
    const { token, isAdmin } = localStorage;
    if(isAdmin == 'false') browserHistory.push('/');
    this.fetchUsers();
    this.fetchProperties();
  }

  fetchUsers() {
    const url = process.env.URL + '/users';
    axios.get(url)
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data.users});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleViewUser(user) {
    console.log(user);
    localStorage.user = JSON.stringify(user);
    localStorage.userId = user._id;
    browserHistory.push("/admin-user");
  }

  handleViewProperty(property) {
    console.log(property);
    localStorage.property = JSON.stringify(property);
    browserHistory.push("/admin-property");
  }

  fetchProperties() {
    const url = process.env.URL + '/properties';
    axios.get(url)
      .then((res) => {
        console.log(res);
        this.setState({ properties: res.data.properties});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderUsers() {
    let { users } = this.state;
    if(!users) {
      return (
        <p>No users.</p>
      )
    } else {
      return (
        users.map((user, index) => {
          return <User key={index} user={user}
                        index={index}
                       handleViewUser={this.handleViewUser} />
        })
      )
    }

  }

  renderProperties() {
    let { properties } = this.state;
    if(!properties) {
      return (
        <p>No properties.</p>
      )
    } else {
      return (
        properties.map((property, index) => {
          return <Property key={index} property={property}
                        index={index}
                       handleViewProperty={this.handleViewProperty} />
        })
      )
    }

  }

  render() {
    return (
      <section>
        <h1>Admin Board</h1>
        <h3>Users</h3>
        { this.renderUsers() }
        <h3>Properties</h3>
        { this.renderProperties() }
      </section>
    )
  }
}

export default AdminDashBoard;
