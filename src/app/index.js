import React from 'react';
import { render } from 'react-dom';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import PropertyList from './components/PropertyList/PropertyList';
import PropertyListEdit from './components/propertyListEdit/propertyListEdit';
import AddPropertyForm from './components/addPropForm/addPropForm';
import HomePage from './components/home/home';
import SignInForm from './components/signin/signin';
import SignUpForm from './components/SignUpForm/SignUpForm';
import AccountPage from './components/accountPage/accountPage';
import PropertyDetails from './components/propertyDetails/propertyDetails';
import propertyDetailsEdit from './components/propertyDetailsEdit/propertyDetailsEdit';
import propertyDetailsEditForm from './components/propFormEdit/propFormEdit';
import App from './App';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/properties-list" component={PropertyList} />
    <Route path="/account" component={AccountPage} />
    <Route path="/properties-edit" component={PropertyListEdit} />
    <Route path="/property-details" component={PropertyDetails} />
    <Route path="/property-edit" component={propertyDetailsEdit} />
    <Route path="/property-edit-form" component={propertyDetailsEditForm} />
    <Route path="/add-property" component={AddPropertyForm} />
    <Route path="/signin-form" component={SignInForm} />
    <Route path="/signup-form" component={SignUpForm} />
  </Route>
)



render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
