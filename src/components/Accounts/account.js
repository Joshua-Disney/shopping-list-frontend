import React from "react";
import { connect } from "react-redux";

import Profile from "../Profiles/profile";

const Account = props => {
  console.log("account: ", props.account);

  return (
    <div>
      {/* <div>
        <h2>Account id: {props.account_id}</h2>
        <h2>Verrified id: {props.account.id}</h2>
      </div> */}
      {/* <div> */}
      {props.account.profiles.map(profile => {
        return <Profile key={profile.id} profile={profile} />;
      })}
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    account_id: loginReducer.account_id
  };
};

export default connect(mapStateToProps, {})(Account);

// Dead component.  Archiving just in case.
