import React, {Component} from 'react';
import SeekerInfo from '../SeekerInfo/SeekerInfo';
import ProviderInfo from '../ProviderInfo/ProviderInfo';
import ProviderEditForm from '../ProviderEditForm/ProviderEditForm';
import SeekerEditForm from '../SeekerEditForm/SeekerEditForm';
import axios from 'axios';


class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      user: {}
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentWillMount() {
    const { userId, token} = localStorage;
    this.fetchUser(userId, token);

  }

  fetchUser(userId, token) {
    const url = process.env.URL + '/users/' + userId;
    axios.get(url)
      .then((res) => {
        console.log(res);
        this.setState({ user: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.user, obj);
    this.setState({user: updatedValues});
  }

  handelUpdateUser(e) {
    e.preventDefault();
    const { user } = this.state;
    const {userId, token} = localStorage;
    const url = process.env.URL + '/users/' + userId;
    axios.put(url, user)
      .then((res) => {
        console.log(res);
        this.setState({ user: res.data.user });
        this.toggleEditMode();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  toggleEditMode() {
    this.setState( { isEditMode: !this.state.isEditMode });
  }

  renderAccountInfo() {
    let { isEditMode, user, handleInputChange } = this.state;
    if(isEditMode) {

      if(user.userType == 'provider') {
        return (
          <ProviderEditForm user={user} toggleEditMode={this.toggleEditMode}
                            handleInputChange={handleInputChange}/>
        )
      } else {
        return (
          <SeekerEditForm user={user} toggleEditMode={this.toggleEditMode}
                            handleInputChange={handleInputChange}/>
        )
      }

    } else {
      if(user.userType == 'provider') {
        return (
          <ProviderInfo user={user} toggleEditMode={this.toggleEditMode}/>
        )
      }
      return (
        <SeekerInfo user={user} toggleEditMode={this.toggleEditMode}/>
      )
    }
  }

  render() {
    return (
      <section>
        <h1>Account Page</h1>
        { this.renderAccountInfo() }
      </section>
    )
  }
}

export default AccountPage;
