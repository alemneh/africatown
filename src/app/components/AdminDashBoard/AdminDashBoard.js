import React, { Component } from 'react';
import axios from 'axios';

class AdminDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      properties: null
    }
  }

  fetchUsers() {
    axios.get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  fetchProperties() {
    axios.get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default AdminDashBoard;
