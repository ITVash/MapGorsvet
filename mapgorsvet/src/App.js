import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
//import GoogleMaps from './Components/Google-maps';
import { LoginForm, RegisterForm } from './Modules';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Fragment>
      {/*<GoogleMaps></GoogleMaps>*/}
        <Route exact path={["/", "/login"]} component={ LoginForm } />
        <Route path="/register" component={ RegisterForm } />
      </Fragment>
    </div>
  );
}

export default App;
