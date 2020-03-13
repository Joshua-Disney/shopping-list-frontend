import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getThing, logout, getAccount } from "../../store/actions";

import Account from "../Accounts/account";
import Profile from "../Profiles/profile";

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
    <section className="app-main">
      {props.account.id > 0 ? (
        <div>
          {/* <Account account={props.account} /> */}
          {props.account.profiles.map(profile => {
            return <Profile key={profile.id} profile={profile} />;
          })}
          <Link className="add-list-button" to="/add-profile">
            Create New profile
          </Link>
        </div>
      ) : (
        <div>
          <p>Something went wrong. Please log out and log back in.</p>
        </div>
      )}
      <button
        className="logout-button"
        onClick={event => {
          event.preventDefault();
          props.logout(props);
        }}
      >
        Log out
      </button>
    </section>
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
