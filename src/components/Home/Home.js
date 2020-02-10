import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getThing, logout, getAccount } from "../../store/actions";

import Account from "../Accounts/account";

const Home = props => {
  useEffect(() => {
    console.log("grabbing account info");
    let account_id = props.account_id;
    if (!account_id) {
      account_id = localStorage.getItem("account_id");
    }
    if (account_id > 0) {
      props.getAccount(account_id);
    }
  }, [props.account_id]);

  console.log("account props: ", props.account);
  return (
    <div className="App-header">
      {props.account.id > 0 ? (
        <header>
          <Account account={props.account} />
          <Link to="/add-profile">Create New profile</Link>
        </header>
      ) : (
        <div>
          <p>Something went wrong. Please log out and log back in.</p>
        </div>
      )}
      <button
        onClick={event => {
          event.preventDefault();
          props.logout(props);
        }}
      >
        Log out
      </button>
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
