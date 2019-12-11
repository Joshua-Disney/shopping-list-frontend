import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { register, login } from "../../store/actions";

const LoginForm = props => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [token] = useState(() => {
    return localStorage.getItem("token");
  });
  useEffect(() => {
    console.log("rendering");
    if (token) {
      props.history.push("/home");
    }
  }, []);
  console.log("state: ", state);
  console.log("props: ", props);
  console.log("token: ", token);

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
    <div>
      <form
        onSubmit={
          handleSubmit
          // event => {
          //   event.preventDefault();
          //   props.register({
          //     email: state.email,
          //     password: state.password
          //   });
          // }
        }
      >
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            value={state.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={state.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password..."
            value={state.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
      </form>
      <form
        onSubmit={
          handleSubmit
          //   event => {
          //   event.preventDefault();
          //   props.login({
          //     email: state.email,
          //     password: state.password
          //   });
          // }
        }
      >
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            value={state.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={state.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password..."
            value={state.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = { register, login };

export default connect(null, mapDispatchToProps)(LoginForm);
