import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile } from "../../store/actions";

const ProfileForm = props => {
  const [state, setState] = useState({
    name: "",
    account_id: props.account_id
  });

  function doAThing(event) {
    event.preventDefault();
    console.log("profile: ", state);
  }

  console.log("profile form props: ", props);

  return (
    <div>
      <h1>This will be a form</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.createProfile(state);
          props.history.push("/");
        }}
      >
        <input
          type="text"
          value={state.name}
          placeholder="Enter new profile Name"
          onChange={event => setState({ ...state, name: event.target.value })}
        />
        <button>Submit</button>
      </form>
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
