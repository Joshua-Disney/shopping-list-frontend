import React from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import LoginForm from "./Login/LoginForm";
import { getThing } from "../store/actions";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Code me, Papi!</h1>
          <p>This should say the word thing: {this.props.thing}</p>
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

const mapStateToProps = ({ thingReducer }) => {
  return {
    thing: thingReducer.thing
  };
};

const mapDispatchToProps = { getThing };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
