import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import logo from "../../logo.svg";
import { getThing, logout, getAccount } from "../../store/actions";

import Account from "../Accounts/account";

const Home = props => {
  useEffect(() => {
    console.log("grabbing account info");
    // console.log("account: ", props.account);
    if (props.account_id > 0) {
      props.getAccount(props.account_id);
    }
  }, [props.account_id]);

  console.log("account props: ", props.account);
  return (
    <div>
      <div>
        {props.account.id > 0 ? (
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <h1>Code me, Disney!</h1> */}
            <Account account={props.account} />
            {/* <p>This should say the word thing: {props.thing}</p>
            <div>
              <h2>Logged the F in my dude!</h2>
            </div> */}
            <button
              onClick={event => {
                event.preventDefault();
                props.logout(props);
              }}
            >
              Log out
            </button>
          </header>
        ) : (
          <div>
            <h3>.......Loading</h3>
            <button
              onClick={event => {
                event.preventDefault();
                props.logout(props);
              }}
            >
              Log out
            </button>
          </div>
        )}
      </div>
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

const mapDispatchToProps = { getThing, logout, getAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
