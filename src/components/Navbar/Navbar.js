import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../store/actions";
import Hamburger from '../../ui/Hamburger';

const Navbar = (props) => {
	const [displayMenu, setDisplayMenu] = useState(true);

	if (!props.isLoggedIn) {
		return null;
	}

  return (
    <nav className="bg-green-800">
      <div className="px-6 sm:px-8 lg:px-10 container mx-auto relative">
        <Hamburger
          display={displayMenu}
          onClick={() => setDisplayMenu(!displayMenu)}
        />
        <div
          className={`toggle-menu ${
            displayMenu ? "hidden" : "block"
          } absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl`}
        >
          <NavLink
            className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
            to="/add-profile"
          >
            Add Profile
          </NavLink>
          <NavLink
            className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
            to="/settings"
          >
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
  );
};

const mapStateToProps = ({ accountReducer, loginReducer, thingReducer }) => {
  return {
    isLoggedIn: loginReducer.isLoggedIn,
  };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
