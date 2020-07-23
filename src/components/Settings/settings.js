import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Settings = (props) => {
  const [state, setState] = useState({
    updatingEmail: false,
    updatingPassword: false,
    deletingAccount: false,
  });

  useEffect(() => {
    console.log("This is the settings page.");
  }, []);

  useEffect(() => {
    console.log("changed state", state);
  }, [state]);

  const updateState = (event, action) => {
    console.log("action", action);
    event.preventDefault();
    setState({ ...state, [action]: !state[action] });
  };

  return (
    <div>
      <h2>This is the settings page! :D</h2>
      <NavLink className="nav-item" to="/">
        Return Home
      </NavLink>
      <p onClick={(e) => updateState(e, "updatingEmail")}>
        Update email address
      </p>
      {state.updatingEmail && (
        <form>
          <h3>this will be a form</h3>
        </form>
      )}
      <p onClick={(e) => updateState(e, "updatingPassword")}>Reset password</p>
      {state.updatingPassword && (
        <form>
          <h3>this will be a form</h3>
        </form>
      )}
      <p onClick={(e) => updateState(e, "deletingAccount")}>Delete account</p>
      {state.deletingAccount && (
        <form>
          <h3>this will be a form</h3>
        </form>
      )}
    </div>
  );
};

export default Settings;
