import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { register, login, welcomeBack } from "../../store/actions";
import LoginInput from "../../ui/LoginInput";

const LoginForm = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    loggingIn: true,
    loading: false,
    isEmail: true,
    isConfirmed: true,
  });

  const token = useMemo(() => {
    return localStorage.getItem("token");
  }, []);

  useEffect(() => {
    if (token) {
      props.welcomeBack();
    }
  }, []);

  useEffect(() => {
    setState({ ...state, loading: props.isLoading });
  }, [props.isLoading]);

  useEffect(() => {
    if (props.isRegistered) {
      props.login({
        email: state.email,
        password: state.password,
      });
    }
  }, [props.isRegistered]);

  useEffect(() => {
    if (props.isLoggedIn) {
      props.history.push("/");
    }
  }, [props.isLoggedIn, props.history]);

  const checkValidEmail = (event) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setState({ ...state, isEmail: event.target.value.match(emailRegex) });
  };

  useEffect(() => {
    if (state.confirmPassword.length >= 1) {
      setState({
        ...state,
        isConfirmed: state.password === state.confirmPassword,
      });
    }
  }, [state.password, state.confirmPassword]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return state.loading ? (
    <div>
      <h3>.......Loading.......</h3>
    </div>
  ) : state.loggingIn ? (
    <section className="sm:mx-auto sm:w-full sm:max-w-md">
      <h1 className="font-semibold text-5xl text-center tracking-tight mb-4 text-green-700">
        Shopping / Wish List
      </h1>
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.login({
              email: state.email,
              password: state.password,
            });
            // setState({ ...state, loading: true });
          }}
        >
          <div>
            <LoginInput
              id="email"
              type="text"
              name="email"
              value={state.email.toLowerCase().trim()}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <LoginInput
              className="password"
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                disabled={!(!!state.email && !!state.password)}
                className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white disabled:opacity-50 bg-green-600 focus:outline-none transition duration-150 ease-in-out ${
                  state.email && state.password
                    ? "hover:bg-green-500 focus:border-green-700 focus:shadow-outline-green active:bg-green-700"
                    : "cursor-not-allowed"
                }`}
              >
                Login
              </button>
            </span>
          </div>
        </form>
        <div className="text-sm mt-5">
          <span className="block leading-5 text-gray-900">
            Don't have an account?
          </span>
          <button
            className="font-medium text-green-600 hover:text-green-400 focus:outline-none focus:underline transition ease-in-out duration-150"
            onClick={(event) => {
              event.preventDefault();
              setState({ ...state, loggingIn: false });
            }}
          >
            Register here
          </button>
        </div>
      </div>
    </section>
  ) : (
    <section className="sm:mx-auto sm:w-full sm:max-w-md">
      <h1 className="font-semibold text-5xl text-center tracking-tight mb-4 text-green-700">
        Shopping / Wish List
      </h1>
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="input-fields"
          onSubmit={(event) => {
            event.preventDefault();
            props.register({
              email: state.email,
              password: state.password,
            });
            // setState({ ...state, loading: true });
          }}
        >
          <div>
            <LoginInput
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
              onBlur={checkValidEmail}
            />
          </div>
          <div className="mt-6">
            <LoginInput
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <LoginInput
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button
              className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white disabled:opacity-50 bg-green-600 focus:outline-none transition duration-150 ease-in-out ${
                state.email &&
                state.confirmPassword &&
                state.isEmail &&
                state.isConfirmed
                  ? "hover:bg-green-500 focus:border-green-700 focus:shadow-outline-green active:bg-green-700"
                  : "cursor-not-allowed"
              }`}
              disabled={
                !(
                  !!state.email &&
                  !!state.confirmPassword &&
                  !!state.isEmail &&
                  !!state.isConfirmed
                )
              }
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-sm mt-5">
          <span className="block leading-5 text-gray-900">
            Already have an account?
          </span>
          <button
            className="font-medium text-green-600 hover:text-green-400 focus:outline-none focus:underline transition ease-in-out duration-150"
            onClick={(event) => {
              event.preventDefault();
              setState({ ...state, loggingIn: true });
            }}
          >
            Login here
          </button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoggedIn: loginReducer.isLoggedIn,
    isRegistered: loginReducer.isRegistered,
    isLoading: loginReducer.isLoading,
  };
};

const mapDispatchToProps = { register, login, welcomeBack };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// Make email and password text boxes responsive
