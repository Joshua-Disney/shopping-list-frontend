import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addWant } from "../../store/actions";

const WantForm = (props) => {
  const [state, setState] = useState({
    name: "",
    profile_id: props.location.wantProps.profile_id,
    is_added: false,
  });

  return (
    <container className="form-container">
      <section className="form-section">
        <form
          className="actual-form"
          onSubmit={(event) => {
            event.preventDefault();
            props.addWant(state);
            props.history.push("/");
          }}
        >
          <input
            className="form-input"
            type="text"
            value={state.name}
            placeholder="Enter new want"
            onChange={(event) =>
              setState({ ...state, name: event.target.value })
            }
          />
          <button className="form-button">Submit</button>
        </form>
        <Link className="form-button form-link" to="/">
          Cancel
        </Link>
      </section>
    </container>
  );
};

const mapDispatchToProps = { addWant };

export default connect(null, mapDispatchToProps)(WantForm);
