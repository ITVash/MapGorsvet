import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
//import GoogleMaps from './Components/Google-maps';
import { RegisterForm } from './Modules';
import { Auth, Main } from './Components';
import { connect } from 'react-redux'

import { Route } from 'react-router-dom';


const App = () => {
  
  return (
    <div className="App">
      <Fragment>
      {/*<GoogleMaps></GoogleMaps>*/}
        <Route exact path={["/", "/login"]} component={ Auth } />
        <Route path="/register" component={ RegisterForm } />
        <Route path="/main" component={ Main } />
      </Fragment>
    </div>
  );
}

const MapStore = ({auth}) => ({
  auth: auth.items
});
const MapDispatch = dispatch => ({
  setAuth: auth => dispatch({
    type: 'AUTH_SET_FORM',
    payload: auth
  })
});

export default connect(MapStore, MapDispatch)(App);
