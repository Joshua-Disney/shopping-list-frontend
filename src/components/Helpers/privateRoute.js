import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  console.log("Protected route login state: ", isLoggedIn);

  if (isLoggedIn) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Redirect to="/login" />;
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoggedIn: loginReducer.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);
