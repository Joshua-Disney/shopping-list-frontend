import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addNeed } from "../../store/actions";

const NeedForm = props => {
  const [state, setState] = useState({
    name: "",
    profile_id: props.location.needProps.profile_id,
    is_added: false
  });

  console.log("needs props: ", props);
  console.log("need state: ", state);

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.addNeed(state);
          props.history.push("/");
        }}
      >
        <input
          type="text"
          value={state.name}
          placeholder="Enter new need"
          onChange={event => setState({ ...state, name: event.target.value })}
        />
        <button>Submit</button>
      </form>
      <Link to="/">Return Home</Link>
    </div>
  );
};

const mapDispatchToProps = { addNeed };

export default connect(null, mapDispatchToProps)(NeedForm);
