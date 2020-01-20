import React from "react";
import { connect } from "react-redux";

import { getAccount } from "../../store/actions";
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

const mapStateToProps = ({ accountReducer, loginReducer }) => {
  return {
    account: accountReducer.account,
    account_id: loginReducer.account_id
  };
};

const mapDispatchToProps = { getAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Account);
