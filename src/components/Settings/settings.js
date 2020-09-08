import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile, updateAccount } from "../../store/actions";
import { H3 } from "../../ui/Titles";

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

  const checkValidEmail = (event) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setState({ ...state, isEmail: event.target.value.match(emailRegex) });
  };

  const updateState = (event, action) => {
    event.preventDefault();
    setState({ ...initialState, [action]: !state[action] });
  };

  useEffect(() => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (state.updatedValue > 1) {
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
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <H3 className="">User settings</H3>
      <div className="flex">
        <nav className="cursor-pointer w-1/5 m-4">
          <NavLink
            className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            to="/"
          >
            Return Home
          </NavLink>
          <p
            className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            onClick={(event) => updateState(event, "addingProfile")}
          >
            Add new profile
          </p>

          <p
            className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            onClick={(event) => updateState(event, "updatingEmail")}
          >
            Update email address
          </p>

          {/* <p onClick={(e) => updateState(e, "updatingPassword")}>Reset password</p>
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
        </nav>
        {state.addingProfile && (
          <form
            className="w-4/5"
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
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add new profile
            </h3>
            <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>Add a new profile to your account.</p>
            </div>
            <div className="mt-5 sm:flex sm:items-center">
              <div className="max-w-xs w-full">
                <label for="email" className="sr-only">
                  Profile name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="John Doe's profile"
                    value={state.currentValue}
                    onChange={(event) =>
                      setState({ ...state, currentValue: event.target.value })
                    }
                  />
                </div>
              </div>
              <span className="mt-3 inline-flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150 sm:w-auto sm:text-sm sm:leading-5"
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        )}
        {state.updatingEmail && (
          <form
            className="w-4/5"
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
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Update Email address
            </h3>
            <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>Update your current email address</p>
            </div>
            <div className="mt-5 flex flex-col md:flex-row flex-wrap sm:items-center">
              <div className="max-w-xs w-full mr-2">
                <label for="email">Email address</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="example@example.com"
                    value={state.currentValue}
                    onChange={(event) =>
                      setState({ ...state, currentValue: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="max-w-xs mt-2 lg:mt-0 w-full">
                <label for="email">Updated Email address</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="example@example.com"
                    value={state.currentValue}
                    onChange={(event) =>
                      setState({ ...state, updatedValue: event.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="display flex w-full justify-end mt-3">
            <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={
                    !(
                      !!state.currentValue &&
                      !!state.updatedValue &&
                      !!state.isEmail
                    )
                  }
                  className="px-4 py-2 border border-transparent font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150 w-auto text-sm leading-5"
                >
                  Submit
                </button>
              </span>
              </div>
          </form>
        )}
      </div>
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
