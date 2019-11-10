import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "./logo.svg";
import { getThing } from "./store/actions";
import LoginForm from "./components/Login/LoginForm";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      thing: "thing",
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Code me, Papi!</h1>
          <p>This should say the word thing: {this.state.thing}</p>
          {this.state.isLoggedIn ? (
            <h2>Logged the fuck in my dude!</h2>
          ) : (
            <LoginForm />
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isProcessing: state.isProcessing
  };
};

const mapDispatchToProps = { getThing };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
