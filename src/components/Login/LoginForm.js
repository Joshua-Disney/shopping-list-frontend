import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { register, login, welcomeBack } from "../../store/actions";

const LoginForm = props => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    loggingIn: true,
    loading: false
  });

  const [token] = useState(() => {
    return localStorage.getItem("token");
  });

  useEffect(() => {
    // console.log("rendering");
    if (token) {
      props.welcomeBack();
    }
  }, []);

  useEffect(() => {
    if (props.isLoggedIn) {
      props.history.push("/");
    }
  }, [props.isLoggedIn, props.history]);

  // console.log("state: ", state);
  // console.log("props: ", props);
  // console.log("token: ", token);

  const handleChange = event => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(
      "A name was submitted: " +
        state.email +
        " " +
        state.password +
        " " +
        state.confirmPassword
    );
  };

  return (
    <div className="login-container">
      {state.loading ? (
        <div>
          <h3>.......Loading.......</h3>
        </div>
      ) : state.loggingIn ? (
        <div className="login-form">
          <form
            onSubmit={
              // handleSubmit
              event => {
                event.preventDefault();
                props.login({
                  email: state.email,
                  password: state.password
                });
                setState({ ...state, loading: true });
              }
            }
          >
            <div className="input-fields">
              <input
                className="input-field"
                type="text"
                name="email"
                placeholder="Email..."
                value={state.email}
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
              {/* <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password..."
                value={state.confirmPassword}
                onChange={handleChange}
              /> */}
              <button className="input-button" type="submit">
                Login
              </button>
            </div>
          </form>
          <p>Don't have an account?</p>
          <button
            className="input-button"
            onClick={event => {
              event.preventDefault();
              setState({ ...state, loggingIn: false });
            }}
          >
            Register here.
          </button>
        </div>
      ) : (
        <div className="login-form">
          <form
            onSubmit={
              // handleSubmit
              event => {
                event.preventDefault();
                props.register({
                  email: state.email,
                  password: state.password
                });
                setState({ ...state, loading: true });
                props.login({
                  email: state.email,
                  password: state.password
                });
              }
            }
          >
            <div className="input-fields">
              <input
                className="input-field"
                type="text"
                name="email"
                placeholder="Email..."
                value={state.email}
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
              {/* <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password..."
                value={state.confirmPassword}
                onChange={handleChange}
              /> */}
              <button className="input-button" type="submit">
                Register
              </button>
            </div>
          </form>
          <p>Already have an account?</p>
          <button
            className="input-button"
            onClick={event => {
              event.preventDefault();
              setState({ ...state, loggingIn: true });
            }}
          >
            Log in here.
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoggedIn: loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = { register, login, welcomeBack };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// Make email and password text boxes responsive
