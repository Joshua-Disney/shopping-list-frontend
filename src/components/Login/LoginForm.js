import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { register, login, welcomeBack } from "../../store/actions";

const LoginForm = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    loggingIn: true,
    loading: false,
  });

  const [token] = useState(() => {
    return localStorage.getItem("token");
  });

  useEffect(() => {
    if (token) {
      props.welcomeBack();
    }
  }, []);

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

  const handleChange = (event) => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {  <============================  For testing purposes
  //   event.preventDefault();
  //   alert(
  //     "A name was submitted: " +
  //       state.email +
  //       " " +
  //       state.password +
  //       " " +
  //       state.confirmPassword
  //   );
  // };

  return (
    <div className="login-container">
      {state.loading ? (
        <div>
          <h3>.......Loading.......</h3>
        </div>
      ) : state.loggingIn ? (
        <container className="login-width-container">
          <h1 className="title">Shopping / Wish List</h1>
          <div className="login-form">
            <form
              className="input-fields"
              onSubmit={(event) => {
                event.preventDefault();
                props.login({
                  email: state.email,
                  password: state.password,
                });
                setState({ ...state, loading: true });
              }}
            >
              {/* <div className="input-fields"> */}
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
              {/* </div> */}
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
        </container>
      ) : (
        <container className="login-width-container">
          <h1 className="title">Shopping / Wish List</h1>
          <div className="login-form">
            <form
              className="input-fields"
              onSubmit={
                // handleSubmit
                (event) => {
                  event.preventDefault();
                  props.register({
                    email: state.email,
                    password: state.password,
                  });
                  setState({ ...state, loading: true });
                }
              }
            >
              {/* <div className="input-fields"> */}
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
              {/* </div> */}
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
        </container>
      )}
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoggedIn: loginReducer.isLoggedIn,
    isRegistered: loginReducer.isRegistered,
  };
};

const mapDispatchToProps = { register, login, welcomeBack };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// Make email and password text boxes responsive
