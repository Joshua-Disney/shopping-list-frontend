import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { getThing, logout, getAccount } from "../../store/actions";
import Hamburger from "../../ui/Hamburger";

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
            <nav className="bg-green-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hamburger display={displayMenu} onClick={() => setDisplayMenu(!displayMenu)} />
                <div
                  className={`toggle-menu ${displayMenu ? "hidden" : "block"} absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl`}
                >
                  <NavLink className="block px-4 py-2 text-gray-800 hover:bg-blue-200" to="/add-profile">
                    Add Profile
                  </NavLink>
                  <NavLink className="block px-4 py-2 text-gray-800 hover:bg-blue-200" to="/settings">
                    Settings
                  </NavLink>
                  {/* this should be a link */}
                  <button
                    className="w-block px-4 py-2 text-gray-800 hover:bg-blue-200 text-left w-full"
                    onClick={(event) => {
                      props.logout(props);
                    }}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className="red-green-refactor">
            {/* <Account account={props.account} /> */}
            {props.account.profiles.map((profile) => {
              return <Profile key={profile.id} profile={profile} />;
            })}
          </div>
          {/* <div>
            <NavLink className="nav-item" to="/settings">
              To settings page
            </NavLink>
          </div> */}
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
