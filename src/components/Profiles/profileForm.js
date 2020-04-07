import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile } from "../../store/actions";

const ProfileForm = (props) => {
  const [state, setState] = useState({
    name: "",
    account_id: props.account_id,
  });

  return (
    <container className="form-container">
      <section className="form-section">
        <form
          className="actual-form"
          onSubmit={(event) => {
            event.preventDefault();
            props.createProfile(state);
            props.history.push("/");
          }}
        >
          <input
            className="form-input"
            type="text"
            value={state.name}
            placeholder="Enter new profile Name"
            onChange={(event) =>
              setState({ ...state, name: event.target.value })
            }
          />
          <button className="form-button">Submit</button>
        </form>
        <Link className=" form-button form-link" to="/">
          Cancel
        </Link>
      </section>
    </container>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    account_id: loginReducer.account_id,
  };
};

const mapDispatchToProps = { createProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
