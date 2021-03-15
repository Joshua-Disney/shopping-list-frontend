import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  createUser,
  deleteUser,
  updateUser,
  createProfile,
  updateAccount,
  deleteAccount,
} from "../../store/actions";
import Modal from "../modal";
import { H3 } from "../../ui/Titles";
import useWindowSize from "../Helpers/useWindowSize";

import Toast from "../toast";

const initialState = {
  newUserEmail: "",
  currentValue: "",
  updatedValue: "",
  addingList: false,
  updatingEmail: false,
  updatingPassword: false,
  managingUsers: false,
  deletingAccount: false,
  generalAccountSettings: false,
  isEmail: false,
};

const Settings = (props) => {
  const [state, setState] = useState({
    ...initialState,
  });

  useEffect(() => {
    console.log("props: ", props);
  }, [props]);

  const isScreenSmall = useWindowSize() <= 680;

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

  const hideModal = () => {
    setState({ ...state, deletingAccount: false });
  };

  console.log(!!state.currentValue, !!state.updatedValue, !!state.isEmail);

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <Toast isToastTime={props.status !== null}>
        <p>{props.message}</p>
      </Toast>
      <H3 className="pb-2">User settings</H3>
      <div className="flex">
        <nav className={`cursor-pointer w-1/5 ${isScreenSmall ? "" : "m-4"}`}>
          <NavLink
            className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            to="/"
          >
            Return Home
          </NavLink>
          <p
            className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            onClick={(event) => updateState(event, "addingList")}
          >
            Add new List
          </p>

          {/* <p
            className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            onClick={(event) => updateState(event, "updatingEmail")}
          >
            Update email address
          </p>

          <p
            className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            onClick={(event) => updateState(event, "updatingPassword")}
          >
            Update password
          </p> */}

          <p
            className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            onClick={(event) => updateState(event, "managingUsers")}
          >
            Manage users
          </p>

          <p
            className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            onClick={(event) => updateState(event, "generalAccountSettings")}
          >
            General Account Settings
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
      {/* {state.deletingAccount && (
        <form>
          <h3>this will be a model to confirm deletion</h3>
        </form>
      )} */}
          <Modal
            showModal={state.deletingAccount}
            handleClose={hideModal}
          ></Modal>
        </nav>
        {state.addingList && (
          <form
            className={`w-4/5 ${isScreenSmall ? "p-4" : ""}`}
            onSubmit={(event) => {
              event.preventDefault();
              // console.log({
              //   name: state.currentValue,
              //   account_id: state.account_id,
              // });
              props.createProfile({
                name: state.currentValue,
                account_id: props.account_id,
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
            className={`w-4/5 ${isScreenSmall ? "p-4" : ""}`}
            onSubmit={(event) => {
              event.preventDefault();
              console.log(
                "account_id: ",
                props.account_id,
                "updated value: ",
                state.updatedValue
              );
              props.updateAccount(props.account_id, {
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
              <div className="max-w-xs mt-2 lg:mt-0 w-full">
                <label for="email">Updated Email address</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="example@example.com"
                    value={state.updatedValue}
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
                  disabled={!(!!state.updatedValue && !!state.isEmail)}
                  className={`px-4 py-2 border border-transparent font-medium rounded-md text-white bg-green-600 ${
                    !!state.updatedValue && !!state.isEmail
                      ? "hover:bg-green-500"
                      : "pointer-events-none"
                  } focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150 w-auto text-sm leading-5 disabled:opacity-75`}
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        )}
        {state.updatingPassword && (
          <form
            className={`w-4/5 ${isScreenSmall ? "p-4" : ""}`}
            onSubmit={(event) => {
              event.preventDefault();
              console.log(
                "account_id: ",
                props.account_id,
                "updated value: ",
                state.updatedValue
              );
              props.updateAccount(props.account_id, {
                password: state.updatedValue,
              });
            }}
          >
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Update Password
            </h3>
            <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>Update your current password</p>
            </div>
            <div className="mt-5 flex flex-col md:flex-row flex-wrap sm:items-center">
              <div className="max-w-xs w-full mr-2">
                <label for="password">Current Password</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="password"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="password1234"
                    value={state.currentValue}
                    onChange={(event) =>
                      setState({ ...state, currentValue: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="max-w-xs mt-2 lg:mt-0 w-full">
                <label for="email">Updated Password</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="password"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="password1234"
                    value={state.updatedValue}
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
                      state.currentValue !== state.updatedValue
                    )
                  }
                  className={`px-4 py-2 border border-transparent font-medium rounded-md text-white bg-green-600 ${
                    !!state.currentValue &&
                    !!state.updatedValue &&
                    state.currentValue !== state.updatedValue
                      ? "hover:bg-green-500"
                      : "pointer-events-none"
                  } focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150 w-auto text-sm leading-5 disabled:opacity-75`}
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        )}
        {state.managingUsers && (
          <form
            className={`w-4/5 ${isScreenSmall ? "p-4" : ""}`}
            onSubmit={(event) => {
              event.preventDefault();
              console.log("fill this in when I know what I want to look at");
              props.createUser({
                email: state.newUserEmail,
                password: state.updatedValue,
                account_id: props.account_id,
              });
              setState({ ...initialState });
            }}
          >
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Manage Users
            </h3>
            <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                Add a new user. <br />
                Users on your account will be able to log in with their own
                emails and passwords and still access all your lists.
              </p>
            </div>
            <div className="mt-5 flex flex-col md:flex-row flex-wrap sm:items-center">
              <div className="max-w-xs w-full mr-2">
                <label>New User Email</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="youremail@website.com"
                    value={state.newUserEmail}
                    onChange={(event) =>
                      setState({ ...state, newUserEmail: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="max-w-xs mt-2 lg:mt-0 w-full">
                <label>New User Password</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="password"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="password1234"
                    value={state.currentValue}
                    onChange={(event) =>
                      setState({ ...state, currentValue: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="max-w-xs mt-2 lg:mt-0 w-full">
                <label>Confirm Password</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="password"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="password1234"
                    value={state.updatedValue}
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
                      !!state.newUserEmail &&
                      !!state.currentValue &&
                      !!state.updatedValue &&
                      state.currentValue === state.updatedValue
                    )
                  }
                  className={`px-4 py-2 border border-transparent font-medium rounded-md text-white bg-green-600 ${
                    !!state.newUserEmail &&
                    !!state.currentValue &&
                    !!state.updatedValue &&
                    state.currentValue === state.updatedValue
                      ? "hover:bg-green-500"
                      : "pointer-events-none"
                  } focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150 w-auto text-sm leading-5 disabled:opacity-75`}
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        )}
        {state.generalAccountSettings && (
          <form
            className={`w-4/5 ${isScreenSmall ? "p-4" : ""}`}
            onSubmit={(event) => {
              event.preventDefault();
              console.log("fill this in when I know what I want to look at");

              // TODO: @DISNEY THIS NEEDS TO BE A THING
              props.updateUser({
                ...(state.newUserEmail && { email: state.newUserEmail }),
                ...(state.updatedValue && { password: state.updatedValue }),
                userId: props.user_id,
              });
            }}
          >
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Update Account Settings
            </h3>
            <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                Update Account Settings. <br />
                Update email address and password
              </p>
            </div>
            <div className="mt-5 flex flex-col md:flex-row flex-wrap sm:items-center">
              <div className="max-w-xs w-full mr-2">
                <label>Update Email</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="youremail@website.com"
                    value={state.newUserEmail}
                    onChange={(event) =>
                      setState({ ...state, newUserEmail: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="max-w-xs mt-2 lg:mt-0 w-full">
                <label>Update Password</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="password"
                    autoComplete="new-password"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="password1234"
                    value={state.currentValue}
                    onChange={(event) =>
                      setState({ ...state, currentValue: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="max-w-xs mt-2 lg:mt-0 w-full">
                <label>Confirm Password</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="password"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="password1234"
                    value={state.updatedValue}
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
                      !!state.newUserEmail &&
                      (state.currentValue
                        ? !!state.currentValue &&
                          !!state.updatedValue &&
                          state.currentValue === state.updatedValue
                        : true)
                    )
                  }
                  className={`px-4 py-2 border border-transparent font-medium rounded-md text-white bg-green-600 ${
                    !!state.newUserEmail ||
                    (state.currentVlue
                      ? !!state.currentValue &&
                        !!state.updatedValue &&
                        state.currentValue === state.updatedValue
                      : true)
                      ? "hover:bg-green-500"
                      : "pointer-events-none"
                  } focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150 w-auto text-sm leading-5 disabled:opacity-75`}
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

const mapStateToProps = ({ loginReducer, userReducer }) => {
  return {
    account_id:
      loginReducer.account_id || localStorage.getItem("account_id") || "",
    user_id: loginReducer.user_id || localStorage.getItem("user_id"),
    users: userReducer.users,
    status: userReducer.status,
    message: userReducer.message,
  };
};

const mapDispatchToProps = {
  createProfile,
  updateAccount,
  updateUser,
  deleteAccount,
  createUser,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
