import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile } from "../../store/actions";

const initialState = {
  currentValue: "",
  updatedValue: "",
  addingProfile: false,
  updatingEmail: false,
  updatingPassword: false,
  deletingAccount: false,
  account_id: localStorage.getItem("account_id"),
};

const Settings = (props) => {
  const [state, setState] = useState({
    ...initialState,
    // account_id: props.account_id,
  });

  useEffect(() => {
    console.log("props: ", props);
  }, [props]);

  // useEffect(() => {
  //   setState({ ...state, account_id: props.account_id });
  //   console.log("state", state);
  //   if (!state.account_id) {
  //     setState({ ...state, account_id: localStorage.getItem("account_id") });
  //   }
  // }, []);

  const updateState = (event, action) => {
    event.preventDefault();
    setState({ ...initialState, [action]: !state[action] });
  };

  return (
    <div>
      <h2>User settings</h2>
      <NavLink className="give this a classname later that's important" to="/">
        Return Home
      </NavLink>
      <p onClick={(event) => updateState(event, "addingProfile")}>
        Add new profile
      </p>
      {state.addingProfile && (
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            // console.log({
            //   name: state.currentValue,
            //   account_id: state.account_id,
            // });
            props.createProfile({
              name: state.currentValue,
              account_id: state.account_id,
            });
            props.history.push("/");
          }}
        >
          <input
            className="settings-input"
            type="text"
            value={state.currentValue}
            placeholder="New profile name"
            onChange={(event) =>
              setState({ ...state, currentValue: event.target.value })
            }
          />
          <button className="settings-button">Submit</button>
        </form>
      )}
      {/* <p onClick={(event) => updateState(event, "updatingEmail")}>
        Update email address
      </p>
      {state.updatingEmail && (
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(
              "current value: ",
              state.currentValue,
              "updated value: ",
              state.updatedValue
            );
          }}
        >
          <input
            className="settings-input"
            type="text"
            value={state.currentValue}
            placeholder="Current email address"
            onChange={(event) =>
              setState({ ...state, currentValue: event.target.value })
            }
          />
          <input
            className="settings-input"
            type="text"
            value={state.updatedValue}
            placeholder="New email address"
            onChange={(event) =>
              setState({ ...state, updatedValue: event.target.value })
            }
          />
          <button className="settings-button">Submit</button>
        </form>
      )}
      <p onClick={(e) => updateState(e, "updatingPassword")}>Reset password</p>
      {state.updatingPassword && (
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(
              "current value: ",
              state.currentValue,
              "updated value: ",
              state.updatedValue
            );
          }}
        >
          <input
            className="settings-input"
            type="text"
            value={state.currentValue}
            placeholder="New password"
            onChange={(event) =>
              setState({ ...state, currentValue: event.target.value })
            }
          />
          <input
            className="settings-input"
            type="text"
            value={state.updatedValue}
            placeholder="Confirm password"
            onChange={(event) =>
              setState({ ...state, updatedValue: event.target.value })
            }
          />
          <button className="settings-button">Submit</button>
        </form>
      )}
      <p onClick={(e) => updateState(e, "deletingAccount")}>Delete account</p>
      {state.deletingAccount && (
        <form>
          <h3>this will be a model to confirm deletion</h3>
        </form>
      )} */}
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    account_id: loginReducer.account_id,
  };
};

const mapDispatchToProps = { createProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
