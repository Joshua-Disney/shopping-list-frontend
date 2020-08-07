import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { register, login, welcomeBack } from "../../store/actions";

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
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-container">
      {state.loading ? (
        <div>
          <h3>.......Loading.......</h3>
        </div>
      ) : state.loggingIn ? (
        <section className="login-width-container">
          <h1 className="title">DizList</h1>
          <div className="login-form">
            <form
              className="input-fields"
              onSubmit={(event) => {
                event.preventDefault();
                props.login({
                  email: state.email,
                  password: state.password,
                });
                // setState({ ...state, loading: true });
              }}
            >
              <input
                className="input-field"
                type="text"
                name="email"
                placeholder="Email..."
                value={state.email.toLowerCase().trim()}
                onChange={handleChange}
              />
              <input
                className="input-field"
                type="password"
                name="password"
                placeholder="Password..."
                value={state.password}
                onChange={handleChange}
              />
              <button
                className="input-button"
                disabled={!(!!state.email && !!state.password)}
                type="submit"
              >
                Login
              </button>
            </form>
            <p>Don't have an account?</p>
            <button
              className="input-button"
              onClick={(event) => {
                event.preventDefault();
                setState({ ...state, loggingIn: false });
              }}
            >
              Register here
            </button>
          </div>
        </section>
      ) : (
        <section className="login-width-container">
          <h1 className="title">DizList</h1>
          <div className="login-form">
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
              <input
                className={`input-field ${
                  state.isEmail ? "" : "invalid-input"
                }`}
                type="text"
                name="email"
                placeholder="Please enter a valid email address"
                value={state.email}
                onChange={handleChange}
                onBlur={checkValidEmail}
              />
              <input
                className="input-field"
                type="password"
                name="password"
                placeholder="Password..."
                value={state.password}
                onChange={handleChange}
              />
              <input
                className={`input-field ${
                  state.isConfirmed ? "" : "invalid-input"
                }`}
                type="password"
                name="confirmPassword"
                placeholder="Confirm password..."
                value={state.confirmPassword}
                onChange={handleChange}
              />
              <button
                className="input-button"
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
            </form>
            <p>Already have an account?</p>
            <button
              className="input-button"
              onClick={(event) => {
                event.preventDefault();
                setState({ ...state, loggingIn: true });
              }}
            >
              Login here
            </button>
          </div>
        </section>
      )}
    </div>
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
