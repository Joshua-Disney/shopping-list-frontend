import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import logo from "../../logo.svg";
import { getThing, logout } from "../../store/actions";

import Account from "../Accounts/account";

const Home = props => {
  return (
    <div>
      {props.account ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Code me, Disney!</h1>
          <Account />
          <p>This should say the word thing: {props.thing}</p>
          <div>
            <h2>Logged the F in my dude!</h2>
            <button
              onClick={event => {
                event.preventDefault();
                props.logout(props);
              }}
            >
              Log out
            </button>
          </div>
        </header>
      ) : (
        <h3>.......Loading</h3>
      )}
    </div>
  );
};

const mapStateToProps = ({ accountReducer, loginReducer, thingReducer }) => {
  return {
    account: accountReducer.account,
    account_id: loginReducer.account_id,
    isLoggedIn: loginReducer.isLoggedIn,
    thing: thingReducer.thing
  };
};

const mapDispatchToProps = { getThing, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
