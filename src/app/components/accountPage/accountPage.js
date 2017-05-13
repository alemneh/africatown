import React, {Component} from 'react';


class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      user: {}
    }
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
        this.setState({ user: res.data.user });
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
        localStorage.property = JSON.stringify(res.data.property);
        browserHistory.push('/properties-edit');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  toggleEditMode() {
    this.setState( { isEditMode: !this.state.isEditMode });
  }

  renderAccountInfo() {
    if(this.isEditMode) {
      return (
        <AccountInfoEdit user={user} toggleEditMode={this.toggleEditMode}
                          handleInputChange={handleInputChange}/>
      )
    } else {
      return (
        <AccountInfo user={user} toggleEditMode={this.toggleEditMode}/>
      )
    }
  }

  render() {
    return (
      <section>
        <h1>Account Page</h1>
        { this.renderAccountInfo() }
      </section>
      {}
    )
  }
}
