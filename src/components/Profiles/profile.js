import React from "react";
import { Link } from "react-router-dom";

import Want from "../Wants/wants";
import Need from "../Needs/needs";

const Profile = props => {
  console.log("profile props: ", props);
  return (
    <div>
      <h3>Profile name: {props.profile.name}</h3>
      <Link
        to={{
          pathname: "/add-need",
          needProps: { profile_id: props.profile.id }
        }}
      >
        Create New need
      </Link>
      <Link
        to={{
          pathname: "/add-want",
          wantProps: { profile_id: props.profile.id }
        }}
      >
        Create New want
      </Link>
      <div>
        {props.profile.needs.map(need => {
          return <Need key={need.id} need={need} />;
        })}
      </div>
      <div>
        {props.profile.wants.map(want => {
          return <Want key={want.id} want={want} />;
        })}
      </div>
    </div>
  );
};

export default Profile;
