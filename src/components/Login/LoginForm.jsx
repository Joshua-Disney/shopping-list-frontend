import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "this will be a second password"
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(
      "A name was submitted: " +
        this.state.email +
        this.state.password +
        this.state.confirmPassword
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password..."
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
