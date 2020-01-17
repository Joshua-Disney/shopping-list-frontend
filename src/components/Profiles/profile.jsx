import React from "react";

import Want from "../Wants/wants";
import Need from "../Needs/needs";

const Profile = props => {
  return (
    <div>
      <h3>Profile name: {props.profile.name}</h3>
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
