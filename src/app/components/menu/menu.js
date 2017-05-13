import React from 'react';
import { Link, browserHistory } from 'react-router';

const MenuComponent = () => {
  const logout = () => {
    localStorage.clear();
    browserHistory.push('/');
  }


  return (
    <div>
      <div className="btn-group pull-right">
        <a href="#" className="btn btn-info">Settings</a>
        <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><Link to="/properties-edit">Properties</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li className="divider"></li>
          <li onClick={ logout}><a href="">Sign Out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MenuComponent;
