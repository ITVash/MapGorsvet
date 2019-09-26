import React, { useEffect } from 'react';
//import { auth } from './../../redux/action';
import { connect } from 'react-redux';

import { LoginForm } from './../../Modules';
const AuthContainer = (props) => {
  const { items } = props;
  console.log(items);
  
  return (
    <LoginForm set={props.setAuth} />
  )
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
export default connect(({ auth }) => auth, MapDispatch)(AuthContainer);
