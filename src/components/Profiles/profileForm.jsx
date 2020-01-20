import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile } from "../../store/actions";

const ProfileForm = props => {
  return (
    <div>
      <h1>This will be a form</h1>
      <h3>Account id: {props.account_id}</h3>
      <Link to="/">Return Home</Link>
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    account_id: loginReducer.account_id
  };
};

const mapDispatchToProps = { createProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
