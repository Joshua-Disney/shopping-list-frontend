import React from "react";
import { connect } from "react-redux";

import { register, login } from "../../store/actions";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
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
        " " +
        this.state.password +
        " " +
        this.state.confirmPassword
    );
  };

  handleRegister = (event, banana) => {
    event.preventDefault();
    console.log("event: ", event);
    console.log("state: ", { banana });

    // register()
  };

  render() {
    return (
      <div>
        <form
          onSubmit={
            event => {
              event.preventDefault();
              this.props.register({
                email: this.state.email,
                password: this.state.password
              });
            }
            //   event => {
            //     this.handleRegister(event, {
            //       email: this.state.email,
            //       password: this.state.password
            //     });
            //   }
          }
        >
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password..."
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password..."
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <button type="submit">Register</button>
          </div>
        </form>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.login({
              email: this.state.email,
              password: this.state.password
            });
          }}
        >
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password..."
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password..."
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { register, login };

export default connect(null, mapDispatchToProps)(LoginForm);
