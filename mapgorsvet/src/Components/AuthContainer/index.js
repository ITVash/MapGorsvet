import React from 'react';
//import { auth } from './../../redux/action';
import { connect } from 'react-redux';

import { LoginForm } from './../../Modules';
const AuthContainer = (props) => {
  const { items, isAuth } = props;
  console.log(props);
  
  return (
    <LoginForm login={isAuth} set={props.setAuth} />
  )
}

const MapDispatch = dispatch => ({
  setAuth: auth => dispatch({
    type: 'AUTH_SET_FORM',
    payload: auth
  })
});
export default connect(({ auth }) => auth, MapDispatch)(AuthContainer);
