import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile, updateAccount } from "../../store/actions";

const initialState = {
  currentValue: "",
  updatedValue: "",
  addingProfile: false,
  updatingEmail: false,
  updatingPassword: false,
  deletingAccount: false,
  isEmail: false,
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

  // const checkValidEmail = (event) => {
  //   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   setState({ ...state, isEmail: event.target.value.match(emailRegex) });
  // };

  const updateState = (event, action) => {
    event.preventDefault();
    setState({ ...initialState, [action]: !state[action] });
  };

  useEffect(() => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (state.updatedValue.length > 1) {
      setState({ ...state, isEmail: !!state.updatedValue.match(emailRegex) });
    }
    console.log(
      "state: ",
      !!state.updatedValue.match(emailRegex),
      state.updatedValue,
      state,
      !(!!state.currentValue && !!state.updatedValue && !!state.isEmail)
    );
  }, [state.updatedValue]);

  console.log(!!state.currentValue, !!state.updatedValue, !!state.isEmail);

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
      <p onClick={(event) => updateState(event, "updatingEmail")}>
        Update email address
      </p>
      {state.updatingEmail && (
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(
              "account_id: ",
              state.account_id,
              "updated value: ",
              state.updatedValue
            );
            props.updateAccount(state.account_id, {
              email: state.updatedValue,
            });
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
            className={`input-field ${state.isEmail ? "" : "invalid-input"}`}
            type="text"
            value={state.updatedValue}
            placeholder="New email address"
            onChange={(event) => {
              setState({ ...state, updatedValue: event.target.value });
            }}
          />
          <button
            className="settings-button"
            disabled={
              !(!!state.currentValue && !!state.updatedValue && !!state.isEmail)
            }
          >
            Submit
          </button>
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
      )}
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    account_id: loginReducer.account_id,
  };
};

const mapDispatchToProps = { createProfile, updateAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
