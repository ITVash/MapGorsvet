import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
//import GoogleMaps from './Components/Google-maps';
import { LoginForm } from './Modules';


function App() {
  return (
    <div className="App">
      <Fragment>
      {/*<GoogleMaps></GoogleMaps>*/}
        <LoginForm />
      </Fragment>
    </div>
  );
}

export default App;
