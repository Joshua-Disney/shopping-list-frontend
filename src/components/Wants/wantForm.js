import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addWant } from "../../store/actions";

const WantForm = props => {
  const [state, setState] = useState({
    name: "",
    profile_id: props.location.wantProps.profile_id,
    is_added: false
  });

  console.log("wants props: ", props);

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.addWant(state);
          props.history.push("/");
        }}
      >
        <input
          type="text"
          value={state.name}
          placeholder="Enter new want"
          onChange={event => setState({ ...state, name: event.target.value })}
        />
        <button>Submit</button>
      </form>
      <Link to="/">Return Home</Link>
    </div>
  );
};

const mapDispatchToProps = { addWant };

export default connect(null, mapDispatchToProps)(WantForm);
