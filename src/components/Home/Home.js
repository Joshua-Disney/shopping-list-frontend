import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { getThing, logout, getAccount } from "../../store/actions";

import Profile from "../Profiles/profile";

const Home = (props) => {
  const [displayMenu, setDisplayMenu] = useState(true);
  useEffect(() => {
    let account_id = props.account_id;
    if (!account_id) {
      account_id = localStorage.getItem("account_id");
    }
    if (account_id > 0) {
      props.getAccount(account_id);
    }
  }, [props.account_id]);

  return (
    <section className="app-main">
      {props.account.id > 0 ? (
        <>
          <div className="red-green-refactor specific">
            <nav className="nav-bar">
              <div className={`toggle-menu ${displayMenu ? "none" : ""}`}>
                <NavLink className="nav-item" to="/add-profile">
                  Add Profile
                </NavLink>
                <button
                  className="nav-item"
                  onClick={(event) => {
                    event.preventDefault();
                    props.logout(props);
                  }}
                >
                  Log Out
                </button>
              </div>
              <label className="hamburger">
                <ul
                  onClick={() => {
                    setDisplayMenu(!displayMenu);
                  }}
                >
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </label>
            </nav>
          </div>
          <div className="red-green-refactor">
            {/* <Account account={props.account} /> */}
            {props.account.profiles.map((profile) => {
              return <Profile key={profile.id} profile={profile} />;
            })}
          </div>
        </>
      ) : (
        <div>
          <p>Something went wrong. Please log out and log back in.</p>
          <button
            className="logout-button"
            onClick={(event) => {
              event.preventDefault();
              props.logout(props);
            }}
          >
            Log out
          </button>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = ({ accountReducer, loginReducer, thingReducer }) => {
  return {
    account: accountReducer.account,
    account_id: loginReducer.account_id,
    isLoggedIn: loginReducer.isLoggedIn,
    thing: thingReducer.thing,
  };
};

const mapDispatchToProps = { getThing, logout, getAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
