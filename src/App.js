import React, { Component } from "react";

import LoginForm from "./components/Login/LoginForm";
import logo from "./logo.svg";
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

export default App;
