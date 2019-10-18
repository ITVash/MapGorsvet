import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

let mapStateIsProps = (state) => ({
  isAuth: state.auth.isAuth
  
});

export const authHoc = (Component) => {
  const withAuthHoc = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />
    return <Component {...props} />
  }

  let withRedirectAuthHoc = connect(mapStateIsProps)(withAuthHoc);
  return withRedirectAuthHoc;
}

//export default AuthHoc;