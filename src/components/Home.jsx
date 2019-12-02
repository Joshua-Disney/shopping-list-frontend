import React from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import LoginForm from "./Login/LoginForm";
import { getThing, logout } from "../store/actions";

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Code me, Papi!</h1>
          <p>This should say the word thing: {this.props.thing}</p>
          {this.props.isLoggedIn ? (
            <div>
              <h2>Logged the fuck in my dude!</h2>
              <button
                onClick={event => {
                  event.preventDefault();
                  this.props.logout();
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <LoginForm />
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer, thingReducer }) => {
  return {
    isLoggedIn: loginReducer.isLoggedIn,
    thing: thingReducer.thing
  };
};

const mapDispatchToProps = { getThing, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
