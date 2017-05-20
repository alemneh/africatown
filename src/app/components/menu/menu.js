import React from 'react';
import { Link, browserHistory } from 'react-router';

const MenuComponent = () => {
  const styles = {
    menu: {
      marginTop: '5px',
      marginRight: '15px'
    }
  }
  const logout = () => {
    localStorage.clear();
    browserHistory.push('/');
  }

  const renderLinks = () => {
    const { userType, isAdmin } = localStorage;
    console.log(isAdmin == false);

    if(isAdmin == 'true') {
      return (
        <ul className="dropdown-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li className="divider"></li>
          <li onClick={ logout}><a href="">Sign Out</a></li>
        </ul>

      )
    } else if (userType == 'provider') {
      return (
        <ul className="dropdown-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/properties-edit">Properties</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li className="divider"></li>
          <li onClick={ logout}><a href="">Sign Out</a></li>
        </ul>

      )
    } else {
      return (
        <ul className="dropdown-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li className="divider"></li>
          <li onClick={ logout}><a href="">Sign Out</a></li>
        </ul>

      )
    }
  }


  return (
    <div>
      <div style={styles.menu} className="btn-group pull-right">
        <a href="#" className="btn btn-info">Settings</a>
        <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
        { renderLinks() }
      </div>
    </div>
  )
}

export default MenuComponent;
