import React from 'react';
import { render } from 'react-dom';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import PropertyList from './components/PropertyList/PropertyList';
import AddPropertyForm from './components/addPropForm/addPropForm';
import HomePage from './components/home/home';
import App from './App';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/properties-list" component={PropertyList} />
    <Route path="/add-property" component={AddPropertyForm} />
  </Route>
)



render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
