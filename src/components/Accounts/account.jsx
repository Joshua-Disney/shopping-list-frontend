import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getAccount } from "../../store/actions";
import Profile from "./Profiles/profile";

const Account = props => {
  const [account, setAccount] = useState({});

  useEffect(() => {
    console.log("grabbing account info");
    // console.log("account: ", props.account);
    props.getAccount(props.account_id);
  }, [props.account_id]);

  useEffect(() => {
    setAccount({ account: props.account });
  });

  return (
    <div>
      <h2>Account id: {props.account_id}</h2>
      {account ? (
        <div>
          {account.profiles.forEach(profile => {
            return <Profile key={profile.id} profile={profile} />;
          })}
        </div>
      ) : (
        <h3>This is where profiles would go if they existed.</h3>
      )}
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
