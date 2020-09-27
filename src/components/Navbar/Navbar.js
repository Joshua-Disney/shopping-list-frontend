import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../store/actions";
import Hamburger from "../../ui/Hamburger";
import OutsideClick from "../Helpers/outsideClickWrapper";

// const thing = () = {""}

const Navbar = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);

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
        <OutsideClick onOutsideClick={() => setDisplayMenu(false)}>
          <div
            className={`toggle-menu ${
              displayMenu ? "block" : "hidden"
            } absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl`}
          >
            <NavLink
              className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
              to="/settings"
              onClick={() => setDisplayMenu(false)}
            >
              Settings
            </NavLink>
            {/* this should be a link */}
            <button
              className="w-block px-4 py-2 text-gray-800 hover:bg-blue-200 text-left w-full"
              onClick={(event) => {
                setDisplayMenu(false);
                props.logout(props);
              }}
            >
              Log Out
            </button>
          </div>
        </OutsideClick>
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
