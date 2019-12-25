import React from "react";
// import { connect } from "react-redux";

// import { getAccount } from "../../store/actions";

const Profile = props => {
  return (
    <div>
      <h3>Profile name: {props.profile.name}</h3>
    </div>
  );
};

// const mapStateToProps = ({ accountReducer }) => {
//   return {
//     account: accountReducer.account
//   };
// };

// const mapDispatchToProps = { getAccount };

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);

export default Profile;
